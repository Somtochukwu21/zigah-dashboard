import React from "react";
import { NavLink } from "react-router-dom";
import { menuLinks } from "../menuLinks";

export const SideBar = () => {
	return (
		<div className="bg-primary h-full px-[25px] w-80 hidden lg:block ">
			<div className="relative mt-8 flex flex-col gap-4 text-primary ">
				{menuLinks.map((menu, i) => (
					<NavLink
						to={menu.link}
						key={menu.id}
						className="flex items-center space-x-4 rounded-md text-lg font-semibold p-3 rounded-l h-[47px] capitalize navLink">
						<menu.icon size={23} />
						<h2 className="whitespace-pre">{menu.name}</h2>
					</NavLink>
				))}
			</div>
		</div>
	);
};

