


alert("inserted here")
/*
function fetchjd(jt,jd){
//alert("fetching");
  //jt = "simplyhiredjd";
 
  jt = jt.replaceAll("%20","_");
  url = "https://readwritejd-ndmd3ghqma-ue.a.run.app";//?user="+user+"&data="+JSON.stringify(resume);
  //$("#q").val(prompt);
  
  $.ajax({
    type: "POST",
    url: url,
    data: JSON.stringify({ jt: jt.toLowerCase(), jd:JSON.stringify(jd) }),
    contentType: "application/json",
    success: function(data) {
      
        console.log(data);
        //scrape();
        

    }
  })
}
/*window.setTimeout(function(){
$(".css-nzjs22").attr("style","cursor:pointer");
//$("body").append("<button style='position:fixed;bottom:0px;right:0px' id='savethis'>Save this</button>"); 
$(".css-nzjs22").click(function(){
var jt = $(".css-nzjs22").attr("aria-label");
var jd = $(".css-nzjs22").text();

fetchjd(jt,jd360);
});},3000);
var jts = ["DevOps engineer","Computer programmer","Lead programmer","Iteration manager","Frameworks specialist","Game developer","Cloud systems engineer","Cloud computing engineer","Cloud architect","Cloud system administrator","Cloud consultant","Cloud services provider","Cloud services developer","Cloud product manager","Chief information officer (CIO)","Chief technology officer (CTO)","IT manager","IT director","IT project manager","Director of technology","Technical operations officer","Information management systems director","Senior IT consultant","Technical lead"];
counter = 0;
function scrape(){
  if(counter<jts.length){
      $.get("https://www.simplyhired.com/search?q="+jts[0],function(html){

    link = $(html).find(".css-12bkbc3").eq(0).attr("href");
    $.get("https://www.simplyhired.com"+link,function(html2){
    jd = $(html2).find("[data-testid=viewJobBodyJobFullDescriptionContent]").text();
    questions = ["A short summary of this job","List of ATS Keywords from the job description","List of activities and responsibilities from the job description","How much is expected salary ","List of interview questions you can expect","A sample resume to suit this job","Based on the job, recommended training and certifications","What is the path for growth of this role"];
    jd360 = {"jd":jd,"questions":questions};
    counter++;
    fetchjd(jts[counter],jd360);
    });

    });
  }
}
//fetchjd("application_developer");
url2 = "https://readwrite-jd-ndmd3ghqma-ue.a.run.app";

  
  $.ajax({
    type: "POST",
    url: url2,
    data: JSON.stringify({ user: "application_developer", data:"" }),
    contentType: "application/json",
    success: function(data) {
      
        console.log(data);
        //scrape();
        

    }
  })
*/