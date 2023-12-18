import React, { Fragment } from "react";
import { ActiveAndData } from "../../../interface";
import { AllTransactions } from "./AllTransactions";
import { FilteredTransactions } from "./FilteredTransactions";

export const TransactionData = ({ data, activeTab }: ActiveAndData) => {
	return (
		<Fragment>
			{activeTab === "all transactions" ? (
				data.map((data, index) => (
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
				<FilteredTransactions activeTab={activeTab} data={data} />
			)}
		</Fragment>
	);
};
