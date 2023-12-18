import { ButtonProp } from "../../../interface";

export const Button = ({
	caption,
	element,
	className,
	onClick,
}: ButtonProp) => {
	return (
		<button
			className={`text-light flex items-center space-x-1 justify-center w-40 h-10  rounded-[5px] ${className}`}
			onClick={onClick}>
			{element}
			<p className="lg:text-sm font-semibold capitalize text-xs">{caption}</p>
		</button>
	);
};
