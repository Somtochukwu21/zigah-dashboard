import React from "react";
import { Button, TransactionSkeleton } from "../../../../../Global";
import { TransactionsProps } from "../../../../../interface";

export const AllTransactions = ({
	shortenData,
	isAllDataShown,
	showMore,
}: TransactionsProps) => {
	return (
		<div>
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
					}`}
					onClick={showMore}
				/>
			</div>
		</div>
	);
};
