var content = $("h3").text();//document.getElementsByClassName("MjjYud")[0].innerText;

console.log(content);
var ifr = document.createElement("iframe");
ifr.setAttribute("style","position:fixed;bottom:0px;z-index:999999;right:0px;width:400px;height:50%;overflow:auto;background:white");
ifr.src="https://pmadhusudhan.github.io/interview/askai.html?AskAI=summarize this:"+content;
document.getElementsByTagName("body")[0].appendChild(ifr);
