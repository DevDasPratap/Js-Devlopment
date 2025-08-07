import { Button } from "@/components/ui/button";

// export default function Login() {
//     return (
//         <div className="flex justify-center item-center h-screen">
//             <h1 className="text-3xl font-bold">Login</h1>
//             <form className="flex flex-col items-center">
//                 <input type="text" placeholder="Username" className="border p-2 mb-4" />
//                 <input type="password" placeholder="Password" className="border p-2 mb-4" />
//                 <button type="submit" className="bg-blue-500 text-white p-2">Login</button>
//                 <p className="mt-4">
//                     Don't have an account? <a href="/auth/register" className="text-blue-500">Register</a>
//                 </p>
//             </form>
//         </div>
//     )
// }
function handleLogin(event) {
    event.preventDefault();
    // Add login logic here
    console.log("Login button clicked");
}

export default function Login() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-sm">
                <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
                <form className="flex flex-col items-center" onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Username"
                        className="border p-2 mb-4 w-full"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="border p-2 mb-4 w-full"
                    />
                    <Button type="submit" className="w-full">
                        Login
                    </Button>
                    <p className="mt-4 text-center">
                        Don't have an account?{" "}
                        <a href="/auth/register" className="text-blue-500">
                            Register
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}