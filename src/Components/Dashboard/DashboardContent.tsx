import React from "react";
import { TransactionOverview, WalletOverview } from "./_components";

export const DashboardContent = () => {
	return (
		<div>
			<WalletOverview />
			<TransactionOverview />
		</div>
	);
};
