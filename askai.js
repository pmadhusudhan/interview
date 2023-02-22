var j = document.createElement('script');
j.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js";
document.getElementsByTagName("body")[0].appendChild(j);
var q = "List 10 key skills from this:";
$('document').ready(function(){
  $('body').click(function(){
var value = q + $(".jobs-description").text();
console.log(value);
var iframe = document.getElementsByTagName("iframe")['chatgpt-everywhere-iframe-7cbe6781-4d56-4425-8985-23b903e3d74c'];
var innerDoc = iframe.contentDocument || iframe.contentWindow.document;

innerDoc.body.getElementsByTagName("textarea")[0].value = value;
  });
});
