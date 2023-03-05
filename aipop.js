
//$("body").append("<script src='https://pmadhusudhan.github.io/interview/aipop.js'></script>");
$("body").append("<button style='position:absolute;bottom:0px;right:0px' id='askai' value='askai'>AskAI</button>");

$("#askai").click(function(){



$("body").append("<div id='sidebar' style='position:fixed;top:0px;right:0px;width:300px;height:100%;background:#888;padding:5px;'></div>");
$("html").css("width","calc(100% - 300px)");

$("#sidebar").append("<div id='container' style='background:#ddd; height: calc(100% - 70px);overflow:auto;padding: 10px;border:2px inset gray;border-radius:10px;margin:5px'><div style='background:#f6f6f4;border:1px solid gray;width:auto;border-radius:10px;padding:4px;bottom:0px'>Hello you can talk to me</div></div>");
$("#sidebar").append("<input id='questionbox' style='height:50px;width:280px;background:white;position:fixed;bottom:10px;border-radius:10px;padding:4px;' placeholder='Ask me' />");

$('#questionbox').keypress(function(event) {
  if (event.which === 13) {
  
   $("#container").append("<div style='margin:5px;background:#c5e1cc;border:1px solid gray;width:auto;border-radius:10px;padding:4px;text-align:right;'>"+$(this).val()+"</div><br>");
   $('#container').scrollTop($('#container')[0].scrollHeight);
   $.get("https://script.google.com/macros/s/AKfycbyLcl9xo9REfOVjHjS6i0Qyp0n3UtY0KRtIL_pnudTpyFT7P2UvF_G1IVgLHl6YrIF22Q/exec?Q="+$(this).val()+"&W=you are an assistant",function(data){
   
   $("#container").append("<div style='background:#f6f6f4;border:1px solid gray;width:auto;border-radius:10px;padding:4px;bottom:0px'>"+data+"</div>");
   
   });
   
   $(this).val('');
  }
});

}) // end of askai button click function
