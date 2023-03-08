var d =document.createElement("div");
d.innerHTML = "<textarea id='resume' cols='50' rows='5' placeholder='Paste your resume text here'></textarea><br><button id='compare'>Compare</button>"
d.setAttribute("style","position:fixed;top:0px;width:300px;height:100%;background:white;right:0px");
document.getElementsByTagName("body")[0].appendChild(d);

const button = document.querySelector('#compare');

function handleClick() {
  
  question = "List keywords and skills from this resume :";
  document.getElementsByTagName("textarea")[0].value = question + document.getElementById("resume").value ;

  document.getElementsByTagName("button")[5].click()
}

button.addEventListener('click', handleClick);

