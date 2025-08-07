export default async function Comments({ params }) {
    // http://localhost:3000/blog/blog/comments
    const { id, comment } = await params;
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-2xl font-bold">Comments</h1>
        <p className="text-lg">Post ID: {id}</p>
        <p className="text-lg">This is the comments page for the blog post with ID: {id}</p>

        {/* http://localhost:3000/blog/blog/comments/1 */}
        <p>This is blog id {id} and comment id {comment}</p>
        </div>
    );
}