

if(window.location.href.indexOf("google.com") >= 0){
var a = document.getElementsByTagName("h3");//document.getElementsByClassName("MjjYud")[0].innerText;
var content ="";
for(i=0;i<a.length;i++){ content += a[i].innerText;};
//console.log(content);
  
}
if(window.location.href.indexOf("indeed.com") >= 0){
  var content = document.getELementsByClassName("jobsearch-RightPane")[0].innerText;
  
}

var ifr = document.createElement("iframe");
ifr.setAttribute("style","position:fixed;bottom:0px;z-index:999999;right:0px;width:400px;height:50%;overflow:auto;background:white");
ifr.src="https://pmadhusudhan.github.io/interview/askai.html?AskAI=summarize this:"+content;
document.getElementsByTagName("body")[0].appendChild(ifr);
