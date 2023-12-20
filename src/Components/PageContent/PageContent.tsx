import React from "react";
import { AppRoutes } from "../AppRoutes";

export const PageContent = () => {
	return (
		<div className="w-full bg-[#fff] h-full lg:overflow-auto pt-[86px] lg:pt-10 lg:rounded-t-xl lg:shadow no-scroll">
			<div className="max-w-5xl m-auto px-5">
				<AppRoutes />
			</div>
		</div>
	);
};