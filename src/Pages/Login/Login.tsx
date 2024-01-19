import { LoginContent } from "../../Components";
import { SigningUpLayout } from "../../Layout";
import Logo from "../../assets/svg/logo.svg?react";

export const Login = () => {
	return (
		<div className="h-full w-full">
			<div className="bg-white p-5 lg:hidden">
				<Logo />
			</div>
			<SigningUpLayout>
				<LoginContent />
			</SigningUpLayout>
		</div>
	);
};
