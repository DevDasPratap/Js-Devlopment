// Call back hell
/*
1. find user by username
2. find posts by userId
3. find latest post
4. find comments by postId
5. find latest comment
6. find username of the commentd user
*/
/*
/users?username=[username]
/posts?user_id=[user_id]
/comments?post_id=[post_id]
/users?username=[username]
*/

// Call back hell
// function getData(path, cb) {
//         const data = {}
//         cb(data)
//     // return []
// }

// function getDetails(username) {
//     getData(`/users?username=${username}`, (user) => {
//         getData(`/posts?user_id=${user.id}`, (posts) => {
//             getData(`/comments?post_id=${posts[0].id}`, (comments) => {
//                 getData(`/users?username=${comments[0].username}`, (user) => {
//                     console.log(user)
//                 })
//             })
//         })
//     })
// }


// const username = 'Pratap Das';
// const user = { id: 1 };
// const posts = [{ id: 101 }];
// const comments = [{ username: 'commenter' }];

// getDetails(username);

// promise
// const isResolved = true
// const promise = new Promise((resolve, reject)=>{
//     if (isResolved) {
//         resolve('Resolve complete')
//     }else{
//         reject('Data reject')
//     }
// })
// console.log(promise)
// promise
// .then((result)=>{
//     console.log(result)
// })
// .catch((error)=>{
//     console.log('Reject')
//     console.log(error)
// })

// promise implement task
// function wait(ms) {
//     const promise = new Promise((resolve)=>{
//         setTimeout(resolve, ms)
//     })
//     return promise
// }
// wait(1000).then(()=>{
//     console.log('Done in 100ms')
// })
// wait(2000).then(()=>{
//     console.log('Done in 200ms')
// })
// wait(3000).then(()=>{
//     console.log('Done in 300ms')
// })


/*
/users?username=[username]
/posts?user_id=[user_id]
/comments?post_id=[post_id]
/users?username=[username]
*/

// const getData = (url)=>Promise.resolve()
// getData(`/users?username=pratap`)
// .then(user=>{
//     return getData(`/posts?user_id=${user.id}`)
// })
// .then((posts)=>{
//     const latestPost = posts[0]
//     return getData(`/comments?post_id=${latestPost.id}`)
// })
// .then((comments)=>{
//     const latestComment = comments[0]
//     return getData(`/comments?post_id=${latestComment.username}`)
// })
// .then((user)=>{
//    console.log(user)
// })
// .catch((e)=>{
//     console.log(e)
// })


// async function getDetails(username) {
//     try {
//         const mainuser = await get(`/users?username=${username}`)
//         const posts = await get(`/posts?user_id=${mainuser.id}`)
//         const comments = await get(`/comments?post_id=${posts[0].id}`)
//         const user = await get(`/users?username=${comments[0].username}`)
//         console.log(user)
//     } catch (error) {
//         console.log(error)
//     }
// }

// final task
const users_url = `https://jsonplaceholder.typicode.com/users`
const posts_url = `https://jsonplaceholder.typicode.com/posts`
const comments_url = `https://jsonplaceholder.typicode.com/comments`

async function getDetails(username) {
    try {
        const {data: user} = await fetch(`${users_url}?username=${username}`)
    console.log(user)
    } catch (error) {
        console.log(error)
    }
}
getDetails('Bret')