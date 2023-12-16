import React from "react";
import { Header } from "../Layout";
import { useDocumentTitleWithRouter } from "../hooks";
import { Card, FundsHub } from "../global";
import { TransactionPanel } from "../components";

export const Dashboard = () => {
	useDocumentTitleWithRouter();
	return (
		<div className="relative">
			<Header />

			<Card>
				<FundsHub />
				<TransactionPanel />
			</Card>
		</div>
	);
};
