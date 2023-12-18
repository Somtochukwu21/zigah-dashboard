import React from "react";
import { AppRoutes } from "../AppRoutes";

export const PageContent = () => {
	return (
		<div className="rounded-t-xl bg-[#fff] w-full shadow h-full pt-10 overflow-auto no-scroll">
			<div className="max-w-5xl m-auto pt-20 lg:pt-0 px-5">
				<AppRoutes />
			</div>
		</div>
	);
};

