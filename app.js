const questions=document.querySelectorAll(".question-box");

questions.forEach(function(question){
  const btn=question.querySelector("#btn");
  const answer=question.querySelector(".answer");
  const quest=question.querySelector(".question-text");
  const icon=question.querySelector(".question-text img");
  btn.addEventListener("click",function(){
    closeAll();
    if(icon.classList.contains("rot-arrow")){
        closeAll();
        console.log("ciao");
    }
    else{
      console.log("A ciao");
    answer.classList.add("show-answer");
    quest.style.fontWeight="700";
    icon.classList.add("rot-arrow");
    };
  })
});


const allAnswers=document.querySelectorAll(".answer");
const allQuest=document.querySelectorAll(".question-text");
const allIcon=document.querySelectorAll(".question-text img");
function closeAll(quest,ico){
  allAnswers.forEach(function(item){
    item.classList.remove("show-answer");
  });
  allQuest.forEach(function(item){
    item.style.fontWeight="100";
  });
  allIcon.forEach(function(item){
    item.classList.remove("rot-arrow");
  });
};