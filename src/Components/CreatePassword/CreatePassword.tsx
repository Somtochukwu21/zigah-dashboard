import { FormTextHeader } from "../../Global";
import { CreatePasswordForm } from "./CreatePasswordForm";

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
