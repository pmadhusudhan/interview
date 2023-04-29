/*
This is for injecting onto anypage as a chat window. ask questions, and you will get answers


*/

//https://askai-node-ndmd3ghqma-ue.a.run.app

//$("body").append("<div id='sidebar' style='position:fixed;top:0px;right:0px;width:300px;height:100%;background:#888;padding:5px;z-index:99999999'><iframe src='https://chat.openai.com/chat'></iframe></div>");
//$("html").css("width","calc(100% - 300px)");



$("body").append("<button style='cursor:pointer;background:orange;padding:5px;border-radius:5px;position:fixed;bottom:0px;right:0px' id='askai' value='askai'>AskAI</button>");


$("#askai").click(function(){



$("body").append("<div id='sidebar' style='position:fixed;top:0px;right:0px;width:300px;height:100%;background:#888;padding:5px;z-index:99999999'></div>");
$("html").css("width","calc(100% - 300px)");

$("#sidebar").append("<div id='container' style='background:#ddd; height: calc(100% - 120px);overflow:auto;padding: 10px;border:2px inset gray;border-radius:10px;margin:5px'><div style='background:#f6f6f4;border:1px solid gray;width:auto;border-radius:10px;padding:4px;bottom:0px'>Hello you can talk to me</div></div>");
$("#sidebar").append("<input id='questionbox' style='height:50px;width:280px;background:white;position:fixed;bottom:10px;border-radius:10px;padding:4px;' placeholder='Ask me' />");


$("#container").append("<img id='waiting' src='https://cdn.dribbble.com/users/2973561/screenshots/5757826/media/221d6bfc1960ab98a7585fcc2a4d0181.gif' style='width:50px;display:none;position:fixed;z-index:9999999;bottom:100px;' />");
$('#questionbox').keypress(function(event) {
  if (event.which === 13) {
  
   $("#container").append("<div style='margin:5px;background:#c5e1cc;border:1px solid gray;width:auto;border-radius:10px;padding:4px;text-align:right;'>"+$(this).val()+"</div><br>");
   $('#container').scrollTop($('#container')[0].scrollHeight);
   var context = ($(".MjjYud").text());
   context = context.substring(0,1500);
   //alert(context);
   $("#waiting").show();
   $.get("https://askai-node-ndmd3ghqma-ue.a.run.app/?q="+$(this).val(),function(data){
  $("#waiting").hide();
   $("#container").append("<div style='background:#f6f6f4;border:1px solid gray;width:auto;border-radius:10px;padding:4px;bottom:0px'>"+data+"</div>");
   
   });
   
   $(this).val('');
  }
});

}) // end of askai button click function


 