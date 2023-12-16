import { TabContainer } from "./Tabs/TabContainer";

export const TransactionPanel: React.FC = () => {
	const tabs = [
		{ id: 1, label: "all transactions" },
		{ id: 2, label: "pending" },
		{ id: 3, label: "completed" },
		{ id: 4, label: "inward" },
	];

	return (
		<div className="mt-6">
			<TabContainer tabs={tabs} />
		</div>
	);
};
