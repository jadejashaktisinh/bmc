import CoreInfra from "@/components/sections/Navbar/Home/CoreInfra/CoreInfra";
import Hero from "@/components/sections/Navbar/Home/Hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Hero/>
        <CoreInfra/>
      </div>
    </>
  );
}
