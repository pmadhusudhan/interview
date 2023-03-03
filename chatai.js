function defer(method) {
    if (window.jQuery) {
        method();
    } else {
        setTimeout(function() { defer(method) }, 50);
    }
}
function toggle(){
    AIpopupstate = parseInt($('#AIpopup').css('right'));
    
    if(AIpopupstate === 0){
        $('#AIpopup').css('right','-380px');
          $('#AIpopup').css('height','20px');
    }else{
        $('#AIpopup').css('right','0px');
          $('#AIpopup').css('height','100%');
    }
    
}

defer(function () {
 //console.log(window.location.hostname); 

$('body').append("<div style='background:white;z-index:99999;width:400px;height:20px;position:fixed;right:-390px;top:0px;border:2px gray solid;font-size:12px' id='AIpopup'><div id='AIheader' style='width:20px;height:100%;float:left;background:gray;' onclick='toggle()'><></div><div id='AIcontainer' style='width:370px;overflow:auto;height:100%;float:left;background:white;'>container</div></div>");
    
    
if(window.location.hostname === "linkedin.com"){
var q = "List 10 key skills from this:";

  $('body').click(function(){
var value = q + $(".jobs-description").text();
console.log(value);


  });
}

if(window.location.hostname === "finviz.com"){
    var q = "What is driving the market based on these news:";
   // $('body').click(function(){
    
    var value = q + truncate($("#body-table-news").text(), 20) ;
    $("#AIcontainer").html(value);
    
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

function truncate(str, no_lines) {
    return str.split("AM ").splice(0,no_lines).join("AM ");
}

