import User from '../models/user.model.js'

export const getUser = async(req,res,next)=>{
    try{
        const user=await User.find();
        res.status(200).json({
            success:true,
            message:'Fetched all users successfully',
            data:user,

        })
    }catch(err){
        next(err);
    }
}


export const getUserById = async(req,res,next)=>{
    try{
        const user=await User.findById(req.params.id).select('-password');

        if(!user){
            const error=new Error('user not found');
            error.statusCode=404;
            throw error;
        }

        res.status(200).json({
            success:true,
            message:'Fetched user details successfully',
            data:user,
        })
    }catch(err){
        next(err);
    }
}