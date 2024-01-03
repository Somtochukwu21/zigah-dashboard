import { FormTextHeader } from "../Global";
import { Link } from "react-router-dom";
import { LoginForm } from "./LoginForm";

export const LoginContent = () => {
	return (
		<div className="w-full lg:w-1/2">
			<FormTextHeader
				header="Jump right back in"
				paragraph="Sign in to continue"
			/>
			<LoginForm />

			<div className="text-center mt-2 leading-tight">
				<span
					className="text-primary text-xs lg:text-sm font-normal capitalize">
					New user?
				</span>
				<Link to="/">
					<span
						className="text-secondary text-xs lg:text-sm font-semibold  leading-tight">
						Create account
					</span>
				</Link>
				<p
					className="text-center text-secondary text-xs lg:text-sm mt-6 font-semibold ">
					Reset password
				</p>
			</div>
		</div>
	);
};
