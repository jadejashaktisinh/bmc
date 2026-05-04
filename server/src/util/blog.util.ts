import FormData from "form-data";
import { RequestWP } from "./wp.util.js";

export async function WPGetTenantBlogs(id: number) {
    const data = RequestWP('/rest/v1/get_blogs?tenant_id=' + id, {}, "GET", {});
    return data
}

export async function WPGetBlog(id: number) {
    const data = RequestWP('/wp/v2/blogs/' + id, {}, "GET", {});
    return data
}

export async function WPCreateBlog(body: { title: string, content: string, tenant_id: number, file: Express.Multer.File | undefined }) {
    const formdata = new FormData();
    formdata.append('title', body.title);
    formdata.append('content', body.content);
    formdata.append('tenant_id', String(body.tenant_id));
    if (body.file) {
        formdata.append('file', body.file?.buffer, {
            filename: body.file.originalname,
            contentType: body.file.mimetype,
        });
    }

    const data = RequestWP('/rest/v1/create-blog', body, "POST", formdata.getHeaders(),true);
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