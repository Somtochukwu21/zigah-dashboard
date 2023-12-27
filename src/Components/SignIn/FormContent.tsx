import React from "react";
import { Button } from "../Global";
import { useForm } from "../../Hooks";
import { DevTool } from "@hookform/devtools";

export const FormContent = () => {
	const { handleSubmit,onSubmit, register,control } = useForm();

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)} noValidate>
				<div className="flex [&>*]:flex [&>*]:flex-col space-x-8">
					<div>
						<label htmlFor="firstName">first name</label>
						<input
							type="text"
							id="firstName"
							className="border outline-none p-4 rounded  capitalize"
							{...register("firstName",{required:'First name is required'})}
						/>
					</div>
					<div>
						<label htmlFor="lastName">last name</label>
						<input
							type="text"
							{...register("lastName")}
							id="lastName"
							className="border outline-none p-4 rounded  capitalize"
						/>
					</div>
				</div>

				<div className="flex flex-col mt-4">
					<label htmlFor="phoneNumber">phone number</label>
					<div className="flex">
						<div className="w-20 text-center bg-zinc-100 rounded-tl rounded-bl p-4">
							+234
						</div>
						<input
							type="number"
							id="phoneNumber"
							{...register("phoneNumber")}
							className="border outline-none p-4 rounded-r w-full border-l-0"
						/>
					</div>
				</div>

				<div className="flex flex-col mt-4">
					<label htmlFor="email">email</label>
					<input
						type="text"
						id="email"
						{...register("email")}
						className="border outline-none p-4 rounded  capitalize"
					/>
				</div>

				<div className="my-4 flex space-x-1">
					<div className="w-5">
						<input
							type="checkbox"
							{...register("accept")}
							id="accept"
							className="w-full h-full"
						/>
					</div>
					<label htmlFor="accept" className="text-sm self-center">
						By ticking this checkbox, you agree to being added to our mailing
						list
					</label>
				</div>
				<div>
					<Button
						className="bg-gray-400 text-white w-full p-6 disabled"
						caption="Continue"
					/>
				</div>
				<div className="text-center mt-2">
					<span className="text-primary text-sm font-normal leading-tight">
						Have an account already?{" "}
					</span>
					<span className="text-secondary text-sm font-bold  leading-tight">
						Log In
					</span>
				</div>
			</form>
			<DevTool control={control}/>
		</div>
	);
};
