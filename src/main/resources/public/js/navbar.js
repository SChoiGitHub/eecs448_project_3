let nav = document.getElementsByTagName("nav")[0];
function createNavButton() {
    let homeB = document.createElement("a");
    homeB.setAttribute("href", "/home");
    homeB.innerHTML = "Home";
    nav.appendChild(homeB);

    let myaccB = document.createElement("a");
    myaccB.setAttribute("href", "/manageaccount");
    myaccB.innerHTML = "My Account";
    nav.appendChild(myaccB);

    let logOutB = document.createElement("a");
    logOutB.setAttribute("href", "/logout");
    logOutB.innerHTML = "Log Out";
    nav.appendChild(logOutB);
}

function createAdminB() {
        let adminButton = document.createElement("a");
        let adminText = document.createTextNode("Admin Mode");
        adminButton.appendChild(adminText);

        adminButton.classname = 'adminButton';
        adminButton.setAttribute('href', '/admin');
        adminButton.setAttribute('class', 'other');

        nav.appendChild(adminButton);
}

let xhttpNAV = new XMLHttpRequest();

xhttpNAV.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        if(this.responseText == 1){
            createAdminB();
        }
    } else {
        console.log(this.readyState + ", " + this.status);
    }
};

xhttpNAV.open("GET", "/api/isAdmin", true);
xhttpNAV.send();



createNavButton();
