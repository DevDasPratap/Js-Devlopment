import prisma from "../database/db.config.js";

export const createComment = async (req, res) => {
    const { user_id, post_id, comment } = req.body;
  
    //   * Increase the comment counter
    await prisma.post.update({
      where: {
        id: Number(post_id),
      },
      data: {
        comment_count: {
          increment: 1,
        },
      },
    });
  
    const newComent = await prisma.comment.create({
      data: {
        user_id: Number(user_id),
        post_id: Number(post_id),
        comment,
      },
    });
  
    return res.json({
      status: 200,
      data: newComent,
      msg: "Comment created successfully.",
    });
};
  

// export const updatePost = async (req, res)=>{
//     const {user_id, title, description} = req.body

//     const updatePost = await prisma.comment.update({
//         where:{
//             id: Number(user_id)
//         },
//         data:{
//             title,
//             description
//         }
//     })
//     return res.json({status: 200, message: 'Post updated', data: updatePost })
// }


// export const showAllComments = async (req, res)=>{
//     const comments = await prisma.comment.findMany({})
//     return res.json({status: 200, message: 'Fetch all comments', data: comments })
// }

export const showAllComments = async (req, res) => {
    const comments = await prisma.comment.findMany({
      include: {
        user: true,
        post: {
          include: {
            user: true,
          },
        },
      },
    });
    return res.json({ status: 200, data: comments });
  };

export const showComment = async (req, res)=>{
    const commentId = req.params.id
    const comment = await prisma.comment.findFirst({
        where:{
            id: Number(commentId)
        }
    })
    return res.json({status: 200, message: 'Fetch comment', data: comment })
}

export const deleteComment = async (req, res) => {
    const commentId = req.params.id;
  
    //   * Increase the comment counter
    await prisma.post.update({
      where: {
        id: Number(post_id),
      },
      data: {
        comment_count: {
          decrement: 1,
        },
      },
    });
    await prisma.comment.delete({
      where: {
        id: Number(commentId),
      },
    });
  
    return res.json({ status: 200, msg: "Post deleted successfully" });
  };