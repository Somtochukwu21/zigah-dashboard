import React from "react";
import { ReactComponent as MenuIcon } from "../../assets/svg/menu.svg";
import { RouteName } from "./RouteName";
import { ProfileInfo } from "./ProfileInfo";
export const Header = () => {
	return (
		<div className="bg-primary px-5 py-6 flex justify-between">
			<div>
				<MenuIcon />
			</div>
			<RouteName />
			<ProfileInfo/>
		</div>
	);
};
