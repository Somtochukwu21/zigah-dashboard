import { menus } from "./menuLinks";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
export const SideNav = () => {
	return (
		<div className="hidden px-[25px] text-primary lg:block w-80 min-h-screen">
			<div className="bg-primary mt-4d py-6">
				<Link to="/dashboard" className="flex justify-center w-[46%]">
					<Logo />
				</Link>
			</div>
			<div className="relative mt-8 flex flex-col gap-4">
				{menus.map((menu, i) => (
					<NavLink
						to={menu.link}
						key={menu.id}
						className="flex items-center space-x-4 rounded-md text-lg font-semibold p-3 rounded-l h-[47px] capitalize navLink">
						<menu.icon size={23} />
						<h2 className={`whitespace-pre`}>{menu.name}</h2>
					</NavLink>
				))}
			</div>
		</div>
	);
};
