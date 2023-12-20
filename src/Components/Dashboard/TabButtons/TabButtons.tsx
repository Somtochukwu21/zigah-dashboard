import { TabProps } from "../../../interface";
import { Button } from "../../Global";

export const TabButtons: React.FC<TabProps> = ({
	label,
	isActive,
	onClick,
}) => {
	return (
		<Button
			className={`text-primary text-xs p-1 ${
				isActive && "bg-[#EAEEFF] text-secondary"
			} ${!isActive && "hover:bg-primary"}`}
			onClick={onClick}
			caption={label}
		/> 
	);
};
