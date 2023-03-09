// this is the code which will be injected into a given page...

(function() {

$("body").append("<button style='cursor:pointer;background:orange;padding:5px;border-radius:5px;position:fixed;bottom:0px;right:0px' id='askai' value='askai'>AskAI</button>");


$("#askai").click(function(){



$("body").append("<div id='sidebar' style='position:fixed;top:0px;right:0px;width:300px;height:100%;background:#888;padding:5px;'></div>");

$("html").css("width","calc(100% - 300px)");

$("#sidebar").append("<div id='container' style='background:#ddd; height: calc(100% - 120px);overflow:auto;padding: 10px;border:2px inset gray;border-radius:10px;margin:5px'><div style='background:#f6f6f4;border:1px solid gray;width:auto;border-radius:10px;padding:4px;bottom:0px'>Hello, I have the context of the job you are searching, you can ask me questions related to it.</div></div>");

$("#sidebar").append("<input id='questionbox' style='height:50px;width:280px;background:white;position:fixed;bottom:10px;border-radius:10px;padding:4px;' placeholder='Ask me' />");


$("#container").append("<img id='waiting' src='https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif' style='height:50px;width:250px;display:none;position:fixed;z-index:9999999;bottom:100px;' />");

$("#container").append("<div id='suggestions' style='background:white;border:1px solid gray;padding:4px;display:none;width:265px;height:250px;display:none;position:fixed;z-index:9999999;bottom:100px;'>Suggestions:<br><a class='preQs' style='border:none;cursor:pointer;color:gray'>List key skills </a><br><a class='preQs' style='border:none;cursor:pointer;color:gray'>Summarize in 10 bullets </a></div>");

$(".preQs").click(function(){ 
var val = $(this).text();
$("#suggestions").hide();
 $("#container").append("<div style='margin:5px;background:#c5e1cc;border:1px solid gray;width:auto;border-radius:10px;padding:4px;text-align:right;'>"+val+"</div><br>");
   $('#container').scrollTop($('#container')[0].scrollHeight);
   var context = ($("#jobDescriptionText").text());
   context = context.substring(0,1500);
   
   $("#waiting").show();
   scriptkey = "AKfycbxxf6p_NVeu86wPNRHNhg1txU2Ej9g7rEt2eEtp5hXpKDNF9yH8Pc5itGZvtYsGvsk1JQ";
   url ="https://script.google.com/macros/s/"+scriptkey+"/exec"
   $.post( url, { Q: val +"for this job, write formatted text :"+context, W: "" })
  .done(function( data ) {
     $("#waiting").hide();
   
   $("#container").append('<textarea style="background: rgb(246, 246, 244);border: 1px solid gray;width: 250px;height: min-content;border-radius: 10px;padding: 4px;bottom: 0px;overflow: overlay;" cols="20" class="" rows="20">'+data+'</textarea>');
   
  })
  .fail(function( error ) {
    console.error( "Error saving data: " + error );
  });
 
})

$('#questionbox').click(function(event) {
$("#suggestions").show();
});
$('#questionbox').keypress(function(event) {
  if (event.which === 13) {
   $("#suggestions").show();
   var qq = $(this).val();
   $("#container").append("<div style='margin:5px;background:#c5e1cc;border:1px solid gray;width:auto;border-radius:10px;padding:4px;text-align:right;'>"+$(this).val()+"</div><br>");
   $('#container').scrollTop($('#container')[0].scrollHeight);
   var context = ($("#jobDescriptionText").text());
   context = context.substring(0,1500);
   $("#suggestions").hide();
   $("#waiting").show();
   scriptkey = "AKfycbxxf6p_NVeu86wPNRHNhg1txU2Ej9g7rEt2eEtp5hXpKDNF9yH8Pc5itGZvtYsGvsk1JQ";
   url ="https://script.google.com/macros/s/"+scriptkey+"/exec"
   $.post( url, { Q: qq +"for this job, write formatted text :"+context, W: "" })
  .done(function( data ) {
     $("#waiting").hide();
   $("#container").append('<textarea style="background: rgb(246, 246, 244);border: 1px solid gray;width: 250px;height: min-content;border-radius: 10px;padding: 4px;bottom: 0px;overflow: overlay;" cols="20" class="" rows="20">'+data+'</textarea>');
   
  })
  .fail(function( error ) {
    console.error( "Error saving data: " + error );
  });
 
   $(this).val('');
  }
});

}) // end of askai button click function


})();
