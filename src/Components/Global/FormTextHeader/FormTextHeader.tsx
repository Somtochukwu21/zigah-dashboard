import React from "react";
import { FormTextHeaderProps } from "../../../interface";

export const FormTextHeader = ({paragraph,header}:FormTextHeaderProps) => {
	return (
		<div className="mb-8">
			<h1 className="text-secondary text-3xl font-black capitalize">
				{header}
			</h1>
      <p className="text-primary text-base">{paragraph }</p>
		</div>
	);
};

