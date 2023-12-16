import { useState } from "react";

export const useToggleSideNav = () => {
	const [open, setOpen] = useState(true);
	const toggleSideBar = () => setOpen(!open);
	return { open, toggleSideBar };
};