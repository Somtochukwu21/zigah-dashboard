import React from "react";
import { DashboardContent } from "../../Components";
import { Layout } from "../../Layout";
import { Card } from "../../Global";

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
