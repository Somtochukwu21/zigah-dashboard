import React from "react";
import { DashboardContent } from "../../Components";
import { Card } from "../../Global";
import { Layout } from "../../Layout";

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
