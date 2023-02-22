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
    $('body').click(function(){
    var value = q + $("table").text();
    console.log(value);
    var iframe = document.getElementsByTagName("iframe")['chatgpt-everywhere-iframe-7cbe6781-4d56-4425-8985-23b903e3d74c'];
    var innerDoc = iframe.contentDocument || iframe.contentWindow.document;

    innerDoc.body.getElementsByTagName("textarea")[0].value = value;
    });
}

