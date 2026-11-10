$(document).ready(function() {
  $(".bouton-menu").click(function() {
    var target = $(this).data("target");
    var $targetMenu = $("#" + target);

    // animation d'apparition du menu
    $targetMenu.fadeToggle();
  });
});