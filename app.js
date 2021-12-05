const questions=document.querySelectorAll(".question-box");

questions.forEach(function(question){
  const btn=question.querySelector("#btn");
  const answer=question.querySelector(".answer");
  const quest=question.querySelector(".question-text");
  quest.addEventListener("click",function(){

  if(btn.classList.contains('rot-arrow'))
      closeAll();

    else{
    closeAll();
    answer.classList.add("show-answer");
    quest.style.fontWeight="700";
    btn.classList.add("rot-arrow");
    };
    
  })
});


const allAnswers=document.querySelectorAll(".answer");
const allQuest=document.querySelectorAll(".question-text");
const allButton=document.querySelectorAll(".question-text button");
function closeAll(quest,ico){
  allAnswers.forEach(function(item){
    item.classList.remove("show-answer");
  });
  allQuest.forEach(function(item){
    item.style.fontWeight="100";
  });
  allButton.forEach(function(item){
    item.classList.remove("rot-arrow");
  });
};