import { useEffect } from "react";
import { useRoutePathname } from "./useRoutePathname";

export const useDocumentTitleWithRouter = (prevailOnUnmount = false): void => {
	const { pathName } = useRoutePathname();
	const title = "Zigah";

	useEffect(() => {
		document.title = `${title} | ${pathName}`;
	}, [title, pathName]);

	useEffect(
		() => () => {
			!prevailOnUnmount && (document.title = title);
		},
		[title, prevailOnUnmount]
	);
};
