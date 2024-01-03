import { LoginContent } from "../../Components";
import { SigningUpLayout } from "../../Layout";
import { ReactComponent as Logo } from "../../assets/svg/svgg.svg";

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
