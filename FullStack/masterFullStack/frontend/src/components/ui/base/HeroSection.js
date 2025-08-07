import Image from "next/image";
import { Button } from "../button";
import { Link } from "lucide-react";
export default function HeroSection() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <div>
            <Image
                src="/banner.svg"
                alt="Welcome Image"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
            />
            </div>
            <div className="mt-8 text-center">
               <h1 className="text-6xl md:text-7xl lg:text">Clash</h1> 
               <p>Discover the better choise</p>
               <Link href="/auth/login">
               <Button className="mt-4 bg-white text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300">
                Get Started
               </Button>
               </Link>
            </div>
    </div>
  );
}