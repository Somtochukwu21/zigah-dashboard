import React, { Fragment } from "react";
import { ActiveAndData } from "../../../interface";
import { AllTransactions } from "./AllTransactions";
import { FilteredTransactions } from "./FilteredTransactions";
import { useSeeMore } from "../../../Hooks";
import { Button } from "../../Global";

export const TransactionData = ({ data, activeTab }: ActiveAndData) => {
	const { showMore, shortenData, shortenFilteredData } = useSeeMore(
		data,
		activeTab
	);

	// useEffect(() => {
	// }, [data]);

	return (
		<Fragment>
			{activeTab === "all transactions" ? (
				shortenData.map((data, index) => (
					<AllTransactions
						key={index}
						amount={data.amount}
						image={data.image}
						name={data.name}
						status={data.status}
						time={data.time}
					/>
				))
			) : (
				<FilteredTransactions
					activeTab={activeTab}
					data={shortenFilteredData}
				/>
			)}

			<div className="flex justify-center py-8">
				<Button
					caption="More transactions"
					className="bg-primary text-secondary shadow"
					onClick={showMore}
				/>
			</div>
		</Fragment>
	);
};
