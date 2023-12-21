import React from "react";
import { AppRoutes } from "./Components";
import { useTitle } from "./Hooks";
import { SignIn } from "./Pages";

function App() {
	useTitle();

	return (
		<div className="bg-primary lg:h-screen">
			<SignIn />
			<AppRoutes />
			{/* <Routes>
				<Route element={<ProtectedRoutes />}>
					<Route path="/" element={<Dashboard />}></Route>
					<Route path="users" element={<Users />}></Route>
					<Route path="createbet" element={<CreateBet />}></Route>
					<Route path="viewbets" element={<ViewBets />}></Route>
				</Route>
				<Route path="/signin" element={<SignIn />} />
			</Routes> */}
		</div>
	);
}

export default App;
