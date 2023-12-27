import { useForm as formManagement } from "react-hook-form";
import { FormValues } from "../../interface";

export const useForm = () => {
	const onSubmit = (e: HTMLFormElement, data: FormValues) => {
		e.preventDefault();
	};
	const { control, register, handleSubmit } = formManagement<FormValues>();
	return { onSubmit, control, register, handleSubmit };
};
