import { Link } from "react-router-dom";
import { SignInForm } from "./SignInForm";
import { FormTextHeader } from "../../Global";
import { FormProps } from "../../interface";

export const SignIn = ({ onSubmit }: FormProps) => {
	return (
		<div>
			<FormTextHeader
				header="create account"
				paragraph="Use your personal information"
			/>
			<SignInForm onSubmit={onSubmit} />
			<div className="text-center mt-2">
				<span className="text-primary text-xs lg:text-sm font-normal leading-tight">
					Have an account already?{" "}
				</span>

				<Link to="/login">

				<span className="text-secondary text-xs lg:text-sm font-bold  leading-tight">
					Log In
				</span>
				</Link>
			</div>
		</div>
	);
};
