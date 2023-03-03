function defer(method) {
    if (window.jQuery) {
        method();
    } else {
        setTimeout(function() { defer(method) }, 50);
    }
}
var iframe, innerDoc;
 var iframe = document.getElementsByTagName("iframe")['chatgpt-everywhere-iframe-7cbe6781-4d56-4425-8985-23b903e3d74c'];
    var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
    var sc = innerDoc.createElement("script");
    sc.innerHTML = "function replaceq(question){";
    sc.innerHTML += "iframe = document.getElementsByTagName('iframe')['chatgpt-everywhere-iframe-7cbe6781-4d56-4425-8985-23b903e3d74c']";
    sc.innerHTML += "innerDoc = iframe.contentDocument || iframe.contentWindow.document";
    sc.innerHTML += "t = innerDoc.body.getElementsByTagName('textarea')[0].value";
    sc.innerHTML += "t = question + ':'+ t.substring(t.indexOf(':')+1)";
    sc.innerHTML += "innerDoc.body.getElementsByTagName('textarea')[0].value =t;}";
    innerDoc.body.appendChild(sc);

defer(function () {
 //console.log(window.location.hostname); 
 
    
    
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
        //console.log(t)

        var q = "Give links to other youtube videos related to this and Summarize in max 100 words:";
        $('body').click(function(){
        var value = q + $("#below").text();
        //console.log(value);
        var iframe = document.getElementsByTagName("iframe")['chatgpt-everywhere-iframe-7cbe6781-4d56-4425-8985-23b903e3d74c'];
        iframe.setAttribute("style","width:300px;height:90%");


        var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
          
        var a = innerDoc.createElement("button");
            a.setAttribute("onclick","replaceq('Give me questions based on this')");
            a.innerHTML = "Give me questions based on this";
            a.setAttribute("style","border:none;color:blue;padding:2px");
            innerDoc.body.appendChild(a);
       
        innerDoc.body.getElementsByTagName("textarea")[0].value = value;
        innerDoc.body.getElementsByTagName("button")[1].click();
        });
}
  console.log("askai.js loaded");
});

