import chalk from 'chalk';
import takeInput from 'readline-sync';

var username = welcome();

var questions = [
  {
    question: "Last movie of Irrfan Khan:",
    answer: "Angrezi Medium",
  }, {
    question: "Where did Tarika wanted to go?",
    answer: "London",
  }, {
    question: "Whenever Tarika asked her dad Champak to take her abroad, what did he used to say?",
    answer: "Jaavege Beta Jaavege",
  }, {
    question: "Tarika's father was going to sell which Brand Name for her college fees?",
    answer: "Ghasiteram",
  }, {
    question: "Best Song?",
    answer: "Ek Zindagi Mere",
  }
]

var highScores = [
  {
    name: 'Tom',
    score: 3,
  },
  {
    name: "Jerry",
    score: 4,
  }
]

function welcome() {
  var username = takeInput.question("Who are you? ")
  console.log("Welcome " + username + " to Madhu's favourite movie's little quiz");
  return username;
}

function quiz(questions) {
  var score = 0;
  for (let i = 0; i < questions.length; i++) {
    var answer = takeInput.question(questions[i].question + " ");
    if (questions[i].answer.toLowerCase() === answer.toLowerCase()) {
      console.log(chalk.green("that's correct"));
      score++;
    } else {
      console.log(chalk.red("Uhh Ohh :(") + "\nWell, the correct answer is " + chalk.green(questions[i].answer));
    }
    console.log(chalk.blue("Current Score: " + score) + "\n------------------\n");
  }
  return score;
}


function results() {
  console.log(chalk.whiteBright.bgBlackBright("Your final score is " + score));
  console.log(chalk.blue("Thankyou for playing this quiz " + username + "!\n"));

  console.log("Current High Scores are:");
  highScores.map(forEachScore => console.log(forEachScore.name + ":" + forEachScore.score));

  console.log("\nHey " + username + ", if you have scored high, please send me a screenshot to update it. Thankyou!")
}


var score = quiz(questions);
results();