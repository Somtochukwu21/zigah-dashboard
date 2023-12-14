import React from "react";
import { Dashboard } from "./pages";
import { Route, Routes } from "react-router-dom";
import { SideNav } from "./Layout";
function App() {
	return (
		<div className="bg-primary">
			<SideNav />
			<Routes>
				<Route path="/dashboard" element={<Dashboard />} />
				{/* <Route path="/books" element={<BookList />} /> */}
			</Routes>
		</div>
	);
}

export default App;
