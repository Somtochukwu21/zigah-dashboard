import { useRoutePathname } from "../../Hooks";
import Logo from "../../assets/svg/logo.svg?react";
import { MobileSideNav } from "./Mobile";
import { ProfileInfo } from "./ProfileInfo";
export const Header = () => {
	const { pathName } = useRoutePathname();
	return (
		<div className="bg-primary flex justify-between items-center w-full height-[50px] py-4 px-5 fixed lg:px-8 lg:static">
			<div>
				<MobileSideNav />
				<Logo className="hidden lg:block" />
			</div>
			<h1 className="font-bold text-sm  md:text-lg text-primary capitalize ">
				{pathName}
			</h1>
			<ProfileInfo />
		</div>
	);
};
