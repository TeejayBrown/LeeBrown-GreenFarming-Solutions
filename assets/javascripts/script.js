document.addEventListener("DOMContentLoaded", load);

function load(){
	document.getElementById("survey_form").addEventListener("submit", validate);
	document.getElementById("survey_form").addEventListener("reset", resetForm);


}

function validate(e){
	
	hideAllErrors();

	if(formHasErrors()){
		e.preventDefault();

		return false;
	}

	return true;
}


function resetForm(e){
	if ( confirm('Clear survey?') )
	{
		hideAllErrors();
		
		document.getElementById("fname").focus();
		
		return true;
	}

	e.preventDefault();
	
	return false;
}

function formHasErrors(){

	let errorFlag = false;

	let requiredFields = ["fname", "tel", "email", "feedback"];
	let requiredErrors = ["fname_error", "tel_error", "email_error", "feedback_error"];

	for (let i = 0; i < requiredFields.length; i++) {
	 	let textField = document.getElementById(requiredFields[i]).value;
	 	if(textField == null || textField.replace(/^\s+|\s+$/g,"") == ""){
	 		document.getElementById(requiredErrors[i]).style.display = "block";

	 		if(!errorFlag){
	 			document.getElementById(requiredFields[i]).focus();
	 			document.getElementById(requiredFields[i]).select();
	 		}

	 		errorFlag = true;
	 	}
	}

	let phoneRegex = new RegExp(/^\d{10}$/);
	let phoneNumber = document.getElementById("tel").value;

	if(!phoneRegex.test(phoneNumber)){
		document.getElementById("telformat_error").style.display = "block";

	 	if(!errorFlag){
	 		document.getElementById("tel").focus();
	 		document.getElementById("tel").select();
	 	}

	 	errorFlag = true;
	}

	let emailRegex = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
	let emailAddress = document.getElementById("email").value;

	if(!emailRegex.test(emailAddress)){
		document.getElementById("emailformat_error").style.display = "block";

	 	if(!errorFlag){
	 		document.getElementById("email").focus();
	 		document.getElementById("email").select();
	 	}

	 	errorFlag = true;
	}

	return errorFlag;

}

function hideAllErrors()
{
	var errorFields = document.getElementsByClassName("error");

	for(var i = 0;i < errorFields.length; i++){
		errorFields[i].style.display = "none";
	}
}
