import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useTitle = (prevailOnUnmount = false): void => {
	const location = useLocation();
	const title = "Zigah";

	useEffect(() => {
		const pathnameWithoutSlash = location.pathname.substring(1);
		pathnameWithoutSlash.toString() === ""
			? (document.title = title)
			: (document.title = `${title} | ${pathnameWithoutSlash}`);
	}, [title, location]);

	useEffect(
		() => () => {
			!prevailOnUnmount && (document.title = title);
		},
		[title, prevailOnUnmount]
	);
};
