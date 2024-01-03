import React from "react";
import { ReactComponent as Ellipse } from "../../../assets/svg/ellipse.svg";
import { DummyData } from "../../../interface";

export const TransactionSkeleton = ({
	amount,
	image,
	name,
	status,
	time,
}: DummyData) => {
	const green = status.toLocaleLowerCase() === "inward" && "text-green-600";
	const red = status.toLocaleLowerCase() === "completed" && "text-red-600";
	const slate = status.toLocaleLowerCase() === "pending" && "text-secondary";

	return (
		<div className="flex items-center border-b py-4 space-x-4">
			<div>
				<img src={image} alt="" />
			</div>
			<div className="flex justify-between w-full items-center">
				<div>
					<h4 className="tracking-wide  text-sm font-bold lg:text-lg ">
						{name}
					</h4>
					<div className="flex space-x-4 items-center text-[10px] lg:text-base">
						<p className="text-primary ">{time}</p>
						<Ellipse />
						<p className={`${green} ${red} ${slate} font-semibold`}>{status}</p>
					</div>
				</div>
				<div>
					<p className={`${green} ${slate} font-semibold	${red} text-sm`}>
						{amount}
					</p>
				</div>
			</div>
		</div>
	);
};
