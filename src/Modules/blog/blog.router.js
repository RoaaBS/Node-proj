import { Router } from "express";
import validation from '../../MiddleWare/Validation.js'
import Auth from '../../MiddleWare/Auth.router.js';
import UserModel from '../../../DB/Model/user.model.js';
import {CreateBlog,GetBlog,GetDetails} from './blog.controller.js'
import { asyncHandler } from '../Utilitys/catcherror.js';
import { CreateBlogSchema, GetDetailsSchema } from './blog.validation.js';
const router=Router()
router.get('/',asyncHandler(GetBlog));
router.get('/:id',validation(GetDetailsSchema,'params'),asyncHandler(GetDetails));
router.post('/',Auth(),validation(CreateBlogSchema,'body'),asyncHandler(CreateBlog));
export default router;