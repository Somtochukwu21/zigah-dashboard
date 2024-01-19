import React from "react";
import { SearchBar } from "../../../Global";
import { ActiveAndData } from "../../../interface";
import { useSearchInput } from "../../../Hooks";
import { TransactionData } from "./TransactionsData";

export const TransactionHistoryFeed = ({ data, activeTab }: ActiveAndData) => {
	const { searchInput, handleSearchInputChange, filteredData } =
		useSearchInput(data);

	return (
		<div>
			<SearchBar
				searchInput={searchInput}
				handleSearchInputChange={handleSearchInputChange}
			/>
			<div className="text-primary bg-stone-50 p-2 font-medium leading-[13px] text-[11px] lg:text-base">
				Today
			</div>
			<TransactionData data={filteredData} activeTab={activeTab} />
		</div>
	);
};
