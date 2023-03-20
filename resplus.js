
  var scriptkey = "AKfycbyq5J88fRiXqw6c_ZFJRFObZYz9tBHYyRasYMiJ7dEx_ZYSRsrfHjV6966FW9f9cpzizA";
  var res_questions = [["Summary","A short summary of your profile", "Write a summary for my resume: <<resume>>"],
                      ["Keywords","ATS Keywords scanned from your profile","List keywords from my resume in format <label class='kws'>keyword1</label> <label class='kws'>keyword2</label>"],
                      ["Skills","List of skills from your profile","List all the linkedin skills based for my resume "],
                      ["Job Titles","Job titles recommended based on your profile","List suitable job titles for my resume"]
                      ];
  var jd_questions = [["Keywords","List of ATS Keywords from the job description","List 10 important keywords for <<job>> in format <label class='kws'>keyword1</label> <label class='kws'>keyword2</label>"],
                      ["Activities and Responsibilities","List of activities and responsibilities from the job description","What are key activities and responsibilities for this job: <<job>>"],
                      ["Salary","List of skills from your profile","How much salary can I expect for this job: <<job>>"],
                      ["Interview Questions","List of intervirew questions you can expect","List 10 interview questions based on this job: <<job>> "],
                      ["Sample Resume","Recommendations to rewrite resume to suit this job","Update my <<resume>> for inspiration based on this job :<<job>>"],
                      ["What to learn","Based on the job, recommended training and certifications","What is not in my resume <<resume>> / experience based on this job :<<job>>"],
                      ["Career path","What is the path for growth of this role","What would be career path for this job: <<job>>"]
                  ]; 
     
   $("#submit").click(function(){
      
      $("#summary").html("AI is working <img height='50px' src='https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif' />");
      prompt = "Give short summary with list of key skills from this" + $("#description").text();
      askai_generic(prompt, $("#summary"));
     
     
      $("#description").css("height","auto");
    });
    $("#savebtn").click(function(){save();})
   var loc = location.href;
   
 if(loc.indexOf("jd=")>0){
       var jd_loaded = loc.substring(loc.indexOf("jd=")+3);
       jd_loaded = decodeURIComponent(jd_loaded);
       $("#description").html(jd_loaded);  
       $("#submit").click();
   }
  function addQuestions(arraychoice,container){
   for(i=0; i < arraychoice.length;i++){
     
    $(container).append('<b><li class="question" q="'+jd_questions[i][2]+'">'+ jd_questions[i][0] + '</li></b><div class="answer">'+jd_questions[i][1]+'</div>');   
     
   }
    $(".question").click(function(){
      jd = $("#description").html();
      res = $("#resume").html();
      $(this).parent().next().html("<img height='50px' src='https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif' />");
      prompt = $(this).attr("q");
      prompt = prompt.replaceAll("<<resume>>",res);
      prompt = prompt.replaceAll("<<job>>",jd);
      //alert(prompt);
      askai_generic(prompt, $(this).parent().next());
      
    });
    
  }
    addQuestions(jd_questions,$("#jdextras"));
    addQuestions(res_questions,$("#resextras"));
if($("#description").text() !== ""){
    $(".question:eq(0)").click();
    $(".question:eq(1)").click();
    $(".question:eq(2)").click();
}
  function askai_generic(prompt,container){
          
          
          url ="https://artatfalls.pythonanywhere.com/askai";
	  $("#q").val(prompt);
	 /*
         $.get( url, { q: prompt })
              .done(function( data ) {
                  console.log(data);
             

              })
        .fail(function( error ) {
          console.error( "Error saving data: " + error );
        });
	  */
	 $.ajax({
			url: url,
			data: $('form').serialize(),
			type: 'POST',
			success: function(data){
				 $(container).html((data.substring(1,data.length -1)).replaceAll('\\n','<br>'));
			},
			error: function(error){
				console.log(error);
			}
		});
	
	
      }

  function askai_generic_aws(prompt,container){
    var urlp = "http://18.188.3.153:5000/api";
    prompt = prompt.substring(0,3000);
  // jQuery equivalent of the HTML form
// create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// set the HTTP method and URL
xhr.open('POST', urlp, true);

// set the request headers
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

// create a data object with the query parameter
var data = 'q=' + encodeURIComponent(prompt);

// send the request with the data
xhr.send(data);

// set up a callback for when the response is received
xhr.onload = function() {
  if (xhr.status === 200) {
    response = JSON.parse(xhr.responseText);
    $(container).html(response.message);
  } else {
    console.error('Request failed.  Returned status of ' + xhr.status);
  }
};
		/*
		url ="/gpt?q="+ encodeURIComponent(prompt);
		//$(container).html(url);
        $.get( url)
            .done(function( data ) {
				 //console.log(data);
				 
				 $(container).html(data.message);
				 //$("#jd_section").slideUp();
            //$(container).html((data.substring(1,data.length -1)).replaceAll('\\n','<br>'));

            })
      .fail(function( error ) {
        console.error( "Error saving data: " + error );
      });
      */
    }
    if(localStorage.getItem("resume") !== undefined){
    $("#resume").html(localStorage.getItem("resume"));
    

	}
	if($("#resume").text() === ""){
	   $(".sidebar").show();
   }
	function save(){
		resume = $("#resume").html();
		localStorage.setItem("resume",JSON.stringify(resume));
	}
