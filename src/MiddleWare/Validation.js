import AppError from '../Modules/Utilitys/AppErorr.js';
const validation = (Schema) => {

    return (req, res, next) => {
        const inputData={...req.body,...req.params};
        const validateResult = Schema.validate(inputData, { abortEarly: false });
        
        if(validateResult?.error){
            return next(new AppError(validateResult.error,400));
        }
        next();
        
       
        
    };
};
export default validation;