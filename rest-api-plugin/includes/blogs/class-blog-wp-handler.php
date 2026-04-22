<?php

/**
 * Blog_WP_Handler class.
 *
 * Handles WordPress blog-related for WordPress side.
 *
 * eg register blog cpt, taxonomies, etc.
 *
 * @package Rest_Api
 */

namespace Rest_Api\Blogs;

class Blog_WP_Handler {


	/**
	 * The loader that's responsible for maintaining and registering all hooks that power
	 * the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      Rest_Api_Loader    $loader    Maintains and registers all hooks for the plugin.
	 */
	private $loader;

	public function __construct( $loader ) {
		$this->loader = $loader;
	}

	public function register_hooks() {
		$this->loader->add_action( 'init', $this, 'register_blog_post_type' );
		$this->loader->add_action( 'add_meta_boxes', $this, 'blogs_meta_box' );
		$this->loader->add_action( 'save_post', $this, 'save_blog_metadata' );
	}

	/**
	 * Register the blog post type.
	 *
	 * @since    1.0.0
	 */
	public function register_blog_post_type() {
		register_post_type(
			'blog',
			array(
				'labels'                => array(
					'name'          => 'Blogs',
					'singular_name' => 'Blog',
				),
				'public'                => true,
				'has_archive'           => true,
				'show_in_rest'          => true,
				'rest_base'             => 'blogs',
				'rest_controller_class' => 'WP_REST_Posts_Controller',
				'supports'              => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' ),
			)
		);
	}

	/**
	 * Add meta box for blog cpt
	 *
	 * @since    1.0.0
	 */
	public function blogs_meta_box() {
		add_meta_box(
			'tenant_id',
			'Tenant Id',
			array( $this, 'meta_box_callback' ),
			'blog',
			'normal',
			'default'
		);
	}

	/**
	 * Handler for meta box
	 *
	 * @param mixed $post The post object.
	 * @since    1.0.0
	 */
	public function meta_box_callback( $post ) {

		wp_nonce_field( 'meta_box_nonce', 'meta_box_nonce' );
		$value = get_post_meta( $post->ID, 'tenant_id', true );

		echo '<label for="tenant_id">Tenant Id:</label>';
		echo '<input type="text" id="tenant_id" name="tenant_id" value="' . esc_attr( $value ) . '" size="25" />';
	}


	/**
	 * Saves metadata when post is saved
	 *
	 * @param mixed $post_id The post object.
	 * @since    1.0.0
	 */
	public function save_blog_metadata( $post_id ) {
		// 1. Verify nonce
		if ( ! isset( $_POST['meta_box_nonce'] ) || ! wp_verify_nonce( $_POST['meta_box_nonce'], 'meta_box_nonce' ) ) {
			return;
		}

		// 2. Check for autosave
		if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
			return;
		}

		// 3. Check user permissions
		if ( ! current_user_can( 'edit_post', $post_id ) ) {
			return;
		}

		// 4. Update the meta field
		if ( isset( $_POST['tenant_id'] ) ) {
			update_post_meta( $post_id, 'tenant_id', sanitize_text_field( $_POST['tenant_id'] ) );
		}
	}
}
