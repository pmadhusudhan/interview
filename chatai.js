function defer(method) {
    if (window.jQuery) {
        method();
    } else {
        setTimeout(function() { defer(method) }, 50);
    }
}


defer(function () {
 //console.log(window.location.hostname); 

$('body').append("<div style='background:white;z-index:99999;width:400px;height:100%;position:fixed;right:0px;top:0px;border:2px orange solid' id='aipopup'>hello</div>");
    
    
if(window.location.hostname === "linkedin.com"){
var q = "List 10 key skills from this:";

  $('body').click(function(){
var value = q + $(".jobs-description").text();
console.log(value);
var iframe = document.getElementsByTagName("iframe")['chatgpt-everywhere-iframe-7cbe6781-4d56-4425-8985-23b903e3d74c'];
var innerDoc = iframe.contentDocument || iframe.contentWindow.document;

innerDoc.body.getElementsByTagName("textarea")[0].value = value;
      

  });
}

if(window.location.hostname === "finviz.com"){
    var q = "What is driving the market based on these news:";
   // $('body').click(function(){
    var value = q + $("table").text();
    console.log(value);
    var iframe = document.getElementsByTagName("iframe")['chatgpt-everywhere-iframe-7cbe6781-4d56-4425-8985-23b903e3d74c'];
    var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
     
          
        var a = innerDoc.createElement("button");
            a.setAttribute("onclick","replaceq('Give me questions based on this')");
            a.innerHTML = "Give me questions based on this";
            a.setAttribute("style","border:none;color:blue;padding:2px");
            innerDoc.body.appendChild(a);
    innerDoc.body.getElementsByTagName("textarea")[0].value = value;
   // });
}
if(window.location.hostname === "www.youtube.com"){
    var t= $("#below").text();
        console.log(t)

        var q = "Give links to other youtube videos related to this and Summarize in max 100 words:";
        $('body').click(function(){
        });
}
  console.log("askai.js loaded");
});

