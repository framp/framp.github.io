document.documentElement.className = '';
(function() {
  var avatar = document.getElementById("avatar");
  if (!avatar) return;
  var img = new Image();
  img.onload = function() {
    avatar.className += " loaded";
  };
  img.src = avatar.src;
})();