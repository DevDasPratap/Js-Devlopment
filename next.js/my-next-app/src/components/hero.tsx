import Image from "next/image";
const HeroPage = () => {
  return (
    <div className="relative h-screen">
      <h1 className="text-4xl font-bold">Welcome to My Next.js App!</h1>
      <div className="absolute inset-0 z-10">
      <p className="mt-4 text-lg">This is a simple hero component.</p>
      <Image
        src={"globe.svg"}
        fill
        alt="Hero Image"
        // width={500}
        // height={300}
        style={{ objectFit: "cover" }}
      />
      </div>
    </div>
  );
}
export default HeroPage;