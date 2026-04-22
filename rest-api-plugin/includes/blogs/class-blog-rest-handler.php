<?php


/**
 *
 * Blog_Rest_Handler class.
 *
 * Handles REST API routes for blogs.
 */

namespace Rest_Api\Blogs;

class Blog_Rest_Handler {

	/**
	 * The loader that's responsible for maintaining and registering all hooks that power
	 * the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      Rest_Api_Loader    $loader    Maintains and registers all hooks for the plugin.
	 */
	private $loader;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @param Rest_Api_Loader $loader The loader instance to register hooks with.
	 */
	public function __construct( $loader ) {
		$this->loader = $loader;
	}

	/**
	 * Register hooks related to REST API routes for blogs.
	 *
	 * @since    1.0.0
	 */
	public function register_hooks() {
		// Register REST API routes here if needed.
		$this->loader->add_action( 'rest_api_init', $this, 'register_blog_routes' );
	}

	/**
	 * Register REST API routes for blogs.
	 *
	 * @since    1.0.0
	 */
	public function register_blog_routes() {

		$namespace = 'rest/v1';
		register_rest_route(
			$namespace,
			'/create-blog',
			array(
				'methods'  => \WP_REST_Server::CREATABLE,
				'callback' => array( $this, 'create_blog' ),
				'permission_callback' => '__return_true',
			)
		);

		register_rest_route(
			$namespace,
			'/get_blogs',
			array(
				'methods'  => \WP_REST_Server::READABLE,
				'callback' => array( $this, 'get_blogs' ),
				'permission_callback' => '__return_true',
			)
		);

		register_rest_route(
			$namespace,
			'/update-blog/(?P<id>\d+)',
			array(
				'methods'  => \WP_REST_Server::EDITABLE,
				'callback' => array( $this, 'update_blog' ),
				'permission_callback' => '__return_true',
				'args'     => array(
					'id' => array(
						'validate_callback' => function( $param, $request, $key ) {
							return is_numeric( $param );
						},
					),
				),
			)
		);

		register_rest_route(
			$namespace,
			'/delete-blog/(?P<id>\d+)',
			array(
				'methods'  => \WP_REST_Server::DELETABLE,
				'callback' => array( $this, 'delete_blog' ),
				'permission_callback' => '__return_true',
				'args'     => array(
					'id' => array(
						'validate_callback' => function( $param, $request, $key ) {
							return is_numeric( $param );
						},
					),
				),
			)
		);
	}

	/**
	 * Handle the creation of a new blog via REST API.
	 *
	 * @param \WP_REST_Request $request The REST request object containing the blog data.
	 * @return \WP_REST_Response|\WP_Error The response object on success or error on failure.
	 */
	public function create_blog( \WP_REST_Request $request ) {
		// Handle blog creation logic here.
		$params = $request->get_json_params();
		error_log( 'Received blog creation request with params: ' . print_r( $params, true ) );
		$title     = isset( $params['title'] ) ? sanitize_text_field( $params['title'] ) : '';
		$content   = isset( $params['content'] ) ? sanitize_textarea_field( $params['content'] ) : '';
		$tenant_id = isset( $params['tenant_id'] ) ? sanitize_text_field( $params['tenant_id'] ) : '';
		if ( empty( $title ) || empty( $content ) ) {
			return new \WP_Error( 'missing_fields', 'Title and content are required.', array( 'status' => 400 ) );
		}

		$post_id = wp_insert_post(
			array(
				'post_title'   => $title,
				'post_content' => $content,
				'post_status'  => 'publish',
				'post_type'    => 'blog',
			)
		);

		add_post_meta( $post_id, 'tenant_id', $tenant_id );
		return rest_ensure_response(
			array(
				'id'        => $post_id,
				'title'     => $title,
				'content'   => $content,
				'tenant_id' => $tenant_id,
			)
		);
	}

	/**
	 * Handle the update of an existing blog via REST API.
	 *
	 * @param \WP_REST_Request $request The REST request object containing the blog data.
	 * @return \WP_REST_Response|\WP_Error The response object on success or error on failure.
	 */
	public function update_blog( \WP_REST_Request $request ) {
		$id   = $request->get_param( 'id' );
		$post = get_post( $id );

		if ( ! $post || 'blog' !== $post->post_type ) {
			return new \WP_Error( 'not_found', 'Blog not found.', array( 'status' => 404 ) );
		}

		$params = $request->get_json_params();
		$data   = array(
			'ID' => $id,
		);

		if ( isset( $params['title'] ) ) {
			$data['post_title'] = sanitize_text_field( $params['title'] );
		}
		if ( isset( $params['content'] ) ) {
			$data['post_content'] = sanitize_textarea_field( $params['content'] );
		}

		$post_id = wp_update_post( $data );

		if ( is_wp_error( $post_id ) ) {
			return $post_id;
		}

		if ( isset( $params['tenant_id'] ) ) {
			update_post_meta( $post_id, 'tenant_id', sanitize_text_field( $params['tenant_id'] ) );
		}

		return rest_ensure_response(
			array(
				'id'      => $post_id,
				'message' => 'Blog updated successfully.',
			)
		);
	}

	/**
	 * Handle the deletion of an existing blog via REST API.
	 *
	 * @param \WP_REST_Request $request The REST request object.
	 * @return \WP_REST_Response|\WP_Error The response object on success or error on failure.
	 */
	public function delete_blog( \WP_REST_Request $request ) {
		$id   = $request->get_param( 'id' );
		$post = get_post( $id );

		if ( ! $post || 'blog' !== $post->post_type ) {
			return new \WP_Error( 'not_found', 'Blog not found.', array( 'status' => 404 ) );
		}

		$result = wp_delete_post( $id, true );

		if ( ! $result ) {
			return new \WP_Error( 'delete_failed', 'Failed to delete blog.', array( 'status' => 500 ) );
		}

		return rest_ensure_response(
			array(
				'id'      => $id,
				'message' => 'Blog deleted successfully.',
			)
		);
	}

	/**
	 * Handle the retrieval of blogs via REST API.
	 *
	 * @param \WP_REST_Request $request The REST request object containing the blog data.
	 * @return \WP_REST_Response|\WP_Error The response object on success or error on failure.
	 */
	public function get_blogs( \WP_REST_Request $request ) {
		$args     = array(
			'post_type'   => 'blog',
			'post_status' => 'publish',
			'meta_key'    => 'tenant_id',
			'meta_value'  => $request->get_param( 'tenant_id' ),
			'numberposts' => -1,
		);
		$blogs    = get_posts( $args );
		$response = array();

		foreach ( $blogs as $blog ) {
			$response[] = array(
				'id'      => $blog->ID,
				'title'   => $blog->post_title,
				'content' => $blog->post_content,
			);
		}

		return rest_ensure_response( $response );
	}
}
