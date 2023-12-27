import React from "react";
import { FormTextHeader } from "../Global";
import { FormContent } from "./FormContent";

export const SignInForm = () => {
	return (
		<div className="bg-red-2s00 w-full h-full flex items-center justify-center max-w-5xl m-auto">
			<div>
				<FormTextHeader
					header="create account"
					paragraph="Use your personal information"
				/>

				<FormContent />
			</div>
		</div>
	);
};
