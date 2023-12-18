import React, { useState } from "react";
import { DummyData } from "../../interface";

export const useSearchInput = (data: DummyData[]) => {
	const [searchInput, setSearchInput] = useState<string>("");

	const handleSearchInputChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setSearchInput(event.target.value);
	};

	const filteredData = data.filter((data) =>
		data.name.toLowerCase().includes(searchInput.toLowerCase())
	);

	console.log(filteredData)
	return { handleSearchInputChange, searchInput, filteredData };
};
