import BlogModel from '../../../DB/Model/blog.model.js';
import UserModel from '../../../DB/Model/user.model.js';
import AppError from '../Utilitys/AppErorr.js';

export const GetBlog = async (req, res) => {
    const bolgs = await BlogModel.findAll({
        attributes: ['id', 'title'],
        include: {
            model: UserModel,
            attributes: ['id', 'name'],
        },
    });

    return res.status(200).json({ message: "success", bolgs });
};
export const GetDetails = async (req, res,next) => {
  const {id}=req.params;
  const bolgs = await BlogModel.findByPk(id);
  if( bolgs == null){
    return next(new AppError("Blogs not found",404));
  }

    return res.status(200).json({ message: "success", bolgs });
};

export const CreateBlog = async (req, res) => {
     //to know which user send blog  return res.json(req.id);
    const { title, description } = req.body;
    const bolgs = await BlogModel.create({ title, description, UserId: req.id });

    return res.status(201).json({ message: "success", bolgs });
};
