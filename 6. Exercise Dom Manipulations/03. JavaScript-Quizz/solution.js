// Task 3. JavaScript Quizz
// Write a function that has the functionality of a quiz.
// There are three sections that contain 1 question and 2 possible answers.
// The right answer is only one!
// When one of the list elements is clicked, the next section must appear (if any…).
// After all three questions have been answered, the result div must appear. (Use &#39;none&#39; and &#39;block&#39; to hide
// and show the question sections).
// If all questions are answered correctly, you should print the following message:
// &quot;You are recognized as top JavaScript fan!&quot;
// Otherwise, just print &quot;You have {rightAnswers} right answers&quot;.
// The right answers are (onclick, JSON.stringify() and A programming API for HTML and XML documents).

function solve() {
  let allQuestions = document.querySelectorAll("#quizzie section");
  let correctAnwsersCount = 0;
  const correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];

  let firstQuestion = allQuestions[0];
  let firstQuestionAnswers = firstQuestion.querySelectorAll("p");
  let secondQuestion = allQuestions[1];
  let secondQuestionAnswers = secondQuestion.querySelectorAll("p");
  let thirdQuestion = allQuestions[2];
  let thirdQuestionAnswers = thirdQuestion.querySelectorAll("p");

  [...firstQuestionAnswers].forEach(answer => {
    answer.addEventListener('click', checkFirstQuestion);
  });

  function checkFirstQuestion() {
    if (correctAnswers.includes(this.textContent)) {
      correctAnwsersCount++;
    }

    firstQuestion.style.display = 'none';
    secondQuestion.style.display = 'block';
    
    [...secondQuestionAnswers].forEach(answer => {
      answer.addEventListener('click', checkSecondQuestion);
    });
  }

  function checkSecondQuestion() {
    if (correctAnswers.includes(this.textContent)) {
      correctAnwsersCount++;
    }
    secondQuestion.style.display = 'none';
    thirdQuestion.style.display = 'block';

    [...thirdQuestionAnswers].forEach(answer => {
      answer.addEventListener('click', showResult);
    });
  }

  function showResult(){
    if (correctAnswers.includes(this.textContent)) {
      correctAnwsersCount++;
    }
    thirdQuestion.style.display = 'none';
    let result = document.querySelector("#results");
    result.style.display = 'block';

    let title = result.querySelector("h1");
    
    if(correctAnwsersCount === 3){
      title.textContent = 'You are recognized as top JavaScript fan!';

    }
    else{
      title.textContent = `You have ${correctAnwsersCount} right answers`;
    }

  }
}

