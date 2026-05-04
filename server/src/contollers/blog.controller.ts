import type { Request, Response } from "express";
import { WPGetTenantBlogs, WPGetBlog, WPCreateBlog, WPUpdateBlog, WPDeleteBlog } from "../util/blog.util.js";



export async function GetTenantBlogs(req: Request, res: Response) {
    const tenantId = req.params.id
    const blogs = await WPGetTenantBlogs(Number(tenantId));
    console.log('data on init => ', blogs)
    res.status(200).json({
        success: true,
        blogs: blogs
    })
}

export async function GetBlog(req: Request, res: Response) {
    const blogId = req.params.id

    const blogs = await WPGetBlog(Number(blogId));
    console.log('data on init => ', blogs)
    res.status(200).json({
        success: true,
        blogs: blogs
    })
}

export async function CreateBlog(req: Request, res: Response) {
    const { title, content, tenant_id } = req.body;
    const file = req.file;
    const createdBlog = await WPCreateBlog({ title, content, tenant_id,file });
    res.status(200).json({
        success: true,
        blog: createdBlog
    })


}

export async function UpdateBlog(req: Request, res: Response) {

    const { title, content, tenant_id, blogId } = req.body;

    const createdBlog = await WPUpdateBlog(blogId, { title, content, tenant_id });
    res.status(200).json({
        success: true,
        blog: createdBlog
    })
}

export async function DeleteBlog(req: Request, res: Response) {
    const blogId = req.params.id;

    const createdBlog = await WPDeleteBlog(Number(blogId));
    res.status(200).json({
        success: true,
        blog: createdBlog
    })
}