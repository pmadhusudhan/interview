var d =document.createElement("div");
d.innerHTML = "<textarea id='resume' cols='30' rows='5' placeholder='Paste your resume text here'></textarea><br><textarea id='jd' cols='30' rows='5' placeholder='Paste a job description here'></textarea><br><input id='question' style='width:100%' value='Compare resume with Job description and list keywords and skills matching and missing'/><br><button id='compare' style='border:solid 1px black;padding:5px;background:#fbe69e;border-radius:10px'>Compare</button>"
d.setAttribute("style","position:fixed;top:0px;width:400px;padding:10px;height:100%;background:#333;right:0px");
document.getElementsByTagName("body")[0].appendChild(d);

const button = document.querySelector('#compare');

function handleClick() {
  
  question = document.getElementById("question").value;
  document.getElementsByTagName("textarea")[0].value = question + "; Resume :"+ document.getElementById("resume").value + "; Job description :"+ document.getElementById("jd").value ;

  document.getElementsByTagName("button")[5].click()
}

button.addEventListener('click', handleClick);

