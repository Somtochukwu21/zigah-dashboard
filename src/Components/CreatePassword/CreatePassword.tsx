// import React, { useState } from "react";

// const SignInPage = ({ onContinueClick }) => {
// 	const [email, setEmail] = useState("");
// 	const [password, setPassword] = useState("");

// 	const handleContinueClick = () => {
// 		// You might want to perform some validation on the email and password
// 		// before proceeding to the next step

// 		// Assuming the validation is successful, pass control to the parent component
// 		onContinueClick();
// 	};

// 	return (
// 		<div>
// 			<h1>Sign In</h1>
// 			<label>Email:</label>
// 			<input
// 				type="email"
// 				value={email}
// 				onChange={(e) => setEmail(e.target.value)}
// 			/>
// 			<label>Password:</label>
// 			<input
// 				type="password"
// 				value={password}
// 				onChange={(e) => setPassword(e.target.value)}
// 			/>
// 			<button onClick={handleContinueClick}>Continue</button>
// 		</div>
// 	);
// };

// const PasswordCreationPage = () => {
// 	const [password, setPassword] = useState("");

// 	const handlePasswordChange = (e) => {
// 		setPassword(e.target.value);
// 	};

// 	return (
// 		<div>
// 			<h1>Create Password</h1>
// 			<label>New Password:</label>
// 			<input type="password" value={password} onChange={handlePasswordChange} />
// 			{/* Additional password creation UI/components */}
// 			<button>Finish</button>
// 		</div>
// 	);
// };

// const App = () => {
// 	const [showPasswordCreation, setShowPasswordCreation] = useState(false);

// 	const handleContinueClick = () => {
// 		setShowPasswordCreation(true);
// 	};

// 	return (
// 		<div>
// 			{showPasswordCreation ? (
// 				<PasswordCreationPage />
// 			) : (
// 				<SignInPage onContinueClick={handleContinueClick} />
// 			)}
// 		</div>
// 	);
// };

// export default App;
export const CreatePassword = () => {
	return <div>Create password</div>
}