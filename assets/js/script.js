
function gotoURL(url){
	if(url?.length){
		window.location.assign(url);
	}
}
function validateCredentials(email, password) {
    if (email.length > 1 && password.length > 1) {
        console.log("Both email and password are valid.");
        return true;
    } else {
        console.log("Email or password is too short.");
        return false;
    }
}

// Example usage
const email = "example@example.com";
const password = "12345";
validateCredentials(email, password);
