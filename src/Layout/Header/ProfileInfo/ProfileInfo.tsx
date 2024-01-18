import React from "react";
import { ReactComponent as Notification } from "../../../assets/svg/bell.svg";
import avatar from "../../../assets/image/avatar.png";
export const ProfileInfo = () => {
	return (
		<div>
			<div className="flex items-center space-x-3  justify-end">
				<div className="">
					<Notification />
				</div>
				<div className="flex items-center space-x-2">
					<div className="font-semibold tracking-wider text-md hidden lg:block">
						Cody Simmons
					</div>
					<div className="">
						<img src={avatar} alt="avatar" className="h-8 w-8" />
					</div>
				</div>
			</div>
		</div>
	);
};
