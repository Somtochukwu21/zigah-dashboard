import { TransactionAndTabs } from "../TransactionAndTabs";

export const TransactionOverview: React.FC = () => {
	const tabs = [
		{ id: 1, label: "all transactions" },
		{ id: 2, label: "pending" },
		{ id: 3, label: "completed" },
		{ id: 4, label: "inward" },
	];

	return (
		<div>
			<TransactionAndTabs tabs={tabs} />
		</div>
	);
};
