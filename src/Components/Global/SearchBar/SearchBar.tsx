import React from "react";
import { ReactComponent as Search } from "../../../assets/svg/search.svg";
import { ReactComponent as Calender } from "../../../assets/svg/calender.svg";
import { SearchBarProps } from "../../../interface";

export const SearchBar = ({
	handleSearchInputChange,
	searchInput,
}: SearchBarProps) => {
	return (
		<div className="flex items-center mt-8 mb-4 space-x-5">
			<div className="sm:py-1 pl-4 md:py-2 w-full border rounded-md flex cursor-pointer items-center p-1 py-0">
				<Search />
				<input
					type="search"
					placeholder="Search Transactions"
					className="w-full rounded bg-transparent border-b-[#ebebeb] p-2 outline-none text-xs lg:text-base"
					value={searchInput}
					onChange={handleSearchInputChange}
				/>
			</div>

			<Calender />
		</div>
	);
};
