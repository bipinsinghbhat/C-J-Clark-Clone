const EMAIL_REQUIRED="please enter your email"
const PASS_REQUIRED = "password should be greater than 4-digit";
const email=document.getElementById("email");
const password=document.getElementById("password");
const form = document.querySelector("form");
let loginAccount=document.querySelector("#btn");

loginAccount.addEventListener("click", async function (event) {

	event.preventDefault();

    let passValid = validatePass(form.elements["password"], PASS_REQUIRED, PASS_REQUIRED);
	let emailValid = validatePass(form.elements["email"], EMAIL_REQUIRED);
	// if valid, submit the form.
	if (emailValid && passValid) {
		obj={
			Email:email.value,
            Password:password.value,
            }
		console.log(obj)
		try {
            let res=await fetch("http://localhost:3000/users"
              
            )
            let data= await res.json();
            let flag=false;
           for(let i=0;i<data.length;i++){
             if(data[i].Email==obj.Email&&data[i].Password==obj.Password){
                flag=true;
            }
        }
        if(flag){
    alert("login successfull")

}else{
    alert("check credential");
}

            console.log(data)
        } catch (error) {
            console.log(error);
        }
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