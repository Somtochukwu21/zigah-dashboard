import { TabProps } from "../../../../interface";

export const TabButtons: React.FC<TabProps> = ({ label, isActive, onClick }) => {
  return (
		<button
			className={`w-[118px] text-xs p-1 font-medium rounded capitalize ${isActive && "bg-[#EAEEFF]"} lg:w-[177px] lg:h-[35px] lg:text-[15px] lg:font-medium`}
			onClick={onClick}>
			{label}
		</button>
	);
};