import React from "react";
import { SignInForm } from "../../Components";
import { ReactComponent as Logo } from "../../assets/svg/svgg.svg";
import MoneyBag from "../../assets/image/moneybag.png";

export const SignIn = () => {
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
				<SignInForm />
			</div>
		</div>
	);
};

/*
The first thing to do is commit;
and create the login page after the routing between login and sign in works;
create the password era
*/