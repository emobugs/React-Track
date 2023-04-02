import "./App.css";
import {useState} from "react";
import classNames from "classnames";

function App() {
	const [values, setValues] = useState({
		firstName: "",
		lastName: "",
		email: "",
	});

	const [submitted, setSubmitted] = useState(false);

	const firstNameHandler = (e) => {
		setValues({...values, firstName: e.target.value});
	};

	const lastNameHandler = (e) => {
		setValues({...values, lastName: e.target.value});
	};

	const emailHandler = (e) => {
		setValues({...values, email: e.target.value});
	};

	const validateName = (name, field) => {
		if (name.length === 0) {
			return `Please enter a ${field} name`;
		}
		if (name.length < 2) {
			return `${field} name must be at least 2 symbol long`;
		}
		if (name.includes(" ")) {
			return `${field} name must not contain whitespaces`;
		}
		return true;
	};

	const validateEmail = (email) => {
		const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		const valid = regex.test(email);
		if (!valid) {
			return "please enter valid email";
		}
		return true;
	};

	const submitHandler = (e) => {
		e.preventDefault();

		if (
			validateName(values.firstName) &&
			validateName(values.lastName) &&
			validateEmail(values.email)
		) {
			setSubmitted(true);
		}
	};

	const classCheck = (inputField) => {
		if (inputField === "firstName" || inputField === "lastName") {
			if (validateName(values[inputField]) === true) {
				return "success";
			}
		}
		if (inputField === "email" && validateEmail(values.email) === true) {
			return "success";
		}
		return "error";
	};

	return (
		<div className="wrapper">
			<form className="form" onSubmit={submitHandler}>
				{submitted && <div className="success-message">Success! You can now Sign In</div>}
				<input
					value={values.firstName}
					className={classNames(`input-${submitted && classCheck("firstName")}`)}
					type="text"
					placeholder="First Name"
					onChange={firstNameHandler}
				/>
				{submitted && <span>{validateName(values.firstName, "first")}</span>}
				<input
					value={values.lastName}
					className={classNames(`input-${submitted && classCheck("lastName")}`)}
					type="text"
					placeholder="Last Name"
					onChange={lastNameHandler}
				/>
				{submitted && <span>{validateName(values.lastName, "last")}</span>}
				<input
					value={values.email}
					className={classNames(`input-${submitted && classCheck("email")}`)}
					type="email"
					placeholder="Email"
					onChange={emailHandler}
				/>
				{submitted && <span>{validateEmail}</span>}
				<button className="btn-submit" type="submit">
					Register
				</button>
			</form>
		</div>
	);
}

export default App;
