import { ReactNode } from "react";

export interface ButtonProp {
	caption: string;
	element: ReactNode;
}

export interface TabProps {
	label: string;
	isActive: boolean;
	onClick: () => void;
}

export interface TabsProps {
	tabs: { label: string; id: number }[];
}

export interface DummyData {
	name: string;
	amount: string;
	status: string;
	time: string;
	image: string;
}
