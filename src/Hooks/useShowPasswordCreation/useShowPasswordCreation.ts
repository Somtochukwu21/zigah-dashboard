import { useState } from "react";
export const useShowPasswordCreation = () => {
	const [showPasswordCreation, setShowPasswordCreation] = useState(false);

	const handleContinueClick = () => {
		setShowPasswordCreation(true);
	};

	return { showPasswordCreation, handleContinueClick };
};
