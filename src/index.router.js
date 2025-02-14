import userRouter from './Modules/user/user.router.js'
import AuthRouter from './Modules/Auth/auth.router.js'
import BlogRouter from './Modules/blog/blog.router.js'
import { ConnectDB } from "../DB/connection.js";
const initApp=(app,express)=>{
ConnectDB();
app.use(express.json());

app.use("/users", userRouter);
app.use("/auth", AuthRouter);
app.use("/blog", BlogRouter);

app.use((err,req,res,next)=>{ //global error handling 
    return res.status(err.statuscode).json({message:err.message})
})
}
export default initApp;