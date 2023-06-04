$('[title][id]').click(function (e) {
  e.preventDefault();
  e.stopPropagation();
  window.location.hash = '#' + $(this).attr('id');
});
$(':not([title])').click(function (e) {
  e.preventDefault();
  e.stopPropagation();
  window.location.hash = '';
});