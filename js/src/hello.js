(function(){
  var preload = new Image();
  preload.onload = function() {
    (document.getElementById('avatar') || {}).className += ' loaded';
  }
  preload.src = 'http://gravatar.com/avatar/21fc27a2ac6cd9094a423997f0344a0b?s=280'; 
})();