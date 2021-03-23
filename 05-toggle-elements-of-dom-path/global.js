window.addEventListener("load", function(){
    var button = document.getElementById("toggle_button");
    button.addEventListener("click", function() {
      var els = document.querySelectorAll("ul.second_five li");
      for (var i = 0; i < els.length; i++) {
        if (els[i].style.display === "list-item") {
          els[i].style.display = "none";
        }
        else {
          els[i].style.display = "list-item";
        }
      }
  
    });
  
  });