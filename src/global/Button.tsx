import { ButtonProp } from "../interface/interface";
export const Button = ({ caption, element }: ButtonProp) => {
	return (
		<button className="text-light flex items-center space-x-1 justify-center bg-secondary w-40 h-10 text rounded-[5px]">
			{element}
			<p className="text-sm font-semibold capitalize">{caption}</p>
		</button>
	);
};
