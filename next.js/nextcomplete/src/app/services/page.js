import Link from "next/link";

export default function Services() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="text-lg">We offer a variety of services to help you succeed.</p>
        {/* reload entrire app */}
        {/* <a href="/services/web-dev" className="text-lg text-blue-500 hover:underline">Web Dev</a> */}
        <div className="flex gap-4">
        <Link href="/about"  className="text-lg text-blue-500 hover:underline">About</Link>
        </div>
        <div className="flex gap-4">All services</div>
        <Link href="/services/web-dev" className="text-lg text-blue-500 hover:underline">
          Web Dev
        </Link>
        <Link href="/services/app-dev" className="text-lg text-blue-500 hover:underline">
          Mobile Dev
        </Link>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read our docs
        </a>
      </footer>
    </div>
  );
}