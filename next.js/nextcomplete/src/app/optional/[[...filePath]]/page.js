export default async function OptionalFilePath({ params }) {
    // [[...filePath]] is an optional catch-all route that will match any path after the base URL.
    // http://localhost:3000/optional
    // http://localhost:3000/optional/route/nested-route
    const { filePath } = await params;
    console.log(filePath);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1> This is optional catch all route </h1>
        <p> [[...filePath]] means it is optional </p>
        </div>
    );
}