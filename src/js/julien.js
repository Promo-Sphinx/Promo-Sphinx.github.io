
function on() {
    document.getElementById("julien").style.display = "block";
  }
  
  function off() {
    document.getElementById("julien").style.display = "none";
  }



  
  $("button").click(function(){
    $("p").off("click");
  });