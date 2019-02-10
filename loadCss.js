document.addEventListener('DOMContentLoaded', function() {
  $.ajax({
    url: 'https://raw.githubusercontent.com/shuvaevaei/slack-dark-theme/master/style.css',
    success: function(css) {
      $("<style></style>").appendTo('head').html(css);
    }
  });
 });
