import { TabProps } from "../../../interface";

export const Tab: React.FC<TabProps> = ({ label, isActive, onClick }) => {
	return (
		<button
			className={`${
				isActive && "bg-[#EAEEFF]"
			} w-[118px] text-xs p-1 font-medium rounded capitalize lg:w-[177px] lg:h-[35px] lg:text-[15px] lg:font-medium`}
			onClick={onClick}>
			{label}
		</button>
	);
};
