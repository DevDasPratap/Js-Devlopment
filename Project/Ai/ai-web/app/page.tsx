// import { Button } from "@/components/ui/button";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div>
//       Hello next.js
//     </div>
//   );
// }

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="flex items-center justify-between p-5 bg-white shadow-lg sticky top-0 z-50">
        <div className="flex items-center">
          <Image src="/logo.svg" alt="Logo" width={120} height={50} />
        </div>
        <div className="flex items-center space-x-6">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
            🔥 Join membership just for $9.99/Month
          </span>
          <Link href="/dashboard">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 text-sm font-medium rounded-lg shadow-md hover:opacity-90 transition">
              Get Started
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-24 bg-gradient-to-b from-white to-gray-50">
        <h1 className="text-5xl font-extrabold leading-tight text-gray-900">
          Transform Your Work with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            AI Content Generator
          </span>
        </h1>
        <p className="mt-6 text-gray-700 max-w-2xl mx-auto text-lg">
          Revolutionize your content creation with our AI-powered app. Create engaging, high-quality text in seconds and save hours of work!
        </p>
        <Link href="/dashboard">
          <Button className="mt-8 px-8 py-3 text-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full shadow-md hover:opacity-90 transition">
            Get Started Now
          </Button>
        </Link>
        {/* <div className="mt-12 flex justify-center">
          <Image src="/hero-image.svg" alt="AI Illustration" width={500} height={300} />
        </div> */}
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Why Choose <span className="text-blue-600">NedCod App?</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Discover features that make us stand out and help you create amazing content effortlessly.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
          {[
            { icon: "📄", title: "10+ Services", description: "Access a wide range of content services designed for all your needs." },
            { icon: "⚙️", title: "Customizable", description: "Easily adapt to your preferences and streamline your workflow." },
            { icon: "💻", title: "Free to Use", description: "Start for free with powerful tools and no hidden charges." },
            { icon: "📞", title: "24/7 Support", description: "We're here to help you anytime, anywhere." },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-lg transform hover:-translate-y-2 transition"
            >
              <div className="flex items-center justify-center h-16 w-16 mx-auto text-4xl bg-blue-100 text-blue-600 rounded-full">
                {feature.icon}
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-800">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto text-center px-6">
          {/* <Image src="/logo-white.svg" alt="Logo" width={100} height={40} /> */}
          <p className="mt-6 text-gray-400">
            Build smarter content solutions with NedCod App. All rights reserved © {new Date().getFullYear()}.
          </p>
          <div className="mt-8 flex justify-center space-x-6">
            {["Facebook", "Twitter", "LinkedIn"].map((platform, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-400 hover:text-white transition"
                aria-label={platform}
              >
                <i className={`fab fa-${platform.toLowerCase()}`}></i>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
