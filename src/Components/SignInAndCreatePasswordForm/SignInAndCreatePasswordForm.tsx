import { SignInForm } from "../SignIn";
import { CreatePassword } from "../CreatePassword";

export const SignInAndCreatePasswordForm = () => (
	<div className=" w-full h-full flex items-center justify-center max-w-5xl m-auto">
		<div>

			<>
				<div>
					{/* {showPasswordCreation ? ( */}
					<CreatePassword />
					{/* ) : ( */}
					<SignInForm />
					{/* )} */}
				</div>
			</>
		</div>
	</div>
);
