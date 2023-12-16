import { TabsProps } from "../../../interface";
import { useState } from "react";
import { ReactComponent as Search } from "../../../assets/svg/search.svg";
import { ReactComponent as Calender } from "../../../assets/svg/calender.svg";
import { Tab } from "./Tab";
import { useSearchBar } from "../../../hooks/useSearchBar";
import { TransactionData } from "../TransactionData";

export const TabContainer: React.FC<TabsProps> = ({ tabs }) => {
	const [activeTab, setActiveTab] = useState<number>(0);

	const handleTabClick = (index: number) => {
		setActiveTab(index);
	};

	const { handleSearchInputChange, searchInput } = useSearchBar();
	return (
		<div>
			<div className="tab-list space-x-2 flex w-full p-1 lg:p-2 justify-between border rounded border-[#E1E5E4]">
				{tabs.map((tab, index) => (
					<Tab
						key={tab.id}
						label={tab.label}
						isActive={index === activeTab}
						onClick={() => handleTabClick(index)}
					/>
				))}
			</div>
			<div className="flex items-center mt-8 mb-4 space-x-5">
				<div className="sm:py-1 pl-4 md:py-2 w-full border rounded-md flex cursor-pointer items-center p-1 py-0">
					<Search />
					<input
						type="search"
						placeholder="Search Transactions"
						className="w-full rounded bg-transparent border-b-[#ebebeb] p-2 outline-none "
						value={searchInput}
						onChange={handleSearchInputChange}
					/>
				</div>

				<Calender />
			</div>

			<div className="text-primary bg-stone-50 p-2 font-medium leading-[13px]">
				Today
			</div>
			<div className="tab-content">
				<TransactionData />
				{tabs[activeTab] && <div>Content for {tabs[activeTab].label}</div>}
			</div>
		</div>
	);
};
