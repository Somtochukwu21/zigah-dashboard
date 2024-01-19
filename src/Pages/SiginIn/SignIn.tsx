import React from "react";
import Logo from "../../assets/svg/logo.svg";
import { SignInAndCreatePasswordForm } from "../../Components";
import { SigningUpLayout } from "../../Layout";

export const SignIn = () => {
	return (
		<div className="h-full w-full">
			<div className="bg-white p-5 lg:hidden">
				<Logo />
			</div>
			<SigningUpLayout>
				<SignInAndCreatePasswordForm />
			</SigningUpLayout>
		</div>
	);
};
