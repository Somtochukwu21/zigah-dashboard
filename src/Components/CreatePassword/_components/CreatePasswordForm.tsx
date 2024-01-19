import { useForm } from "../../../Hooks";
import { Button } from "../../../Global";

export const CreatePasswordForm = () => {
	const { errors, handleSubmit, isValid, onSubmit, register, watch } =
		useForm();	

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			noValidate
			className="text-sm lg:text-base">
			<div>
				<div className="flex flex-col mb-4">
					<label className='text-sm lg:text-base' htmlFor="password">Password:</label>
					<input
						type="password"
						id="password"
						className={`border outline-none p-4 rounded ${
							errors.password && "border-red-400"
						}`}
						{...register("password", {
							required: "Password is required",
							minLength: {
								value: 8,
								message: "Password must be at least 8 characters",
							},
							pattern: {
								value: /^(?=.*[A-Z])(?=.*\d).+$/,
								message:
									"Password must include at least one uppercase letter and one number",
							},
						})}
					/>
					<p className="text-red-400">{errors.password?.message}</p>
				</div>

				<div className="flex flex-col mb-4">
					<label className='text-sm lg:text-base' htmlFor="confirmPassword">confirm password</label>
					<input
						type="password"
						{...register("confirmPassword", {
							required: "Please confirm your password",
							validate: (value) =>
								value === watch("password") || "Passwords do not match",
						})}
						id="confirmPassword"
						className={`border outline-none p-4 rounded ${
							errors.confirmPassword && "border-red-400"
						}`}
					/>
					<p className="text-red-400">{errors.confirmPassword?.message}</p>
				</div>
			</div>
			<div>
				<Button
					className={` text-white w-full p-6 ${
						!isValid ? "bg-gray-400" : "bg-secondary"
					}`}
					caption="Continue"
					type="submit"
					disabled={!isValid}
				/>
			</div>
		</form>
	);
};

