import React, { ReactNode } from "react";

export const Card = ({ children }: { children: ReactNode }) => {
	return (
		// <div className="shadow-custom rounded-md p-5 bg-white  pb-20 sm:mt-11 md:mt-0 p-4 w-full sm:rounded-tl-none md:rounded-tl-xl max-h-[100svh] sm:shadow-none md:shadow-xl relative sm:text-[12px] md:text-[16px] ">
		// 	<div className="max-w-4xl w-full sm:pt-6 md:pt-14   flex-col justify-center m-auto overflow-austo">
		// 		{children}
		// 	</div>
		// </div>

		<div className="rounded-t-xl bg-[#fff] shadow-card h-full overflow-y-auto lg:fixxed w-full max-h-[100vh] ">
			<div className="m-auto h-full max-w-7xl py-9  lg:py-16  px-5 lg:px-0 mt-16">
				{children}
			</div>
		</div>
	);
};
