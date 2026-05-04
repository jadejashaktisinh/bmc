import { Router } from "express";
import { CreateBlog, DeleteBlog, GetBlog, GetTenantBlogs, UpdateBlog } from "../contollers/blog.controller.js";
import multer from 'multer'
const router = Router();

const upload = multer();
router.post('/blog/create', upload.single('file'), CreateBlog);
router.put('/blog/update', UpdateBlog);
router.delete('/blog/delete/:id', DeleteBlog);
router.get('/blog/:id', GetBlog);
router.get('/tenant/blogs/:id', GetTenantBlogs);

export default router;
