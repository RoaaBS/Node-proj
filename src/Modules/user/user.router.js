import { Router } from "express";
import UserModel from "../../../DB/Model/user.model.js";
import jwt from 'jsonwebtoken';
import Auth from "../../MiddleWare/Auth.router.js";
import fileuploads from '../Utilitys/multer.js'
import cloudinary from '../Utilitys/cloudinary.js';

const router=Router()

  //get all users
  router.get('/',Auth(),async(req,res)=>{
  
    const user =await UserModel.findAll({
      attributes:['id','name','email'] //to detect things should get to front end
    });
 
    return res.status(200).json({message:"success",user});
   

  });
  
  //update user
  router.put('/:id', Auth(), fileuploads().single('image'), async (req, res) => {
          const { id } = req.params; // Get user ID from URL
          const user = await UserModel.findByPk(id);
          if (user==null) {
              return res.status(404).json({ message: "User not found" });
          }
  
          const {secure_url}=await cloudinary.uploader.upload(req.file.path);
          user.profilePic =secure_url;
          await user.save();
          return res.status(200).json({message:"success"});

          
  });
  

  
  
  //delete user
  router.delete('/:id',Auth(),async(req,res)=>{
  
    const user =await UserModel.findByPk(id);
    if(user ==null){
    return res.status(404).json({message:"user not found"});}
    await user.destroy();
    return res.status(200).json({message:"success"});
 

 
  });

  export default router;