import React from "react";
import { RouteName } from "./RouteName";
import { ProfileInfo } from "./ProfileInfo";
import { MobileSideNav } from "../SideNav";
export const Header = () => {
	return (
		<div className="bg-primary px-5 py-6 flex justify-between items-center fixed lg:static w-full">
			<div>
				<MobileSideNav />
			</div>
			<RouteName />
			<ProfileInfo />
		</div>
	);
};
