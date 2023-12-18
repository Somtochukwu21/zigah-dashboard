import React from "react";
import { ReactComponent as Ellipse } from "../../../assets/svg/ellipse.svg";
import { DummyData } from "../../../interface";

export const AllTransactions = ({
	amount,
	image,
	name,
	status,
	time,
}: DummyData) => {
	return (
		<div className="flex items-center border-b py-4 space-x-4">
			<div>
				<img src={image} alt="" />
			</div>
			<div className="flex justify-between w-full">
				<div>
					<h4
						className="text-black text-[15px] font-semibold">
						{name}
					</h4>
					<div>
						<p>{time}</p>
						<Ellipse />
						<p>{status}</p>
					</div>
				</div>
				<div>
					<p>{amount}</p>
				</div>
			</div>
		</div>
	);
};
