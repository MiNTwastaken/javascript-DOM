window.addEventListener("load", function(){

    var first = document.getElementById('first');
    var second = document.getElementById('second');
    var last = document.getElementById('third');
  
    first.addEventListener("keyup", function() {
      numbers = first.value.length;
      maxlength = parseInt(first.getAttribute("maxlength"));
      if (numbers === maxlength) {
        second.focus();
      }
    });
  
    second.addEventListener("keyup", function() {
        numbers = second.value.length;
      maxlength = parseInt(second.getAttribute("maxlength"));
      if (numbers === maxlength) {
        last.focus();
      }
    });
  
  });