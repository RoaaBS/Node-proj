// import  multer from 'multer';         
// function fileuploads(){


// const storage = multer.diskStorage({    //multer method
//     destination: (req, res, cb)=> {
//       cb(null, 'uploads')
//     },
//     filename:(req, file, cb)=> {
//      const name_ofFile = Date.now() + '-' + Math.round(Math.random() * 1E9)
//      cb(null, name_ofFile + '-' + file.originalname)
//     }
//   });
  
//   function fileFilter (req, file, cb) {

//   if(file.mimetype =='image/png' ||file.mimetype =='image/jpeg' ){
//     cb(null, true)
//   }else{
//   cb("invalid formate",false)
//   }
  
//   }
//   const upload = multer({ fileFilter,storage })
// return upload;}
//   export default fileuploads;





import  multer from 'multer';         
function fileuploads(){


const storage = multer.diskStorage({});   //cloudinary method
 

  
  function fileFilter (req, file, cb) {

  if(file.mimetype =='image/png' ||file.mimetype =='image/jpeg' ){
    cb(null, true)
  }else{
  cb("invalid formate",false)
  }
  
  }
  const upload = multer({ fileFilter,storage })
return upload;}
  export default fileuploads;