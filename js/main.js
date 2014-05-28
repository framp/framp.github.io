/*! framp.me 29-05-2014 12:05:47 */
document.documentElement.className = "", function() {
    var a = new Image();
    a.onload = function() {
        (document.getElementById("avatar") || {}).className += " loaded";
    }, a.src = "http://gravatar.com/avatar/21fc27a2ac6cd9094a423997f0344a0b?s=320";
}();