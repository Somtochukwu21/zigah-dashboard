import React from "react";
import { useRoutePathname } from "../../hooks";

export const RouteName = () => {
	const { pathName } = useRoutePathname();

	return (
		<h1 className="font-bold text-sm  md:text-lg text-primary capitalize">
			{pathName}
		</h1>
	);
};
