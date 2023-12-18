import React, { Fragment } from "react";
import { ActiveAndData } from "../../../interface";
import { AllTransactions } from "./AllTransactions";
import { FilteredTransactions } from "./FilteredTransactions";

export const TransactionData = ({ data, activeTab }: ActiveAndData) => {
	const users = data;

	return (
		<Fragment>
			{users.map((data, index) =>
				activeTab === "all transactions" ? (
					<AllTransactions
						key={index}
						amount={data.amount}
						image={data.image}
						name={data.name}
						status={data.status}
						time={data.time}
					/>
				) : (
					<FilteredTransactions
						activeTab={activeTab}
						data={users}
						key={index}
					/>
				)
			)}
		</Fragment>
	);
};
