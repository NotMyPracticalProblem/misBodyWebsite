$(document).ready(function () {

  function createNav() {
    var navTitles = ['home', 'about', 'articles', 'signup', 'stdgvt'];
    for (var i = 0; i < navTitles.length; i++) {
      $("#navLinks").append("<li><a href='" + navTitles[i] + "'.html'>" + navTitles[i] + "</a></li>");
    }
  }
  createNav();


});
