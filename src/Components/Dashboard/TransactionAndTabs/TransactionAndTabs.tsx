import { TabsProps } from "../../../interface";
import { useState } from "react";
import { TabButtons } from "../ActionTabs/TabButtons";
import { TransactionHistoryFeed } from "../TransactionHistoryFeed";
import { dummyData } from "../../../API";
import { Button } from "../../Global";
import { useSeeMore } from "../../../Hooks";

export const TransactionAndTabs: React.FC<TabsProps> = ({ tabs }) => {
	const [activeTab, setActiveTab] = useState<number>(0);

	const handleTabClick = (index: number) => {
		setActiveTab(index);
	};

	const { shortenedData, showMore } = useSeeMore(dummyData);

	return (
		<div>
			<div className="my-8 space-x-2 flex w-full p-1 lg:p-2 justify-between border rounded border-[#E1E5E4]">
				{tabs.map((tab, index) => (
					<TabButtons
						key={tab.id}
						label={tab.label}
						isActive={index === activeTab}
						onClick={() => handleTabClick(index)}
					/>
				))}
			</div>

			<div className="tab-content">
				{tabs[activeTab] && (
					<div>
						<TransactionHistoryFeed
							data={shortenedData}
							activeTab={tabs[activeTab].label}
						/>
					</div>
				)}
			</div>
			<div className="flex justify-center py-8">
				<Button
					caption="More transactions"
					className="bg-primary text-secondary shadow"
					onClick={showMore}
				/>
			</div>
		</div>
	);
};