import React from "react";
import { FormTextHeaderProps } from "../../../interface";

export const FormTextHeader = ({ paragraph, header }: FormTextHeaderProps) => {
	return (
		<div className="mb-8">
			<h1 className="text-secondary text-2xl lg:text-3xl font-black capitalize">
				{header}
			</h1>
			<p className="text-primary text-sm lg:text-base">{paragraph}</p>
		</div>
	);
};
