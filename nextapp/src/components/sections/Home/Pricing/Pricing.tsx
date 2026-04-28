import PricingCard from "./components/PricingCard";

export default function Pricing() {
  return (
      <div className="px-8 py-40 flex flex-col gap-16">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-4xl max-w-lg font-black">Pricing Built for Growth</h2>
          <p className="text-[1.4rem] text-[#454652] leading-6">Scalable solutions for every stage of your business journey.</p>
        </div>

        <div className="grid grid-cols-[1fr_1fr_1fr] gap-8">
           <PricingCard plan="Basic" price="$49" list={['5 Active Tenants','Headless WP Core','Community Support']} btnText="Get Started"/>
           <PricingCard plan="Pro" price="$199" list={['Unlimited Tenants','Advanced API Caching','Priority 24/7 Support' ,'Custom Domains']} btnText="Choose Pro" popular/>
           <PricingCard plan="Enterprice" price="Custome" list={['Active Tenants','White-label Dashboard','Custom SLA Agreements' ,'Dedicated Success Manager']} btnText="Get Started" custom/>
        </div>
      </div>
  );
}
