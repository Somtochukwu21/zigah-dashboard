import { Route, Routes } from "react-router-dom";
import { Dashboard, Exchange, Wallet } from "../../Pages";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/dashboard" element={<Dashboard />}></Route>
			<Route path="/wallet" element={<Wallet />}></Route>
			<Route path="/exchange" element={<Exchange />}></Route>
		</Routes>
	);
};
