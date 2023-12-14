import React from "react";
import { ReactComponent as Notification } from "../../assets/svg/bell.svg";
import { ReactComponent as Avatar } from "../../assets/svg/avatar.svg";
export const ProfileInfo = () => {
	return (
		<div>
			<div className="flex items-center space-x-3  justify-end">
				<div className="">
					{/* <img src={ notification } alt="User avatar" className="md:w-6 md:h-6" /> */}
					<Notification />
				</div>
				<div className="flex items-center space-x-2">
					<div className="font-semibold tracking-wider text-md hidden lg:block">
						Cody Simmons
					</div>
					<div className="">
						<Avatar />
						{/* <img src={avatar} alt="User avatar" className="md:w-9 md:h-9" /> */}
					</div>
				</div>
			</div>
			<div></div>
			<div></div>
		</div>
	);
};
