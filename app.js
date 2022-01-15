const correctAnswers = ["B", "C", "C", "D"];

const form = document.querySelector(".quiz-form");
const scoreResult = document.querySelector("#result-score");

const paragraphSubmitFeedback = document.createElement("p");

const removeSubmitParagraph = () => {
  const paragraphSubmitExists = document.querySelector(
    '[class="quiz-form text-light"]'
  );

  if (paragraphSubmitExists) {
    paragraphSubmitExists.remove();
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let score = 0;
  let questionsScore = 0;
  let scoreResultMessage = "";

  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
  ];
  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer === correctAnswers[index]) {
      score += 25;
      questionsScore = `${score * 0.4 * 0.1}`;
    }
    if (score <= 25) {
      scoreResultMessage = `Você acertou ${score}% das perguntas, ou seja, você acertou somente ${questionsScore} questão!`;
      return;
    }
    scoreResultMessage = `Você acertou ${score}% das perguntas, ou seja, você acertou ${questionsScore} questões. Parabéns!`;
  });

  scoreResult.textContent = scoreResultMessage;
  removeSubmitParagraph();
});
