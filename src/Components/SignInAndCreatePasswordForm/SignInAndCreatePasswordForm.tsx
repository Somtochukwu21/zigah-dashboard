import { SignIn } from "../SignIn";
import { CreatePassword } from "../CreatePassword";
import { useShowPasswordCreation } from "../../Hooks";

export const SignInAndCreatePasswordForm = () => {
	const { showPasswordCreation, handleContinueClick } =
		useShowPasswordCreation();
	return (
		<div className='mt-8'>
		
		
			{showPasswordCreation ? (
				<CreatePassword />
			) : (
				<SignIn onSubmit={handleContinueClick} />
			)}
		</div>
	);
};
