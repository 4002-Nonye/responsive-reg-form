"strict mode";
const form = document.querySelector(".form");
const userFname = document.querySelector(".firstname");
const userFnameBorder = document.querySelector(".firstname");
const userLnameBorder = document.querySelector(".lastname");
const userEmailBorder = document.querySelector(".email");
const userPasswordBorder = document.querySelector(".password");
const userLname = document.querySelector(".lastname");
const userEmail = document.querySelector(".email");
const userPassword = document.querySelector(".password");
const submitBtn = document.querySelector(".btn__submit");
const fnameError = document.querySelector(".firstname__error");
const lnameError = document.querySelector(".lastname__error");
const emailError = document.querySelector(".email__error");
const passwordError = document.querySelector(".password__error");
const ErrorIcon = document.querySelector(".error__icon");
const ErrorIcon1 = document.querySelector(".error__icon1");
const ErrorIcon2 = document.querySelector(".error__icon2");
const ErrorIcon3 = document.querySelector(".error__icon3");

form.onsubmit = () => {
	if (userFname.value.trim() === "") {
		ErrorIcon.style.opacity = 1;
		fnameError.style.display = "block";
		userFnameBorder.style.borderColor = "red";
		userFname.focus();
		setTimeout(() => {
			fnameError.style.display = "none";
		}, 4000);
	} else {
		ErrorIcon.style.opacity = 0;
		fnameError.style.display = "none";
		userFnameBorder.style.borderColor = "hsl(0, 0%, 85%)";
	}
	if (userLname.value === "") {
		ErrorIcon1.style.opacity = 1;
		lnameError.style.display = "block";
		userLnameBorder.style.borderColor = "red";
		setTimeout(() => {
			lnameError.style.display = "none";
		}, 4000);
	} else {
		ErrorIcon1.style.opacity = 0;
		lnameError.style.display = "none";
		userLnameBorder.style.borderColor = "hsl(0, 0%, 85%)";
	}

	if (
		!userEmail.value.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
	) {
		emailError.style.display = "block";
		ErrorIcon2.style.opacity = 1;
		document.getElementsByName("email")[0].placeholder =
			"email@example/com";
		userEmailBorder.style.borderColor = "red";
		// const style = document.createElement("style");
		// style.type = "text/css";
		// const { sheet } = userEmail.appendChild(style);
		// const rule = sheet.insertRule("::placeholder {}");
		// const placeholderStyle = sheet.rules[rule].style;

		// placeholderStyle.color = "red";
		setTimeout(() => {
			emailError.style.display = "none";
		}, 4000);
	} else {
		ErrorIcon2.style.opacity = 0;
		emailError.style.display = "none";
		userEmailBorder.style.borderColor = "hsl(0, 0%, 85%)";
	}
	if (userPassword.value === "") {
		passwordError.style.display = "block";
		ErrorIcon3.style.opacity = 1;
		userPasswordBorder.style.borderColor = "red";
		setTimeout(() => {
			passwordError.style.display = "none";
		}, 4000);
		return false;
	} else {
		ErrorIcon3.style.opacity = 0;
		passwordError.style.display = "none";
		userPasswordBorder.style.borderColor = "hsl(0, 0%, 85%)";
	}
	if (
		!userEmail.value.match(
			/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/
		) ||
		userFname.value.trim() === "" ||
		(userLname.value === "" && userPassword.value != "")
	) {
		return false;
	}
};

// [
// 	{
// 		key: "firstname",
// 		value: "ikenana",
// 	},
// 	{
// 		key: "firstname",
// 		value: "ikenana",
// 	},
// ];
