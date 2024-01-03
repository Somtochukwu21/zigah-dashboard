import React from "react";
import { useForm } from "../../../Hooks";
import { Button } from "../../Global";

export const LoginForm = () => {
	const { errors, handleSubmit, isValid, onSubmit, register } = useForm();

	return (
		<form onSubmit={handleSubmit(onSubmit)} noValidate>
			<div>
				<div className="flex flex-col mb-4">
					<label htmlFor="email">email</label>
					<input
						type="email"
						{...register("email", {
							required: "Email is required",
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
								message: "Invalid email address",
							},
						})}
						id="email"
						className={`border outline-none p-4 rounded ${
							errors.email && "border-red-400"
						}`}
					/>
					<p className="text-red-400">{errors.email?.message}</p>
				</div>

				<div className="flex flex-col mb-4">
					<div className='flex justify-between'>
						<label htmlFor="password">Password</label>
						<p className=" text-secondary text-sm font-semibold">
							Forgot password?
						</p>
					</div>

					<input
						type="password"
						id="password"
						className={`border outline-none p-4 rounded  capitalize ${
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
			</div>
			<div>
				<Button
					className={` text-white w-full p-6 ${
						!isValid ? "bg-gray-400" : "bg-secondary"
					}`}
					caption="next"
					type="submit"
					disabled={!isValid}
				/>
			</div>
		</form>
	);
};



