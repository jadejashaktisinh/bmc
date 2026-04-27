import CoreInfra from "@/components/sections/Home/CoreInfra/CoreInfra";
import Hero from "@/components/sections/Home/Hero/Hero";
import Pricing from "@/components/sections/Home/Pricing/Pricing";
import Cta from "@/components/ui/Cta/Cta";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;


export default function Home() {
  return (
    <>
      <div>
        <Hero/>
        <CoreInfra/>
        <Pricing/>
        <Cta/>
      </div>
    </>
  );
}
