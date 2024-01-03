import React, { Fragment } from "react";
import { ActiveAndData } from "../../../interface";
import { FilteredTransactions } from "./FilteredTransactions";
import { useSeeMore } from "../../../Hooks";
import { AllTransactions } from "./AllTransactions";

export const TransactionData = ({ data, activeTab }: ActiveAndData) => {
	const {
		showMore,
		shortenData,
		shortenFilteredData,
		isAllDataShown,
		isAllShortenedFilteredDataShown,
	} = useSeeMore(data, activeTab);

	return (
		<Fragment>
			{activeTab === "all transactions" ? (
				<AllTransactions
					shortenData={shortenData}
					isAllDataShown={isAllDataShown}
					showMore={showMore}
				/>
			) : (
				<FilteredTransactions
					shortenData={shortenFilteredData}
					showMore={showMore}
					isAllDataShown={isAllShortenedFilteredDataShown}
				/>
			)}
		</Fragment>
	);
};
