import React from "react";
import { SignInAndCreatePasswordForm,  } from "../../Components";
import {SigningUpLayout}from
'../../Layout'
export const SignIn = () => {
	return (
		<SigningUpLayout>
			<SignInAndCreatePasswordForm />
		</SigningUpLayout>
	);
};
