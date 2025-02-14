import { Router } from "express";
import { loginSchema, registerSchema } from './Auth.validation.js'
import validation from '../../MiddleWare/Validation.js'
import { asyncHandler } from '../Utilitys/catcherror.js';
import { login, register } from "./auth.controller.js";
const router=Router()

//create user Register
router.post('/register', validation(registerSchema),asyncHandler(register));


  //user login 
  router.post('/login',validation(loginSchema),asyncHandler(login));
  export default router;