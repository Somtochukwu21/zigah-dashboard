import { SignIn } from "../SignIn";
import { CreatePassword } from "../CreatePassword";
import { useShowPasswordCreation } from "../../Hooks";

export const SignInAndCreatePasswordForm = () => {
	const { showPasswordCreation, handleContinueClick } =
		useShowPasswordCreation();
	return (
		<div>
			{showPasswordCreation ? (
				<CreatePassword />
			) : (
				<SignIn onSubmit={handleContinueClick} />
			)}
		</div>
	);
};
