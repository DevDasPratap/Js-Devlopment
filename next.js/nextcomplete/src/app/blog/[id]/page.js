import {Metadata} from "next";


// dynamic generated metadata
export async function generateMetadata({ params }) {
    const { id } = await params;
    return {
        title: `Blog Post ${id}`,
        description: `This is the blog post with ID ${id}`,
    };
}

export default async function BlogPost({ params }) {
    const { id } = await params;
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-2xl font-bold">Blog Post</h1>
        <p className="text-lg">Post ID: {id}</p>
        </div>
    );
}