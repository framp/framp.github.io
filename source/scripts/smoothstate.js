require('smoothstate');

var $body = jQuery('html, body');
var content  = jQuery('#main').smoothState({
  onStart : {
    duration: 250,
    render: function () {
      content.toggleAnimationClass('is-exiting');
      $body.animate({ 'scrollTop': 0 });
    }
  }
}).data('smoothState'); 
