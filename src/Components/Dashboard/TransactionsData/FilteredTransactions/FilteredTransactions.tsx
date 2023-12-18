	import React, { Fragment } from "react";
	import { ActiveAndData } from "../../../../interface";
	import { AllTransactions } from "../AllTransactions/AllTransactions";

	export const FilteredTransactions = ({ data, activeTab }: ActiveAndData) => {
		const filteredData = data.filter((users) => {
			return users.status.toLocaleLowerCase() === activeTab.toLocaleLowerCase();
		});

		console.log(filteredData);
		console.log(data);

		return (
			<Fragment>
				{filteredData.map((data, index) => (
					<AllTransactions
						key={index}
						amount={data.amount}
						image={data.image}
						name={data.name}
						status={data.status}
						time={data.time}
					/>
				))}
			</Fragment>
		);
	};
