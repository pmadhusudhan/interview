
  var scriptkey = "AKfycbwPfgbUDEaZF_aGu6QNT3Nmzvx9SK290QUWRGC66PLSM3xVCOKsRqEjldWPvvGwiF2aIA";
  var res_questions = [["Summary","Write a summary for my resume: <<resume>>"],
                      ["Keywords","List keywords from my resume in format <label class='kws'>keyword1</label> <label class='kws'>keyword2</label>"],
                      ["Skills","List all the linkedin skills based for my resume "],
                      ["Job Titles","List suitable job titles for my resume"]
                      ];
  var jd_questions = [["Keywords","List 10 important keywords for <<job>> in format <label class='kws'>keyword1</label> <label class='kws'>keyword2</label>"],
                      ["Activities and Responsibilities","What are key activities and responsibilities for this job: <<job>>"],
                      ["Salary","How much salary can I expect for this job: <<job>>"],
                      ["Interview Questions","List 10 interview questions based on this job: <<job>> "],
                      ["Sample Resume","Update my <<resume>> for inspiration based on this job :<<job>>"],
                      ["What to learn","What is not in my resume <<resume>> / experience based on this job :<<job>>"],
                      ["Career path","What would be career path for this job: <<job>>"], 
                      ["Training and Certifications","Which training and Certifications would help for this job: <<job>>"]
                  ]; 
     
   $("#submit").click(function(){
      
      $("#summary").html("AI is working <img height='50px' src='https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif' />");
      prompt = "Give short summary with list of key skills from this" + $("#description").text();
      askai_generic(prompt, $("#summary"));
     
     
      $("#extras").slideDown();
    });
    $("#savebtn").click(function(){save();})
   var loc = location.href;
   
 if(loc.indexOf("jd=")>0){
       var jd_loaded = loc.substring(loc.indexOf("jd=")+3);
       jd_loaded = decodeURIComponent(jd_loaded);
       $("#description").html(jd_loaded);  
       $("#submit").click();
   }
  function addQuestions(){
   for(i=0; i < jd_questions.length;i++){
     
    $("#extras").append('<b><li class="question" q="'+jd_questions[i][1]+'">'+ jd_questions[i][0] + '</li></b><div class="answer"></div>');   
     
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
    addQuestions();
    $(".question:eq(0)").click();
    $(".question:eq(1)").click();
    $(".question:eq(2)").click();

  function askai_generic(prompt,container){
          
          
          url ="https://script.google.com/macros/s/"+scriptkey+"/exec"
          $.post( url, { Q: prompt, W: "you are an expert" })
              .done(function( data ) {
                  console.log(data);
              $(container).html((data.substring(1,data.length -1)).replaceAll('\\n','<br>'));

              })
        .fail(function( error ) {
          console.error( "Error saving data: " + error );
        });
      }
var token = $("#token").val("Enter your token");
function OpenaiFetchAPI(prompt,container) {
    //console.log("Calling GPT3")
    var url = "https://api.openai.com/v1/engines/davinci/completions";
    
    var bearer = 'Bearer ' + token
    fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "prompt": prompt,
            "max_tokens": 5,
            "temperature": 1,
            "top_p": 1,
            "n": 1,
            "stream": false,
            "logprobs": null,
            "stop": "\n"
        })


    }).then(response => {
        
        return response.json()
       
    }).then(data=>{
        console.log(data)
        console.log(typeof data)
        console.log(Object.keys(data))
        $(container).html(data['choices'][0].text)
        
    })
        .catch(error => {
            console.log('Something bad happened ' + error)
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
