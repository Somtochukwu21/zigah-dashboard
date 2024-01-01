import { useForm as formManagement, SubmitHandler } from "react-hook-form";
import { FormValues } from "../../interface";

export const useForm = () => {
	const onSubmit: SubmitHandler<FormValues> = () => {};

	const {
		control,
		register,
		handleSubmit,
		formState: { errors ,isValid},
	} = formManagement<FormValues>();
	return { onSubmit, control, register, handleSubmit, errors, isValid };
};
