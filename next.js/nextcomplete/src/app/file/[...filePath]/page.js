// Catch all routes
export default async function FilePath({ params }) {
// [...filePath] is a catch-all route that will match any path after the base URL.
// [...filePath] is a dynamic route that will match any path after the base URL.
// The filePath parameter will contain the matched path as an array of strings.
// For example, if the URL is http://localhost:3000/file/any-path/image.png,
// the filePath parameter will be ['any-path', 'image.png'].
// [...FilePath] it is required to use the brackets around the filePath parameter.

    // http://localhost:3000/file/any-path/image.png
    // http://localhost:3000/file/any-path/nested-path/nested-path
    // http://localhost:3000/file/any-route-open
    const { filePath } = await params;
    console.log(filePath);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-2xl font-bold">File Path</h1>
        <p className="text-lg">Post ID: {filePath}</p>
        <p className="text-lg">This is the comments page for the blog post with ID: {filePath}</p>
        <p className="text-lg">This is a catch-all route that will match any path after the base URL.</p>
        <p className="text-lg">You can use this to create dynamic routes that match any path.</p>
        <p className="text-lg">File <i>/{filePath.join('/')}</i> </p>
        </div>
    );
}