// Array of quiz questions and answers
const quizQuestions = [
  {
    question: "Which company developed JavaScript?",
    answer: "netscape"
  },
  {
    question: "What HTML tag is used to link a JavaScript file?",
    answer: "<script>"
  },
  {
    question: "What is the keyword used to declare a constant variable in JavaScript?",
    answer: "const"
  },
  {
    question: "What method is used to print messages to the browser console?",
    answer: "console.log"
  }
];

// Function to run the quiz
function runQuiz() {
  let score = 0; // Score tracker

  for (let i = 0; i < quizQuestions.length; i++) {
    let userAnswer = prompt(quizQuestions[i].question);

    // Normalize user input
    if (userAnswer) {
      userAnswer = userAnswer.toLowerCase().trim();
    }

    if (userAnswer === quizQuestions[i].answer) {
      score++;
      alert("Correct! 🎉");
    } else {
      alert("Incorrect ❌ The correct answer is: " + quizQuestions[i].answer);
    }
  }

  // Final score display
  alert("Quiz finished! 🎯 Your final score is " + score + "/" + quizQuestions.length);
}

// Start the quiz
runQuiz();