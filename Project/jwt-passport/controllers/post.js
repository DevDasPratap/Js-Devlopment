const Post = require("../models/post")

const createPost = async (req, res)=>{
    try {
        const {title, description, image} = req.body
        const userId = req.user._id //from token
    
        let newPost = await new Post(
            {
                title,
                description,
                image,
                createdBy: userId
            }
        ).save()
    
        return res.status(201).json(
            {
                success: true,
                message: 'New post created',
                data: newPost
            }
        )
    } catch (error) {
        console.log(error.toString())
        return res.status(500).json(
            {
                success: false,
                message:'Error in create post'
            }
        )
    }
}

module.exports = {
    createPost
}