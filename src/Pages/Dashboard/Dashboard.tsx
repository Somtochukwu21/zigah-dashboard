import React from "react";
import { Card, DashboardContent, Layout } from "../../Components";

export const Dashboard = () => {
	return (
		<Layout>
			<Card>
				<div className="h-full w-full">
					<DashboardContent />
				</div>
			</Card>
		</Layout>
	);
};
