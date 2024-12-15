import prisma from "../database/db.config.js";

export const createPost = async (req, res)=>{
    const {user_id, title, description} = req.body

    const newPost = await prisma.post.create({
        data:{
            user_id: Number(user_id),
            title,
            description
        }
    })
    return res.json({status: 200, message: 'Post created', data: newPost})
}

export const updatePost = async (req, res)=>{
    const {user_id, title, description} = req.body

    const updatePost = await prisma.post.update({
        where:{
            id: Number(user_id)
        },
        data:{
            title,
            description
        }
    })
    return res.json({status: 200, message: 'Post updated', data: updatePost })
}

// export const getPosts = async (req, res)=>{
//     const posts = await prisma.post.findMany({})
//     return res.json({status: 200, message: 'Fetch all posts', data: posts })
// }

export const getPosts = async (req, res) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    if (page <= 0) {
      page = 1;
    }
    if (limit <= 0 || limit > 100) {
      limit = 10;
    }
    const skip = (page - 1) * limit;
    const posts = await prisma.post.findMany({
      skip: skip,
      take: limit,
      include: {
        comment: {
          include: {
            user: {
              select: {
                name: true,
              },
            },
          },
        },
      },
      orderBy: {
        id: "desc",
      },
      where: {
        NOT: {
          title: {
            endsWith: "Blog",
          },
        },
      },
    });
  
    //   * to get the total posts count
    const totalPosts = await prisma.post.count();
    const totalPages = Math.ceil(totalPosts / limit);
    return res.json({
      status: 200,
      data: posts,
      meta: {
        totalPages,
        currentPage: page,
        limit: limit,
      },
    });
  };

export const getSinglePost = async (req, res)=>{
    const postId = req.params.id
    const post = await prisma.post.findFirst({
        where:{
            id: Number(postId)
        }
    })
    return res.json({status: 200, message: 'Fetch user', data: post })
}

export const deletePost = async(req, res)=>{
    const postId = req.params.id
    await prisma.user.delete({
        where:{
            id: Number(postId)
        }
    })
    return res.json({status: 200, message: 'post deleted' })
}

// To Seach the post
export const searchPost = async (req, res) => {
    const query = req.query.q;
    const posts = await prisma.post.findMany({
      where: {
        description: {
          search: query,
        },
      },
    });
  
    return res.json({ status: 200, data: posts });
  };