import { ReactNode } from "react";

export interface ButtonProp {
	caption: string;
	className?: string;
	element?: ReactNode;
	onClick?: () => void;
}

export interface TabProps {
	label: string;
	isActive: boolean;
	onClick: () => void;
}

export interface FormTextHeaderProps {
	paragraph: string;
	header: string;
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

export interface SearchBarProps {
	handleSearchInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	searchInput: string;
}

export interface DataInterface {
	data: DummyData[];
}

export interface ActiveAndData extends DataInterface {
	activeTab: string;
}

export interface CardProp {
	children: ReactNode;
}

export interface FormValues {
	email: string;
	firstName: string;
	lastName: string;
	phoneNumber: number;
	accept: HTMLInputElement;
}

export interface FormProps {
	onSubmit: () => void;
}
export interface TransactionsProps {
	shortenData: DummyData[];
	showMore: () => void;
	isAllDataShown: boolean;
}