import React from "react";
import { SignInForm } from "../../Components";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
export const SignIn = () => {
	return (
		<div className="flex h-full w-full">
			<div className="bg-red-200 h-full w-2/5 hidden lg:block">
				<div>
					<Logo />
				</div>
				<div className="text-black text-xl font-bold">
					<h1>Move money across different</h1>
					<h1>countries swiftly & securely</h1>
				</div>
			</div>
			<SignInForm />
		</div>
	);
};
