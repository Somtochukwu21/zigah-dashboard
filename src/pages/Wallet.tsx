import React from "react";
import { Header } from "../Layout";
import { useDocumentTitleWithRouter } from "../hooks";


export const Wallet = () => {
	useDocumentTitleWithRouter();
	return (
		<div>
			<Header />
		</div>
	);
};
