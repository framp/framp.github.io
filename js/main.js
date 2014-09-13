/*! framp.me 14-09-2014 12:09:27 */
document.documentElement.className = "", function() {
    var a = new Image();
    a.onload = function() {
        (document.getElementById("avatar") || {}).className += " loaded";
    }, a.src = "http://gravatar.com/avatar/21fc27a2ac6cd9094a423997f0344a0b?s=280";
}();