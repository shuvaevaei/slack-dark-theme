document.addEventListener('DOMContentLoaded', function() {
  $.ajax({
    url: 'https://raw.githubusercontent.com/baevra/slack-dark-theme/master/style.css',
    success: function(css) {
      $("<style></style>").appendTo('head').html(css);
    }
  });
 });
