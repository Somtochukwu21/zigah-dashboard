import React from "react";
import { Button } from "../Global";

export const FormContent = () => {
	const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<div className="flex [&>*]:flex [&>*]:flex-col space-x-8">
				<div>
					<label htmlFor="firstName">first name</label>
					<input
						type="text"
						name="firstName"
						id="firstName"
						className="border outline-none p-4 rounded  capitalize"
					/>
				</div>
				<div>
					<label htmlFor="lastName">last name</label>
					<input
						type="text"
						name="lastName"
						id="lastName"
						className="border outline-none p-4 rounded  capitalize"
					/>
				</div>
			</div>

			<div className="flex flex-col mt-4">
				<label htmlFor="phoneNumber">phone number</label>
				<div className="flex">
					<div className="w-20 text-center  bg-zinc-100 rounded-tl rounded-bl p-4">
						+234
					</div>
					<input
						type="number"
						name="phoneNumber"
						id="phoneNumber"
						className="border outline-none p-4 rounded-r w-full border-l-0"
					/>
				</div>
			</div>

			<div className="flex flex-col mt-4">
				<label htmlFor="email">email</label>
				<input
					type="text"
					name="email"
					id="email"
					className="border outline-none p-4 rounded  capitalize"
				/>
			</div>

			<div className="my-4 flex space-x-1">
				<input type="checkbox" name="accept" id="accept" className="checkbox" />
				<label htmlFor="accept" className="text-sm self-end">
					By ticking this checkbox, you agree to being added to our mailing list
				</label>
			</div>
			<div>
				<Button className="bg-secondary w-full p-6" caption="Continue" />
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
	);
};
