$(document).ready(function() {

  $('#contact-form').submit(function(e) {
    e.preventDefault();
    var r = $(this);
    var i = $(this).find('input[name=email]');
    var s = $(this).attr('action');
    var o = $(this).find('.note');
    var h = i.val();
    var p = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var $form = $(this);
    if (p.test(h)) {
      $('.message').removeClass('error bad-email success-full');
      $('.message')
        .hide()
        .html('')
        .fadeIn();
      $('#contact-form').addClass('loading');
      o.show();
      $.post(s, $form.serialize()).then(function(e) {
        o.hide();
        $('#contact-form').removeClass('loading');
        $('.message')
          .removeClass('bad-email')
          .addClass('success-full');
        $('.block-message')
          .addClass('show-block-valid')
          .removeClass('show-block-error');
        $('.message')
          .html(
            '<p class="notify-valid">Thank you! We\'ve signed you up!</p>'
          )
          .fadeIn();
      });
    } else {
      $('#contact-form').removeClass('loading');
      $('.message')
        .addClass('bad-email')
        .removeClass('success-full');
      $('.block-message')
        .addClass('show-block-error')
        .removeClass('show-block-valid');
      $('.message')
        .html(
          '<p class="notify-valid">Your e-mail address looks incorrect. Please try again!</p>'
        )
        .fadeIn();
      o.hide();
    }
  });

});
