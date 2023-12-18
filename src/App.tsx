import React from "react";
import { Header, PageContent, SideBar } from "./Components";

function App() {
	return (
		<div className="bg-primary flex flex-col h-screen">
			<Header />
			<div className="flex flex-1 justify-start items-start overflow-auto">
				<SideBar />
				<PageContent />
			</div>
		</div>
	);
}

export default App;
