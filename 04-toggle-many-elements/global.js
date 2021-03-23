window.addEventListener("load", function(){
    document.getElementById("button").addEventListener("click",function(){
        var els = document.getElementsByClassName("toggle_me");
        for(var i=0; i < els.length; i++){
            if(els[i].style.display === "none"){
                els[i].style.display = "block"
            }
            else{
                els[i].style.display = "none"
            }
        
        }
    });
});