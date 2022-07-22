// console.log("harsh");
// to read user name -> we use a library named readlineSync
import readlineSync from "readline-sync";
import chalk from "chalk";
var yourName = readlineSync.question(chalk.bgGray("Whats's your name? "));
console.log("\n");
console.log(
  chalk.bgCyan(
    "hii " +
      yourName +
      " baby! good morning!! Hope you are not confused regards what to do 😮‍💨 \n"
  )
);
console.log(
  chalk.bgCyan(
    "Here some questions u have to answer👍 just type Name of the person in small letters? "
  )
);

// console.log("hii");
var questions = [
  {
    question: "Are u confident to proceed? ",
    answer: "yes",
  },
  {
    question: "the person i love the most? ",
    answer: "mom",
  },
  {
    question: "What I study in present scenerio? ",
    answer: "programming",
  },
  {
    question: "What Is your favourite band? ",
    answer: "bts",
  },
  {
    question: "What is your nickname in your own home? ",
    answer: "anni",
  },
  {
    question: "who is kalua?",
    answer: "harsh",
  },
];
var score = 0;
function play(question, answer) {
  var yourAnswer = readlineSync.question(question);
  if (yourAnswer === answer) {
    console.log(chalk.bgCyan("Right " + yourAnswer + " u are very smart!"));
    score += 1;
    console.log(chalk.bgCyan("Your score is " + score));
    console.log("-------------------------------");
  } else {
    console.log(chalk.bgCyan("Wrong " + yourAnswer + " Try next time!"));
    score -= 1;
    console.log(chalk.bgCyan("Your score is " + score));
    console.log("-------------------------------");
  }
}
for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}
console.log(chalk.bgBlue("END GAME! BYE BYE AND WAIT FOR THE NEXT UPCOMING APP"));