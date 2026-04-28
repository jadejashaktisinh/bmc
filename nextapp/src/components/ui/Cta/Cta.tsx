import ButtonFilled from "../ButtonFilled/ButtonFilled";

export default function Cta() {

	return (
		<div className="flex justify-center items-center">
			<div className="p-20 bg-[#000B60] flex flex-col gap-8 justify-center items-center bg-[linear-gradient(122deg,rgba(0,11,96,1)_0%,rgba(20,34,131,1)_100%)] rounded-[48px]">
				<h2 className="text-5xl font-black text-[white] leading-9">Ready to evolve your stack?</h2>
				<p className="text-indigo-200 text-lg leading-7 w-[72%] text-center">Join 500+ enterprises building their digital future on the BMC
					platform. Start your 14-day free trial today.</p>
				<div className="flex gap-4 mt-2">
					<ButtonFilled text="Get Started Now" bg="#006B5C" />
					<ButtonFilled text="Book A Demo" bg="#ffffff1a" class="border border-solid border-[#ffffff33]" />
				</div>
			</div>
		</div>
	)
}