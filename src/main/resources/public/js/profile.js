let preID = parent.document.URL.substring(parent.document.URL.indexOf('?username='), parent.document.URL.length);
let ID = "";
if(preID.includes("?")) {
    ID = preID.slice(10);
}

/**
let preID = parent.document.URL.substring(parent.document.URL.indexOf('?passwordChange='), parent.document.URL.length);
let ID = "";
if(preID.includes("?")) {
    ID = preID.slice('?passwordChange='.length);
    if(ID == "nonMatching"){
    	alert("Your password and confirm password do not match.")
    }else if(ID == "success"){
    	alert("Your password has been changed.")
    }else if(ID == "fail"){
    	alert("Your password could not be changed.")
    }
}
**/

let head = document.getElementById("head");
let generalLink = document.createElement("link");
generalLink.setAttribute("href", "../css/page_layout.css");
generalLink.setAttribute("type", "text/css");
generalLink.setAttribute("rel", "stylesheet");
head.appendChild(generalLink);

let body = document.getElementById("body");

let header = document.createElement("header");
let headerImg = document.createElement("img");
headerImg.setAttribute("src", "../banner1.png");
header.appendChild(headerImg);
body.appendChild(header);

let navbar = document.createElement("nav");
let navscript = document.createElement("script");
navscript.setAttribute("src", "../js/navbar.js");
navbar.appendChild(navscript);
body.appendChild(navbar);


function generateProfile (uname, fname, lname, joinD, bird, biostr, posts) {
    if(biostr=="") {biostr = "This user has not written a biography yet...";}
    let profileCSS = document.createElement("link");
    profileCSS.setAttribute("href", "../css/profilePage.css");
    profileCSS.setAttribute("type", "text/css");
    profileCSS.setAttribute("rel", "stylesheet");
    head.appendChild(profileCSS);

    let pageTitle = document.createElement("title");
    pageTitle.innerHTML = uname + "'s Profile";
    head.appendChild(pageTitle);

    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("id", "page");

    let titleBar = document.createElement("div");
    titleBar.setAttribute("id", "titlebar");
    titleBar.innerHTML = "Viewing User -- " + uname;

    mainDiv.appendChild(titleBar);

    let infoBox = document.createElement("div");
    infoBox.setAttribute("id", "infobox");

    let inner1 = document.createElement("div");
    inner1.setAttribute("class", "inner1em");

    let table = document.createElement("table");

    let firstTR = document.createElement("tr");

    let name = document.createElement("td");
    name.setAttribute("class", "attribute");
    name.innerHTML = "Name:";
    firstTR.appendChild(name);

    let realname = document.createElement("tr");
    realname.setAttribute("class", "value");
    realname.innerHTML = fname +" " + lname;
    firstTR.appendChild(realname);
    table.appendChild(firstTR);

    let secTR = document.createElement("tr");

    let joined = document.createElement("td");
    joined.setAttribute("class", "attribute");
    joined.innerHTML = "Joined:";
    secTR.appendChild(joined);

    let accCreateDate = document.createElement("td");
    accCreateDate.setAttribute("class", "value");
    accCreateDate.innerHTML = joinD;
    secTR.appendChild(accCreateDate);
    table.appendChild(secTR);

    let thirdTR = document.createElement("tr");

    let BirthD = document.createElement("td");
    BirthD.setAttribute("class", "attribute");
    BirthD.innerHTML = "Birthday:";
    thirdTR.appendChild(BirthD);

    let birth = document.createElement("td");
    birth.setAttribute("class", "value");
    birth.innerHTML = bird;
    thirdTR.appendChild(birth);
    table.appendChild(thirdTR);

    let fourthTR = document.createElement("tr");

    let postNum = document.createElement("td");
    postNum.setAttribute("class", "attribute");
    postNum.innerHTML = "Posts:";
    fourthTR.appendChild(postNum);

    let numVal = document.createElement("td");
    numVal.setAttribute("class", "value");
    numVal.innerHTML = posts;
    fourthTR.appendChild(numVal);
    table.appendChild(fourthTR);

    inner1.appendChild(table);

    infoBox.appendChild(inner1);

    let inner2 = document.createElement("div");
    inner2.setAttribute("class", "inner1em");

    let bioBox = document.createElement("h3");
    bioBox.innerHTML = "Bio";
    inner2.appendChild(bioBox);

    let p = document.createElement("p");
    p.innerHTML = biostr
    inner2.appendChild(p);
    
    infoBox.appendChild(inner2);

    mainDiv.appendChild(infoBox);

    body.appendChild(mainDiv);
}

function generateMyProfile (uname, fname, lname, joinD, bird, biostr, posts) {
    if(biostr == "") { biostr = "Write something about yourself";}
    let myProfileCSS = document.createElement("link");
    myProfileCSS.setAttribute("href", "../css/myProfile.css");
    myProfileCSS.setAttribute("type", "text/css");
    myProfileCSS.setAttribute("rel", "stylesheet");
    head.appendChild(myProfileCSS);

    let myPageTitle = document.createElement("title");
    myPageTitle.innerHTML = "My Profile";
    head.appendChild(myPageTitle);

    let myMainDiv = document.createElement("div");
    myMainDiv.setAttribute("id", "page");

    let myTitleBar = document.createElement("div");
    myTitleBar.setAttribute("id", "titlebar");
    myTitleBar.innerHTML = "My Profile -- " + uname;

    myMainDiv.appendChild(myTitleBar);

    let myInfoBox = document.createElement("div");
    myInfoBox.setAttribute("id", "infobox");

    let myInner1 = document.createElement("div");
    myInner1.setAttribute("class", "inner1em");

    let myTable = document.createElement("table");

    let myFirstTR = document.createElement("tr");

    let myName = document.createElement("td");
    myName.setAttribute("class", "attribute");
    myName.innerHTML = "Name:";
    myFirstTR.appendChild(myName);

    let myRealname = document.createElement("tr");
    myRealname.setAttribute("class", "value");
    myRealname.innerHTML = fname + " " + lname;
    myFirstTR.appendChild(myRealname);
    myTable.appendChild(myFirstTR);

    let mySecTR = document.createElement("tr");

    let iJoined = document.createElement("td");
    iJoined.setAttribute("class", "attribute");
    iJoined.innerHTML = "Joined:";
    mySecTR.appendChild(iJoined);

    let myAccCreateDate = document.createElement("td");
    myAccCreateDate.setAttribute("class", "value");
    myAccCreateDate.innerHTML = joinD;
    mySecTR.appendChild(myAccCreateDate);
    myTable.appendChild(mySecTR);

    let myThirdTR = document.createElement("tr");

    let myBirth = document.createElement("td");
    myBirth.setAttribute("class", "attribute");
    myBirth.innerHTML = "Birthday:";
    myThirdTR.appendChild(myBirth);

    let myBirthDay = document.createElement("td");
    myBirthDay.setAttribute("class", "value");
    myBirthDay.innerHTML = bird;
    myThirdTR.appendChild(myBirthDay);
    myTable.appendChild(myThirdTR);

    let myFourthTR = document.createElement("tr");

    let myPostNum = document.createElement("td");
    myPostNum.setAttribute("class", "attribute");
    myPostNum.innerHTML = "Posts:";
    myFourthTR.appendChild(myPostNum);

    let myNumVal = document.createElement("td");
    myNumVal.setAttribute("class", "value");
    myNumVal.innerHTML = posts;
    myFourthTR.appendChild(myNumVal);
    myTable.appendChild(myFourthTR);

    myInner1.appendChild(myTable);

    myInfoBox.appendChild(myInner1);

    let myInner2 = document.createElement("div");
    myInner2.setAttribute("class", "inner1em");

    let myBioBox = document.createElement("h3");
    myBioBox.innerHTML = "Bio";

    let saveB = document.createElement("input");
    saveB.setAttribute("id", "savebutton");
    saveB.setAttribute("type", "submit");
    saveB.setAttribute("form", "changebioform");
    saveB.setAttribute("value", "Save");
    myBioBox.appendChild(saveB);

    let editB = document.createElement("button");
    editB.setAttribute("id", "editbutton");
    editB.setAttribute("type", "button");
    editB.addEventListener('click', editClick, false);
    editB.innerHTML = "Edit";
    myBioBox.appendChild(editB);

    let cancelB = document.createElement("button");
    cancelB.setAttribute("id", "cancelbutton");
    cancelB.setAttribute("type", "button");
    cancelB.innerHTML = "Cancel";
    cancelB.addEventListener('click', cancelClick, false);
    myBioBox.appendChild(cancelB);

    let bioText = document.createElement("div");
    bioText.setAttribute("id", "biotext");
    bioText.innerHTML = biostr;
    myInner2.appendChild(myBioBox);

    myInner2.appendChild(bioText);

    let bioForm = document.createElement("form");
    bioForm.setAttribute("id", "changebioform");
    bioForm.setAttribute("name", "changebioform");
    bioForm.setAttribute("action", "/updatebio");
    bioForm.setAttribute("method", "post");
 
    let editArea = document.createElement("textarea");
    editArea.setAttribute("id", "bioedit");
    editArea.setAttribute("name", "bioedit");
    editArea.setAttribute("placeholder", biostr);
    bioForm.appendChild(editArea);

    myInner2.appendChild(bioForm);

    myInfoBox.appendChild(myInner2);

    let myInner3 = document.createElement("div");
    myInner3.setAttribute("class", "inner1em");

    let passCBox = document.createElement("h3");
    passCBox.innerHTML = "Password ";

    let changePWB = document.createElement("input");
    changePWB.setAttribute("type", "submit");
    changePWB.setAttribute("form", "changepasswordform");
    changePWB.setAttribute("value", "Change");
    passCBox.appendChild(changePWB);

    let changePWOpB = document.createElement("button");
    changePWOpB.setAttribute("id", "changepasswordbutton");
    changePWOpB.setAttribute("type", "button");
    changePWOpB.addEventListener('click', changePasswordClick, false);
    changePWOpB.innerHTML = "Change Password";
    passCBox.appendChild(changePWOpB);

    let changePWCancB = document.createElement("button");
    changePWCancB.setAttribute("id", "cancelchangepasswordbutton");
    changePWCancB.setAttribute("type", "button");
    changePWCancB.innerHTML = "Cancel";
    changePWCancB.addEventListener('click', cancelChangePasswordClick, false);
    passCBox.appendChild(changePWCancB);

    myInner3.appendChild(passCBox);

    let changePWForm = document.createElement("form");
    changePWForm.setAttribute("id", "changepasswordform");
    changePWForm.setAttribute("action", "/changepassword");
    changePWForm.setAttribute("method", "post");
    changePWForm.setAttribute("onsubmit", "return changePasswordValidate()");
    changePWForm.addEventListener('submit', changePasswordValidate, false);

    let formContent = document.createElement("div");
    formContent.setAttribute("class", "formcontent");

    let textBox1 = document.createElement("div");
    textBox1.setAttribute("class", "textbox");

    let lable1 = document.createElement("lable");
    lable1.innerHTML = "Current Password";
    textBox1.appendChild(lable1);

    let breackpoint1 = document.createElement("br");
    textBox1.appendChild(breackpoint1);

    let input1 = document.createElement("input");
    input1.setAttribute("type", "password");
    input1.setAttribute("name", "cpwd");
    textBox1.appendChild(input1);
    formContent.appendChild(textBox1);

    let textBox2 = document.createElement("div");
    textBox2.setAttribute("class", "textbox");

    let lable2 = document.createElement("lable");
    lable2.innerHTML = "New Password ";
    textBox2.appendChild(lable2);

    let span1 = document.createElement("span");
    span1.setAttribute("type", "font-size: 75%;");
    span1.innerHTML = "(8 character minimum)";
    textBox2.appendChild(span1);

    let breackpoint2 = document.createElement("br");
    textBox2.appendChild(breackpoint2);

    let input2 = document.createElement("input");
    input2.setAttribute("type", "password");
    input2.setAttribute("name", "npwd");
    textBox2.appendChild(input2);

    let breackpoint3 = document.createElement("br");
    textBox2.appendChild(breackpoint3);

    let span2 = document.createElement("span");
    span2.setAttribute("class", "alert");
    span2.setAttribute("id", "npwdalert");
    span2.innerHTML = "Insufficient Complexity";
    textBox2.appendChild(span2);
    formContent.appendChild(textBox2);

    let textBox3 = document.createElement("div");
    textBox3.setAttribute("class", "textbox");

    let lable3 = document.createElement("lable");
    lable3.innerHTML = "Confirm Password ";
    textBox3.appendChild(lable3);

    let span3 = document.createElement("span");
    span3.setAttribute("style", "font-size: 75%;");
    span3.innerHTML = "(8 character minimum)";
    textBox3.appendChild(span3);

    let breackpoint4 = document.createElement("br");
    textBox3.appendChild(breackpoint4);

    let input3 = document.createElement("input");
    input3.setAttribute("type", "password");
    input3.setAttribute("name", "cnpwd");
    textBox3.appendChild(input3);

    let breackpoint5 = document.createElement("br");
    textBox3.appendChild(breackpoint5);

    let span4 = document.createElement("span");
    span4.setAttribute("id", "cnpwdalert");
    span4.setAttribute("class", "alert");
    span4.innerHTML = "Passwords do not match";
    textBox3.appendChild(span4);

    formContent.appendChild(textBox3);
    changePWForm.appendChild(formContent);
    myInner3.appendChild(changePWForm);
    myInfoBox.appendChild(myInner3);
    myMainDiv.appendChild(myInfoBox);
    body.appendChild(myMainDiv);


    var submitButton = document.querySelectorAll('input[type="submit"]')[1];
    function editClick() {
        bioText.style.display = "none";
        editB.style.display = "none";
        bioForm.style.display = "block";
        editArea.style.display = "block";
        cancelB.style.display = "inline";
        saveB.style.display = "inline";
    }
    
    function cancelClick() {
        editArea.style.display = "none";
        bioForm.style.display = "none";
        cancelB.style.display = "none";
        saveB.style.display = "none";
        bioText.style.display = "block";
        editB.style.display = "inline";
    }
    
    function changePasswordClick() {
        changePWOpB.style.display = "none";
        submitButton.style.display = "inline";
        changePWCancB.style.display="inline";
        changePWForm.style.display="block";
    }
    
    function cancelChangePasswordClick() {
        changePWForm.style.display = "none";
        changePWCancB.style.display = "none";
        submitButton.style.display = "none";
        changePWOpB.style.display = "inline";
    }
    
    function changePasswordValidate(e) {
        var valid = true;
        var npwd = document.querySelectorAll('input[type="password"]')[1].value;
        var cnpwd = document.querySelectorAll('input[type="password"]')[2].value;
        if (npwd.length < 8) {
        alert('Password must be at least 8 characters in length');
        span2.style.display = 'inline';
        valid = false;
        }
        else {
            span2.style.display = 'none';
        }
        if (npwd.length >= 8 && cnpwd != npwd) {
        alert('Passwords do not match');
        span4.style.display = 'inline';
        valid = false;
        }
        else {
            span4.style.display = 'none';
        }
    
        if (!valid) {
        e.preventDefault()
        } 
    }
    
}

let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200) {
        console.log("4, 200");
        let obj = JSON.parse(this.responseText);
        if(obj.biography == null) {obj.biography = "";}
        if(obj.isUser == 1) {
            generateMyProfile(obj.username, obj.firstname, obj.lastname, obj.creationDate, obj.birthday, obj.biography, obj.postCount);
        } else {
            generateProfile(obj.username, obj.firstname, obj.lastname, obj.creationDate, obj.birthday, obj.biography, obj.postCount);
        }
    } else {
        console.log(this.readyState + ", " + this.status);
    }
};


xhttp.open("GET", "/api/profilePage?user=" + ID, true);
xhttp.send();

//{"isUser": "0/1", "username": "usrname", "firstname": "frtname", "lastname": "lastname", "createionDate": "joindate", "birthday": "birthday", "biography": "bio", "postCount": "#"}
//(uname, fname, lname, joinD, bird, biostr, posts)