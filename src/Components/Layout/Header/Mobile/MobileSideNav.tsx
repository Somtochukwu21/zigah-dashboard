import { MdClose } from "react-icons/md";
import { ReactComponent as MenuIcon } from "../../../../assets/svg/menu.svg";
import { Link } from "react-router-dom";
import { useToggleSideNav } from "../../../../Hooks";
import { menuLinks } from "../../menuLinks";

export const MobileSideNav = () => {
	const { open, toggleSideBar } = useToggleSideNav();

	const newLocal = "flex justify-end  px-3 py-5 text-[36px]";
	return (
		<div className="block lg:hidden">
			{!open && (
				<div
					className="fixed left-0 top-0  h-full w-full bg-[#00000080]"
					onKeyDown={toggleSideBar}
					onClick={toggleSideBar}
				/>
			)}
			<div
				className={`pt-1l4 fixed left-0 top-0 z-10 h-full overflow-x-hidden bg-secondary text-gray-100 duration-300
      ${open ? "w-0" : "w-[250px]"}`}>
				<div className={newLocal}>
					<MdClose onClick={toggleSideBar} />
				</div>

				{menuLinks.map((menu, i) => (
					<Link
						to={menu.link}
						key={menu.id}
						className={`${
							open ? "p-1" : "px-5 py-2"
						}  group relative flex items-center space-x-2 overflow-hidden rounded-md text-sm font-medium capitalize`}>
						<menu.icon size={20} className={`${open && "w-full"}`} />
						<h2
							style={{ transitionDelay: `${i + 3}00ms` }}
							className={`whitespace-pre duration-300  
								${open && "absolute left-12 translate-x-28 overflow-hidden opacity-0"}
								`}>
							{menu.name}
						</h2>
					</Link>
				))}
			</div>

			<div>
				<MenuIcon onClick={toggleSideBar} />
			</div>
		</div>
	);
};
