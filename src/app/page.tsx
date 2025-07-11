import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl bg-red-400">
        Welcome to Our E-commerce Platform
      </h1>
      <p>Discover the best products at unbeatable prices.</p>
      <Image src="/hero.jpg" alt="Hero Image" width={500} height={300} />
    </>
  );
}
