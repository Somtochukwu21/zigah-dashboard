import React, { Fragment } from "react";
import { TransactionsProps } from "../../../../../interface";
import { Button, TransactionSkeleton } from "../../../../../Global";

export const FilteredTransactions = ({
	isAllDataShown,
	showMore,
	shortenData,
}: TransactionsProps) => {
	return (
		<Fragment>
			{shortenData.map((data, index) => (
				<TransactionSkeleton
					key={index}
					amount={data.amount}
					image={data.image}
					name={data.name}
					status={data.status}
					time={data.time}
				/>
			))}
			<div className="flex justify-center py-8">
				<Button
					caption="More transactions"
					className={`bg-primary text-secondary shadow ${
						isAllDataShown && "hidden"
					}
					`}
					onClick={showMore}
				/>
			</div>
		</Fragment>
	);
};
