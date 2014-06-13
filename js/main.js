/*! framp.me 13-06-2014 03:06:00 */
document.documentElement.className = "", function() {
    var a = new Image();
    a.onload = function() {
        (document.getElementById("avatar") || {}).className += " loaded";
    }, a.src = "http://gravatar.com/avatar/21fc27a2ac6cd9094a423997f0344a0b?s=280";
}();