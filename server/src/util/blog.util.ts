import { RequestWP } from "./wp.util.js";

export async function WPGetTenantBlogs(id: number) {
    const data = RequestWP('/rest/v1/get_blogs?tenant_id=' + id, {}, "GET", {});
    return data
}

export async function WPGetBlog(id: number) {
    const data = RequestWP('/wp/v2/blogs/' + id, {}, "GET", {});
    return data
}

export async function WPCreateBlog(body: { title: string, content: string, tenant_id: number }) {
    const data = RequestWP('/rest/v1/create-blog', body, "POST", { "Content-Type": "application/json" });
    return data
}


export async function WPUpdateBlog(id: number, body: { title: string, content: string, tenant_id: number }) {
    const data = RequestWP('/rest/v1/update-blog/' + id, body, "POST", { "Content-Type": "application/json" });
    return data
}

export async function WPDeleteBlog(id: number) {
    const data = RequestWP('/rest/v1/delete-blog/' + id, {}, "DELETE", { "Content-Type": "application/json" });
    return data
}