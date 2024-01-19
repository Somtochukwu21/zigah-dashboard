import { CardProp } from "../interface";
import { Header } from "./Header";
import { SideBar } from "./SideBar";

export const Layout = ({ children }: CardProp) => {
	return (
		<div className="bg-primary flex flex-col lg:h-screen">
			<Header />
			<div className="flex h-full	w-full flex-1 justify-start items-start overflow-auto">
				<SideBar />
				{children}
			</div>
		</div>
	);
};
