import { Router } from "express";
import { CreateBlog, DeleteBlog, GetBlog, GetTenantBlogs, UpdateBlog } from "../contollers/blog.controller.js";

const router = Router();

router.post('/blog/create', CreateBlog);
router.put('/blog/update', UpdateBlog);
router.delete('/blog/delete/:id', DeleteBlog);
router.get('/blog/:id', GetBlog);
router.get('/tenant/blogs/:id', GetTenantBlogs);

export default router;
