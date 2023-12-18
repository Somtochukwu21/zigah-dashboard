import React from "react";
import { TransactionOverview } from "./TransactionOverview";
import { WalletOverview } from "./WalletOverview";

export const DashboardContent = () => {
	return (
		<div>
			<WalletOverview />
			<TransactionOverview />
		</div>
	);
};
