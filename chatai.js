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

$('body').append("<div style='background:white;z-index:99999;width:400px;height:20px;position:fixed;right:-390px;top:0px;border:2px gray solid;font-size:12px' id='AIpopup'><div id='AIheader' style='width:20px;height:100%;float:left;background:gray;' onclick='toggle()'><></div><iframe id='AIcontainer' style='width:370px;overflow:auto;height:100%;float:left;background:white;'>container</iframe></div>");
    
    
if(window.location.hostname === "linkedin.com"){
var q = "List 10 key skills from this:";

  $('body').click(function(){
var value = q + $(".jobs-description").text();
console.log(value);


  });
}

if(window.location.hostname === "finviz.com"){
    var q = "What is driving the market based on these news:";
    var value = q + truncate($("#body-table-news").text(), 30,"AM") ; // split into sentences and select only 30
    console.log(value);
     $("#AIcontainer").attr("src","https://pmadhusudhan.github.io/interview/askai.html?AskAI="+value);
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

function truncate(str, no_lines, delimit) {
    return str.split(delimit).splice(0,no_lines).join(delimit);
}

 function askAI(question) {
        
       
        $("#AIcontainer").html("Loading...");
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbzM1DbNzmxKqygbeDTeo-6hAr8griyFjk1g1d-jpvkYZFc4RWxbmCrqnv6Z_RmzDQir/exec?AskAI="+question+"&Who=You are an expert",
            type: 'GET',
            complete: function(result) {
               console.log(result);
                $("#AIcontainer").html(result);
            },
            success: function(result) {
                alert(result);
                $("#AIcontainer").html(result);
            }
        });
    }
