window.addEventListener("popstate", function(e){
  history.replaceState(null,null,null);
  window.go.history(0);
});



function historyChange(state){
  history.replaceState({"view":state},"",state);
}
