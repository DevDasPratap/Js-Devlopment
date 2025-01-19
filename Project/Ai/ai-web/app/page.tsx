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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between p-5 bg-white shadow-sm">
        <div className="flex items-center">
          <Image src="/logo.svg" alt="Logo" width={120} height={50} />
        </div>
        <div className="flex items-center space-x-4">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
          🔥 Join membership just for $9.99/Month
          </span>
          <Link href={'/dashboard'}>
          <Button className="bg-primary">Get Started</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-white">
        <h1 className="text-4xl font-bold leading-tight text-gray-800">
          AI Content <span className="text-blue-600">Generator</span>
        </h1>
        <p className="mt-4 text-gray-600">
          Revolutionize your content creation with our AI-powered app, delivering engaging and high-quality text in seconds.
        </p>
        <Link href={'/dashboard'}>
        <Button className="mt-6 px-6 py-3 text-lg">Get started</Button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
          <div className="text-center">
            <div className="flex items-center justify-center h-16 w-16 mx-auto bg-blue-100 text-blue-600 rounded-full">
              📄
            </div>
            <h3 className="mt-4 font-semibold">10+ Service</h3>
            <p className="text-gray-600 mt-2">
              Responsive, and mobile-first project on the web.
            </p>
            <a href="#" className="text-blue-600 mt-4 block">
              Learn more &rarr;
            </a>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center h-16 w-16 mx-auto bg-blue-100 text-blue-600 rounded-full">
              ⚙️
            </div>
            <h3 className="mt-4 font-semibold">Customizable</h3>
            <p className="text-gray-600 mt-2">
              Components are easily customized and extendable.
            </p>
            <a href="#" className="text-blue-600 mt-4 block">
              Learn more &rarr;
            </a>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center h-16 w-16 mx-auto bg-blue-100 text-blue-600 rounded-full">
              💻
            </div>
            <h3 className="mt-4 font-semibold">Free to Use</h3>
            <p className="text-gray-600 mt-2">
              Every component and plugin is well documented.
            </p>
            <a href="#" className="text-blue-600 mt-4 block">
              Learn more &rarr;
            </a>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center h-16 w-16 mx-auto bg-blue-100 text-blue-600 rounded-full">
              📞
            </div>
            <h3 className="mt-4 font-semibold">24/7 Support</h3>
            <p className="text-gray-600 mt-2">
              Contact us 24 hours a day, 7 days a week.
            </p>
            <a href="#" className="text-blue-600 mt-4 block">
              Learn more &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} NedCod App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
