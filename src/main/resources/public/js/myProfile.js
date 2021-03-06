var editButton = document.getElementById("editbutton");
var saveButton = document.getElementById("savebutton");
var cancelButton = document.getElementById("cancelbutton");
var changePasswordButton = document.getElementById("changepasswordbutton");
var submitButton = document.querySelectorAll('input[type="submit"]')[1];
var cancelChangePasswordButton = document.getElementById("cancelchangepasswordbutton");
var bioText = document.getElementById("biotext");
var bioTextContent = bioText.textContent;
var bioEdit = document.getElementById("bioedit");
var changePasswordForm = document.getElementById("changepasswordform");
var changeBioForm = document.getElementById("changebioform");
bioEdit.value = bioTextContent.trim();

editButton.addEventListener('click', editClick, false);
cancelButton.addEventListener('click', cancelClick, false);
changePasswordButton.addEventListener('click', changePasswordClick, false);
cancelChangePasswordButton.addEventListener('click', cancelChangePasswordClick, false);
changePasswordForm.addEventListener('submit', changePasswordValidate, false);

function editClick() {
    bioText.style.display = "none";
    editButton.style.display = "none";
    changeBioForm.style.display = "block";
    bioEdit.style.display = "block";
    cancelButton.style.display = "inline";
    saveButton.style.display = "inline";
}

function cancelClick() {
    bioEdit.style.display = "none";
    changeBioForm.style.display = "none";
    cancelButton.style.display = "none";
    saveButton.style.display = "none";
    bioText.style.display = "block";
    editButton.style.display = "inline";
}

function changePasswordClick() {
    changePasswordButton.style.display = "none";
    submitButton.style.display = "inline";
    cancelChangePasswordButton.style.display="inline";
    changePasswordForm.style.display="block";
}

function cancelChangePasswordClick() {
    changePasswordForm.style.display = "none";
    cancelChangePasswordButton.style.display = "none";
    submitButton.style.display = "none";
    changePasswordButton.style.display = "inline";
}

function changePasswordValidate(e) {
    var valid = true;
    var npwd = document.querySelectorAll('input[type="password"]')[1].value;
    var cnpwd = document.querySelectorAll('input[type="password"]')[2].value;
    if (npwd.length < 8) {
	alert('Password must be at least 8 characters in length');
	document.getElementById('npwdalert').style.display = 'inline';
	valid = false;
    }
    else {
	document.getElementById('npwdalert').style.display = 'none';
    }
    if (npwd.length >= 8 && cnpwd != npwd) {
	alert('Passwords do not match');
	document.getElementById('cnpwdalert').style.display = 'inline';
	valid = false;
    }
    else {
	document.getElementById('cnpwdalert').style.display = 'none';
    }

    if (!valid) {
	e.preventDefault()
    } 
}
