window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementsByClassName("navbar")[0];
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-top navbar " + "w3-navbar" + " navbarMoving w3-card-2" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" navbarMoving w3-card-2 w3-animate-top w3-white", "");
    }
}
