import React, { useState } from "react";

export const useSearchBar = () => {
	const [searchInput, setSearchInput] = useState<string>("");

	const handleSearchInputChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setSearchInput(event.target.value);
	};

	// const filteredTransactions = transactions.filter((transaction) =>
	// 	transaction.name.toLowerCase().includes(searchInput.toLowerCase())
	// );
  
	return { handleSearchInputChange, searchInput };
};
