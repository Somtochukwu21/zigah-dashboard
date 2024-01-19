import React from "react";
import Naira from "../../../assets/svg/naira.svg?react";
import Add from "../../../assets/svg/add.svg?react";
import Send from "../../../assets/svg/send.svg?react";
import { Button } from "../../../Global";

export const WalletOverview = () => {
	return (
		<div>
			<h2 className="text-secondary lg:text-sm font-semibold tracking-normal text-[11px]">
				Wallet Balance
			</h2>
			<div className="flex space-x-1 mt-2 mb-3">
				<Naira className="self-center" />
				<div className="flex font-bold items-end">
					<h1 className="text-secondary text-4xl">6,000,000 </h1>
					<h3 className="text-[#00000066] text-2xl">.00</h3>
				</div>
			</div>
			<div className="flex space-x-2">
				<Button
					caption="fund account"
					element={<Add />}
					className="bg-secondary"
				/>
				<Button
					caption="send money"
					element={<Send />}
					className="bg-secondary"
				/>
			</div>
		</div>
	);
};
