import React from "react";
import { Header } from "../Layout";
import { useDocumentTitleWithRouter } from "../hooks";

export const Exchange = () => {
	useDocumentTitleWithRouter();
	return (
		<div>
			<Header />
		</div>
	);
};
