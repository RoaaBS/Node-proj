import joi from 'joi'
  export const registerSchema = joi.object({
    name:joi.string().min(2).max(6).required(),
    email:joi.string().email().required(),
    password:joi.string().min(3).required(),
 })
 export const loginSchema = joi.object({
    email:joi.string().email().required(),
    password:joi.string().min(3).required(),
 })