import { useLocation } from "react-router-dom";

export const useRoutePathname = () => {
	const location = useLocation();
	const pathName = location.pathname.substring(1);
	return { pathName };
};
