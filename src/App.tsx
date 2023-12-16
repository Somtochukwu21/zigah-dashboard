import React from "react";
import { Dashboard, Exchange, Wallet } from "./pages";
import { Route, Routes } from "react-router-dom";
import { SideNav } from "./Layout";
function App() {
	return (
		<div className="bg-primary flex">
			<SideNav />
			<div className="w-full">
				<Routes>
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/exchange" element={<Exchange />} />
					<Route path="/wallet" element={<Wallet />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
