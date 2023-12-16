import React, { Fragment } from "react";
import { ReactComponent as Ellipse } from "../../assets/svg/ellipse.svg";
import { data } from "../../Data";

export const TransactionData = () => {
	return (
		<Fragment>
			{data.map((data, index) => (
				<div className="flex items-center border-b py-4 space-x-4" key={index}>
					<div>
						<img src={data.image} alt="" />
					</div>
					<div className="flex justify-between w-full">
						<div>
							<h4>{data.name}</h4>
							<div>
								<p>{data.time}</p>
								<Ellipse />
								<p>{data.status}</p>
							</div>
						</div>
						<div>
							<p>{data.amount}</p>
						</div>
					</div>
				</div>
			))}
		</Fragment>
	);
};

// const Transaction: React.FC<DummyData> = (data) => {
// 	// console.log(usersTransactionInfo)
// 	return (
// 		<div>hey</div>
// 		// <div className={`flex justify-between items-center border-b py-4`}>
// 		// 	<div className="flex space-x-6 items-center">
// 		// 		<div>
// 		// 			<svg
// 		// 				stroke="currentColor"
// 		// 				fill="currentColor"
// 		// 				strokeWidth="0"
// 		// 				viewBox="0 0 256 256"
// 		// 				className={`text-${color} sm:text-3xl md:text-5xl p-2 rounded-full bg-${color}`}
// 		// 				height="1em"
// 		// 				width="1em"
// 		// 				xmlns="http://www.w3.org/2000/svg">
// 		// 				<path d="M237.66,117.66l-80,80A8,8,0,0,1,144,192V152.23c-57.1,3.24-96.25,40.27-107.24,52h0a12,12,0,0,1-20.68-9.58c3.71-32.26,21.38-63.29,49.76-87.37,23.57-20,52.22-32.69,78.16-34.91V32a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,237.66,117.66Z"></path>
// 		// 			</svg>
// 		// 		</div>
// 		// 		<div className="flex flex-col">
// 		// 			<h2 className="font-bold ">{name}</h2>
// 		// 			<div className="flex space-x- items-center">
// 		// 				<p className="text-grayColor">{time}</p>
// 		// 				<Ellipse />
// 		// 				<p className={`text-${color}`}>{status}</p>
// 		// 			</div>
// 		// 		</div>
// 		// 	</div>
// 		// 	<div>{/* <p className={`text`}>{amount}</p> */}</div>
// 		// </div>
// 	);
// };

// export const TransactionData: React.FC = () => (
// 	<div>{/* {data.map(((data, index) = <Transaction  key />))} */}</div>
// );
