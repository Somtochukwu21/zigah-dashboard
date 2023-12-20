import React from "react";
import { Header, PageContent, SideBar } from "./Components";

function App() {
	return (
		<div className="bg-primary flex flex-col lg:h-screen">
			<Header />
			<div className="flex h-full	w-full flex-1 justify-start items-start overflow-auto">
				<SideBar />
				<PageContent />
			</div>
		</div>
	);
}

export default App;
