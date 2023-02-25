const FNAME_REQUIRED = "Please enter your firstname";
const EMAIL_REQUIRED="please enter your email"
const LNAME_REQUIRED = "Please enter your lastname";
const PASS_REQUIRED = "password should be greater than 4-digit";
let createAccount=document.querySelector("#btn");
const email=document.getElementById("email");
const firstName=document.getElementById("firstName");
const lastName=document.getElementById("lastName");
const password=document.getElementById("password");
const form = document.querySelector("form");
const registerdata=JSON.parse(localStorage.getItem("register"))||[];




createAccount.addEventListener("click", async function (event) {

	event.preventDefault();

   
	let FNameValid = hasValue(form.elements["firstName"], FNAME_REQUIRED);
	let LNameValid = hasValue(form.elements["lastName"], LNAME_REQUIRED);

    let passValid = validatePass(form.elements["password"], PASS_REQUIRED, PASS_REQUIRED);
	let emailValid = validatePass(form.elements["email"], EMAIL_REQUIRED);
	// if valid, submit the form.
	if (FNameValid && LNameValid && passValid) {
		obj={
			Email:email.value,
			firstName:firstName.value,
            LastName:lastName.value,
            Password:password.value,
            Role:"User"
            }
		console.log(obj)
		try {
            let res=await fetch("http://localhost:3000/users",{
                method:"POST",
                body:JSON.stringify(obj),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            let data= await res.json();
            console.log(data)
        } catch (error) {
            console.log(error);
        }
		registerdata.push(obj);
		localStorage.setItem("register".JSON.stringify(registerdata))
		alert(`Registration Successfull`);
	}

});

function validatePass(input, requiredMsg, invalidMsg) {
	if (!hasValue(input, requiredMsg)) {
		return false;
	}

	const name = input.value.trim();
	if (name.length<4) {
        alert(invalidMsg)
		return showError(input, invalidMsg);
	}
	return true;
}


function showMessage(input, message, type) {
	// get the small element and set the message
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	// update the class for the input
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}
