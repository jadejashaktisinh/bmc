import CoreInfra from "@/components/sections/Home/CoreInfra/CoreInfra";
import Hero from "@/components/sections/Home/Hero/Hero";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;


export default function Home() {
  return (
    <>
      <div>
        <Hero/>
        <CoreInfra/>
      </div>
    </>
  );
}
