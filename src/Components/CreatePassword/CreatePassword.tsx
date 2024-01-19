import { FormTextHeader } from "../../Global";
import { CreatePasswordForm } from "./_components";

export const CreatePassword = () => {
	return (
		<div>
			<FormTextHeader
				header="create password"
				paragraph="Must include at least 8 characters, an uppercase letter, and a number."
			/>
			<CreatePasswordForm />
		</div>
	);
};
