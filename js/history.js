
window.addEventListener("popstate", function(e) {
  window.history.go(0); // refreshes the page when the back button is pressed after clicking a project.
});

function pushHistory(){
  history.pushState({},null,null);
}

$.get("https://raw.githubusercontent.com/radrajith/Data-Structures-in-Java/master/hw%236_with_gui/Assignment%20Requirement/hw6(10).html", function(data){
  $("#frame1").contents().find('html').html(data);
});
