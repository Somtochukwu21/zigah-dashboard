import { useState, useEffect } from "react";
import { DummyData } from "../../interface";

export const useSeeMore = (data: DummyData[], activeTab: string) => {
	const [numberOfItemsShown, setNumberOfItemsShown] = useState(5);
	const [numberOfFilteredItemsShown, setNumberOfFilteredItemsShown] =
		useState(5);

	const showMore = () => {
		setNumberOfItemsShown((prevCount) => Math.min(prevCount + 5, data.length));
		setNumberOfFilteredItemsShown((prevCount) =>
			Math.min(prevCount + 5, filteredData.length)
		);
	};

	useEffect(() => {
		setNumberOfItemsShown(5);
		setNumberOfFilteredItemsShown(5);
	}, [data, activeTab]);

	const filteredData = data.filter((user) => {
		return user.status.toLocaleLowerCase() === activeTab.toLocaleLowerCase();
	});

	const shortenData = data.slice(0, numberOfItemsShown).map((user) => user);
	const shortenFilteredData = filteredData
		.slice(0, numberOfFilteredItemsShown)
		.map((user) => user);

	return { shortenData, showMore, shortenFilteredData };
};
