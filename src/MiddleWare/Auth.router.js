import jwt from 'jsonwebtoken';
const Auth=()=>{
    return(req,res,next)=>{
      try{
        const {token}=req.headers;
        const decode =jwt.verify(token,'roaa');
        if(decode.role !='admin'){
          return res.status(400).json({message:"not authorized"});
        }
        req.id=decode.id; //to know which user send req
        next();
      }catch(error){
        return res.status(500).json({message:"server error",error});
      }
  

    }
 }

 export default Auth;