import { LoginContent } from "../../Components";
import { SigningUpLayout } from "../../Layout";

export const Login = () => {
	return (
		<div className="h-full w-full">
			<SigningUpLayout>
				<LoginContent />
			</SigningUpLayout>
		</div>
	);
};
