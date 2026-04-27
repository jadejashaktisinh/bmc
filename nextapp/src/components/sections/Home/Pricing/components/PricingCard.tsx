import ButtonClear from "@/components/ui/ButtonClear/ButtonClear";
import ButtonFilled from "@/components/ui/ButtonFilled/ButtonFilled";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons/faCircleCheck";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PricingCard({ plan, price, list, btnText, popular }: { plan: string, price: string, list: string[], btnText: string, popular?: boolean }) {
  return (
    <>
      <div className={`bg-[${popular ? '#FFFFFF' : '#F1F4F7'}] p-10 rounded-3xl flex flex-col justify-between ${popular ?  'h-[110%] border-[3px] border-solid border-[#000B60] relative' : ''}`}>
        <div>
          <h3 className="text-3xl font-black leading-9 mb-2">{plan}</h3>
          <p className="text-3xl leading-10 mb-8">{price}<span className="text-base leading-6">/mo</span></p>
        </div>
        <ul className="mb-24 flex flex-col gap-4">
          {
            list.map((item) => (
              <li className="flex gap-3 text-base leading-6 text-[#454652] items-center"><FontAwesomeIcon icon={faCircleCheck} className="text-[#006B5C]" />{item}</li>
            ))
          }   
        </ul>

       { popular ? <ButtonFilled text={btnText}/> :  <ButtonClear text={btnText} bordered={true} /> }
        {
          popular && (
            <div className="absolute w-fit z-10 bg-[#000B60] h-fit text-[white] tracking-[1.2px] text-base leading-4 font-[bolder] mx-auto my-0 px-4 py-1 rounded-xl -top-3.5 inset-0">
              MOST POPULAR
            </div>
          )
        }
      </div>
    </>
  );
}
