import React from "react";
import { ReactComponent as Notification } from "../../assets/svg/bell.svg";
import { ReactComponent as Avatar } from "../../assets/svg/avatar.svg";
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
						<Avatar />
					</div>
				</div>
			</div>
		</div>
	);
};
