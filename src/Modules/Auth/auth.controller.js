import UserModel from "../../../DB/Model/user.model.js";
import  bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { SendEmail } from "../Utilitys/SendEmail.js";
import { loginSchema, registerSchema } from './Auth.validation.js'// Adjust the path as needed
import AppError from '../Utilitys/AppErorr.js'
export const register =async (req, res) => {
  
    const { name, email, password } = req.body;
    
    const result = registerSchema.validate({ name, email, password }, { abortEarly: false });
    if (result.error) {
      return res.status(400).json({ message: "Validation error", error: result.error });
    }

    const hashpassword = bcrypt.hashSync(password, 8);
    const user = await UserModel.create({
      name,
      email,
      password: hashpassword
    });

    
    const html = `
      <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
        <h2 style="color: #007bff;">New User</h2>
        <p style="font-size: 18px;">Welcome, <strong>${name}</strong>! 🎉</p>
      </div>
    `;

    await SendEmail(email, "Welcome to our platform!", html);

    return res.status(201).json({ message: "User registered successfully!", user });
 
}


 export const login =async(req,res,next)=>{
  
    const{email,password}=req.body;
    const result=loginSchema.validate( {email,password},{abortEarly:false});
    if(result.error){
      return res.status(400).json({message:"validation error",error:result.error});
    }
    const user= await UserModel.findOne({
      where:{email:email}
    });
    if(user==null){
      // return res.status(404).json({message:'invalid email'})
      return next(new AppError("invalid email",404));
    }
    const check =await bcrypt.compareSync(password,user.password);
    if(check ==false){
      // return res.status(404).json({message:"invalid password"});
      return next(new AppError("invalid password",400));
    }
    const token = jwt.sign({ id:user.id,name:user.name ,role:user.role}, 'roaa');
    SendEmail();
    return res.status(200).json({message:"success",token});
 
  
}