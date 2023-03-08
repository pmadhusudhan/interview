var d =document.createElement("div");
d.innerHTML = "<textarea id='resume' cols='50' rows='5'></textarea><br><button id='compare'>Compare</button>"
d.setAttribute("style","position:fixed;top:0px;width:300px;height:100%;background:white;right:0px");
document.getElementsByTagName("body")[0].appendChild(d);

document.getElementById("compare").addEventListner("click",function(){
  
  document.getElementsByTagName("textarea")[0].value = "added new question";
  
});

