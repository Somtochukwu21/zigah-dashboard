import { ReactComponent as Logo } from "../../assets/svg/svgg.svg";
import MoneyBag from "../../assets/image/moneybag.png";
import { CardProp } from "../../../interface";

export const SigningUpLayout = ({ children }: CardProp) => {
	return (
		<div className="flex h-full w-full">
			<div className="bg-primary h-full px-[25px] py-[33px]  w-[40%] hidden lg:block relative">
				<div>
					<Logo />
				</div>
				<div className="text-black font-bold text-xl mt-10">
					<h1>Move money across different</h1>
					<h1>countries swiftly & securely</h1>
				</div>
				<div className="absolute left-0 bottom-0 w-full">
					<img src={MoneyBag} alt="Money bag" className="w-full h-full" />
				</div>
			</div>
			<div className="bg-white w-full h-full">
				<div className=" w-full h-full flex items-center justify-center max-w-5xl m-auto px-5 lg:px-0">
					{children}
				</div>
			</div>
		</div>
	);
};
