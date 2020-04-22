'use strict';
{

  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');

  const quizSet = [
    {q : '問題１?', c : ['A0','A1','A2']},
    {q : '問題２?', c : ['B0','B1','B2']},
    {q : '問題３?', c : ['C0','C1','C2']},
  ];

  let currentNum = 0;
  let isAnswered;
  let score = 0;

  
  
  // 選択肢配列を入れ替える
  function shuffle(arr){
    for(let i = arr.length - 1; i>0; i--){
      let i = arr.length - 1;
      const j = Math.floor(Math.random() * (i+1));
      [arr[j],arr[i]] = [arr[i],arr[j]];
    }
    return arr;
  }

  function currentAnswer(li){
    if(isAnswered === true){
      return;
    }else{
      isAnswered = true;  
    }

    if(li.textContent === quizSet[currentNum].c[0]){
      // console.log('correct');
      li.classList.add('correct');
      score = score + 1;
    }else{
      // console.log('batu');
      li.classList.add('batu');
    }

    btn.classList.remove('disabled');
  }
  

  // 問題の設置
  function setQuiz(){

    isAnswered = false;

    question.textContent = quizSet[currentNum].q;

    while(choices.firstChild){
      choices.removeChild(choices.firstChild);
    }

  const shuffleChoiced = shuffle([...quizSet[currentNum].c]);
  // console.log([...quizSet[currentNum].c]);



  shuffleChoiced.forEach(choice =>{
    const li = document.createElement('li');
    li.textContent = choice;
    li.addEventListener('click',()=>{
      currentAnswer(li
        );

    });
    choices.appendChild(li);

  });

  if(currentNum === quizSet.length - 1){
    btn.textContent='スコアを見る';
  }

  }

  setQuiz();


  btn.addEventListener('click',()=>{
    // console.log(score);
    if(btn.classList.contains('disabeled')){
      return;
    }else{
      btn.classList.add('disabled');
    }

    if(currentNum === quizSet.length - 1){
      console.log(`スコア:${score}/${quizSet.length}`);
      result.textContent = `スコア:${score}/${quizSet.length}`;
      result.classList.remove('hidden');
    }else{
      currentNum = currentNum + 1;
      setQuiz();

    }
    
  });







  





}
