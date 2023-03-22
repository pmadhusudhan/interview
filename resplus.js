
  var scriptkey = "AKfycbyq5J88fRiXqw6c_ZFJRFObZYz9tBHYyRasYMiJ7dEx_ZYSRsrfHjV6966FW9f9cpzizA";
  var res_questions = [["Summary","A short summary of your profile", "Write a summary for my resume: <<resume>>"],
                      ["Keywords","ATS Keywords scanned from your profile","List keywords from my resume in format <label class='kws'>keyword1</label> <label class='kws'>keyword2</label> resume: <<resume>>"],
                      ["Skills","List of skills from your profile","List all the linkedin skills based for my resume: <<resume>> "],
                      ["Job Titles","Job titles recommended based on your profile","List suitable job titles for my resume: <<resume>>"]
                      ];
  var jd_questions = [["Matching report","Matching score and explanation for this job","Give a matching score of the job based on my resume and explain in HTML format. Job:<<job>> Resume: <<resume>>"],
                      ["Recommendations","Recomended changes to your profile","List 10 changes,in HTML <li> format, to my resume.Given resume =<<resume>> and job=<<job>>"],
                      ["Keywords","List of ATS Keywords from the job description","List 10 important keywords for <<job>> in format <label class='kws'>keyword1</label> <label class='kws'>keyword2</label>"],
                      ["Activities and Responsibilities","List of activities and responsibilities from the job description","What are key activities and responsibilities for this job: <<job>>"],
                      ["Salary","List of skills from your profile","How much salary can I expect for this job: <<job>>"],
                      ["Interview Questions","List of intervirew questions you can expect","List 10 interview questions based on this job: <<job>> "],
                      ["Sample Resume","Recommendations to rewrite resume to suit this job","Update my <<resume>> for inspiration based on this job :<<job>>"],
                      ["What to learn","Based on the job, recommended training and certifications","What is not in my resume <<resume>> / experience based on this job :<<job>>"],
                      ["Career path","What is the path for growth of this role","What would be career path for this job: <<job>>"]
                  ]; 
     
   $("#submit").click(function(){
    res = $("#description").text();
    $("#summary").html("Summarizing <img height='50px' src='https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif' />");
    summarize(res,"#summary",5);
    /*
      
      res = $("#resume").text();
      prompt = "Give a matching score of the job based on my resume and explain in HTML format. Job:<<" + $("#description").text() +">> Resume: <<"+res+">>";
      askai_generic(prompt, $("#summary"));
     
     
      $("#description").css("height","auto");
      */
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
	//console.log(arraychoice);	  
   for(i=0; i < arraychoice.length;i++){
     
    $(container).append('<b><li class="question" q="'+arraychoice[i][2]+'">'+ arraychoice[i][0] + '</li></b><div class="answer">'+arraychoice[i][1]+'</div>');   
     
   }
    $(".question").click(function(){
      jd = $("#summary").text();
      res = $("#resume").text();
      $(this).parent().next().html("<img height='50px' src='https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif' />");
      prompt = $(this).attr("q");
      prompt = prompt.replaceAll("<<resume>>",res);
      prompt = prompt.replaceAll("<<job>>",jd);
      //alert(prompt);
      askai_generic(prompt, $(this).parent().next());
      
    });
    
  }
    addQuestions(jd_questions,"#jdextras");
    addQuestions(res_questions,"#resextras");
    
    if($("#description").text() !== ""){
        $(".question:eq(0)").click();
        $(".question:eq(1)").click();
        $(".question:eq(2)").click();
    }
  
    function askai_generic(prompt,container){
          
              
        url ="https://artatfalls.pythonanywhere.com/askai";
        $("#q").val(prompt);
      
        $.ajax({
            url: url,
            data: $('form').serialize(),
            type: 'POST',
            success: function(data){
              $(container).html(data.replaceAll('\\n','<br>'));
            },
            error: function(error){
              console.log(error);
            }
          });
      
	
      }
      function askai_bulk(questions,container){
        q = [];
        
        for(i=0;i<questions.length;i++){
          q.push(questions[i][2]);
        }
        $(container).html(JSON.stringify(q));
        prompt =  "I will give you <<Job>>, <<Resume>>, <<Questions>> and <<Output format>>. You will give answers in the <<Output format>>;<<Job>> =" + $("#description").text() +",<<Resume>>= "+$("#resume").text()+",<<Questions>>="+JSON.stringify(q)+", <<Output format>>=[{'question1':'answer1},{'question2':'answer2'}]";     
        url ="https://artatfalls.pythonanywhere.com/askai";
        $("#q").val(prompt);
      
        $.ajax({
            url: url,
            data: $('form').serialize(),
            type: 'POST',
            success: function(data){
              $(container).html(data.replaceAll('\\n','<br>'));
            },
            error: function(error){
              console.log(error);
            }
          });
      
	
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

function summarize(text,container,sentences=8) {
  text = text.replace(/<br>|<\/?li>|<\/?p>/gi, "\n");
  text = text.replace(/(?:\r\n|\r|\n)/g, '. ');
  const formdata = new FormData();
  formdata.append("key", "b9812cebd408fb73a7f180f08ef604d9");
  formdata.append("txt", text);
  formdata.append("sentences", sentences);
 

  $.ajax({
    url: "https://api.meaningcloud.com/summarization-1.0",
    type: "POST",
    data: formdata,
    processData: false,
    contentType: false,
    success: function(response) {
        $(container).html(textToBullets(response.summary));
     
    },
    error: function(error) {
      console.log('error', error);
    }
  });
}
function textToBullets(text) {
  text = text.replace(/\.(?=[a-zA-Z0-9])/g, ". ");//Fullstops enforced to have a space after
  const lines = text.split('. ');
  let html = '<ul>';
  for (let line of lines) {
    html += `<li>${line.trim()}</li>`;
  }
  html += '</ul>';
  return html;
}

