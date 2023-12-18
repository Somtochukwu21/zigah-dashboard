import React, { useState, useEffect } from "react";
import { DummyData } from "../../interface";

export const useSeeMore = (data: DummyData[]) => {
	const [numberOfItemsShown, setNumberOfItemsShown] = useState(5);

	const showMore = () => {
		setNumberOfItemsShown((prevCount) => Math.min(prevCount + 5, data.length));
	};

	useEffect(() => {
		setNumberOfItemsShown(5);
	}, [data]);

	const shortenedData = data.slice(0, numberOfItemsShown).map((user) => user);

	return { shortenedData, showMore };
};
