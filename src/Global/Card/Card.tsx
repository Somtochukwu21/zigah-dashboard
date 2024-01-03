import React from "react";
import { CardProp } from "../../../interface";

export const Card = ({ children }: CardProp) => {
	return (
		<div className="w-full bg-[#fff] h-full lg:overflow-auto pt-[86px] lg:pt-10 lg:rounded-t-xl lg:shadow no-scroll">
			<div className="max-w-5xl m-auto px-5">{children}</div>
		</div>
	);
};
