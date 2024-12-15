import prisma from "../database/db.config.js";

export const createUser = async (req, res)=>{
    const {name, email, password} = req.body
    const findUser = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    if (findUser) {
        return res.json({status: 400, message: 'Email already exist'})
    }

    const newUser = await prisma.user.create({
        data:{
            name: name,
            email:email,
            password: password
        }
    })
    return res.json({status: 200, message: 'User created', data: newUser})
}

export const updateUser = async (req, res)=>{
    const userId = req.params.id
    const {name, email, password} = req.body

    const updateUser = await prisma.user.update({
        where:{
            id: Number(userId)
        },
        data:{
            name,
            email,
            password
        }
    })
    return res.json({status: 200, message: 'User updated', data: updateUser })
}

export const getUsers = async (req, res)=>{
    const users = await prisma.user.findMany({

        // with user relation
        // include:{
        //     // post: true
        //     post: {
        //         select:{
        //             title: true,
        //             description: true,
        //             comment_count: true
        //         }
        //     }
        // }

        // if i want only user post and comment count
        select:{
            _count:{
                select:{
                    post:true,
                    comment:true
                }
            }
        }
    })
    return res.json({status: 200, message: 'Fetch all users', data: users })
}

export const getSignleUser = async (req, res)=>{
    const userId = req.params.id
    const user = await prisma.user.findUnique({
        where:{
            id: Number(userId)
        }
    })
    return res.json({status: 200, message: 'Fetch user', data: user })
}

export const deleteUser = async(req, res)=>{
    const userId = req.params.id
    await prisma.user.delete({
        where:{
            id: Number(userId)
        }
    })
    return res.json({status: 200, message: 'user deleted' })
}
