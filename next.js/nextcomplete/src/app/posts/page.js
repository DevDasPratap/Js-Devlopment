// Data fetching client component

"use client"
import { useEffect, useState } from "react"

const Posts = () => {
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
                if (!response.ok) {
                    throw new Error('Failed to fetch posts')
                }
                const data = await response.json()
                setPosts(data)
            } catch (error) {
                console.error('Error fetching posts:', error)
            }
        }
        fetchPosts()
    }, [])
    
    return (
        <div className="posts-page">
            <h1>Posts</h1>
            <div className="posts-list">
                {posts.map(post => (
                    <div key={post.id} className="post-card">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Posts