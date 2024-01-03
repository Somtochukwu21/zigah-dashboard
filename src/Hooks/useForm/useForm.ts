import { useForm as formManagement, SubmitHandler } from "react-hook-form";
import { FormValues } from "../../interface";
import { useNavigate } from "react-router-dom";

export const useForm = () => {
	const navigate = useNavigate();

	const onSubmit: SubmitHandler<FormValues> = () => {
		navigate("/dashboard");
	};

	const {
		control,
		register,
		handleSubmit,
		watch,
		formState: { errors, isValid },
	} = formManagement<FormValues>();
	return { onSubmit, control, register, handleSubmit, errors, isValid, watch };
};
