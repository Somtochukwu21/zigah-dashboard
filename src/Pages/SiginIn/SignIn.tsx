import React from "react";
import { SignInAndCreatePasswordForm } from "../../Components";
import { SigningUpLayout } from "../../Layout";

export const SignIn = () => {
	return (
		<div className="h-full w-full">
			<SigningUpLayout>
				<SignInAndCreatePasswordForm />
			</SigningUpLayout>
		</div>
	);
};
