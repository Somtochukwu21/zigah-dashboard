import React from "react";
import { SignIn,Login } from "./Pages";
import { useTitle } from "./Hooks";
import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "./Components";

function App() {
	useTitle();

	return (
		<div className="bg-primary lg:h-screen">
			<Routes>
				<Route path="/" element={<SignIn />}></Route>
				<Route path="/login" element={<Login />}></Route>
			</Routes>
			<AppRoutes />
		</div>
	);
}

export default App;