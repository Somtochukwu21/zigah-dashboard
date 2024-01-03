import React from "react";
import { Button } from "../../Global";
import { useForm } from "../../Hooks";
import { FormProps } from "../../interface";

export const SignInForm = ({ onSubmit }: FormProps) => {
	const { handleSubmit, register, errors, isValid } = useForm();

	return (
		<div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				noValidate
				className="text-sm lg:text-base">
				<div className="lg:flex [&>*]:flex [&>*]:flex-col lg:space-x-8">
					<div>
						<label className="text-sm lg:text-base" htmlFor="firstName">
							first name
						</label>
						<input
							type="text"
							id="firstName"
							className={`border outline-none p-4 rounded  capitalize ${
								errors.firstName && "border-red-400"
							}`}
							{...register("firstName", { required: "First name is required" })}
						/>
						<p className="text-red-400">{errors.firstName?.message}</p>
					</div>
					<div className="mt-4 lg:mt-0">
						<label className="text-sm lg:text-base" htmlFor="lastName">
							last name
						</label>
						<input
							type="text"
							{...register("lastName", { required: "Last name is required" })}
							id="lastName"
							className={`border outline-none p-4 rounded capitalize ${
								errors.lastName && "border-red-400"
							}`}
						/>
						<p className="text-red-400">{errors.lastName?.message}</p>
					</div>
				</div>

				<div className="flex flex-col mt-4">
					<label className="text-sm lg:text-base" htmlFor="phoneNumber">
						phone number
					</label>
					<div className="flex">
						<div className="w-20 text-center bg-zinc-100 rounded-tl rounded-bl p-4 ">
							+234
						</div>
						<input
							type="number"
							id="phoneNumber"
							{...register("phoneNumber", {
								required: "Phone number is required",
								minLength: {
									value: 11,
									message: "Phone Number must be 11 characters long",
								},
								maxLength: {
									value: 11,
									message: "Maximum length exceeded",
								},
							})}
							className={`outline-none p-4 rounded-r w-full border-l-0 border rounded capitalize ${
								errors.lastName && "border-red-400"
							}`}
						/>
					</div>
					<p className="text-red-400">{errors.phoneNumber?.message}</p>
				</div>

				<div className="flex flex-col mt-4">
					<label className="text-sm lg:text-base" htmlFor="email">
						email
					</label>
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

				<div className="my-4">
					<div className="flex space-x-1">
						<div className="w-5">
							<input
								type="checkbox"
								{...register("accept", {
									required: "Read and agree to the Terms and Privacy Policy.",
								})}
								id="accept"
								className="w-full h-full"
							/>
						</div>
						<label htmlFor="accept" className="text-xs lg:text-sm self-center">
							By ticking this checkbox, you agree to being added to our mailing
							list
						</label>
					</div>
					<p className="text-red-400">{errors.accept?.message}</p>
				</div>
				<div>
					<Button
						className={`text-white w-full p-6 ${
							!isValid ? "bg-gray-400" : "bg-secondary"
						}`}
						caption="Continue"
						type="submit"
						disabled={!isValid}
					/>
				</div>
			</form>
		</div>
	);
};
