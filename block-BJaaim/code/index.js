let myQuestions = [
    {
      question: 'Who invented JavaScript?',
      answers: ['Douglas Crockford', 'Sheryl Sandberg', 'Brendan Eich'],
      correctAnswer: 3,
    },
    {
      question: 'Which one of these is a JavaScript package manager?',
      answers: ['Node.js', 'TypeScript', 'npm'],
      correctAnswer: 3,
    },
    {
      question: 'Which tool can you use to ensure code quality?',
      answers: ['Angular', 'jQuery', 'ESLint'],
      correctAnswer: 3,
    },
  ]
  let count=0
  let count2=0
  let form = document.querySelector('form')
let quizContainer = document.getElementById('quiz')
let section = document.querySelector('section')
let resultsContainer = document.getElementById('results')
let submitButton = document.getElementById('submit')
let next = document.getElementById('next')

/*We will be creating a quiz app in this section step-by-step. Follow the steps below and complete on by one

1. Quiz is a collection of Questions.
2. Question will need `Title`, `Options` and `Correct Answer`

### Make a Question class with these data and methods:

DATA:

- Title of the question
- Options of the question
- Correct answer

METHODS:

- isCorrect(answer)

Check if the given answer is correct or not. It will accept one answer and return `true` is the answer is correct otherwise false.

- getCorrectAnswer()
  This method will return the correct answer of the question.

- createUI (this will create the layout of a single question)

This method will decide how the UI of a question look like. Calling this function should add the UI in the DOM.
*/

class QuizApp {
  constructor(title, options, correctAnswer) {
    this.title = title
    this.options = options
    this.correctAnswer = correctAnswer
  }
  isCorrect(option) {
      console.log(option == this.correctAnswer)
    return option == this.correctAnswer
  }
  getCorrectAnswer() {
        return this.options[this.correctAnswer-1]
  }
  createUI() {
      let answer=this.getCorrectAnswer()
    return `<form class="scheduleTemplate ">
    <h2> ${this.title}</h2>

            <label for="a"><input type="radio" name="option" value=1 > a: ${this.options[0]}</label>

            <labelfor="b"><input type="radio" name="option" value=2 > b: ${this.options[1]}</labelfor=>

            <label for="c"><input type="radio" name="option" value=3 > c: ${this.options[2]}</label>

    <p>Correct answer:</p>
</form>
`
  }
}
/*
DATA:

- allQuestions
  Collection of Questions. An array with multiple question.
- activeIndex
  Index of the active visible question
- score
  Total number of correct answer

METHOD:

- nextQuestion()
  This method should get the next question.
- createUI
  This will create the ui of the whole app.
- updateScore
  This method will update the score.
*/

class AppBody {
  constructor(ques) {
    this.allQuestions = ques
    this.activeIndex = 0
    this.score = 0
  }
  nextQuestion() {
    let quiz = new QuizApp(
      this.allQuestions.question,
      this.allQuestions.answers,
      this.allQuestions.correctAnswer,
    )
    form.addEventListener(`click`,(event)=>{

        quiz.isCorrect(event.target.value)
    })
    quizContainer.innerHTML= quiz.createUI()
  }
  createUI() {
let score = document.createElement(`h2`)
score.innerText=`Score: ${this.updateScore()}`
section.append(score)
  }
  updateScore() {
    return this.score
  }
  
}


let ques = new AppBody(myQuestions[count])
ques.nextQuestion()
ques.createUI()
next.addEventListener(`click`,(event)=>{
    event.preventDefault()
    count++
    if(myQuestions.length>count){
     ques = new AppBody(myQuestions[count])
    ques.nextQuestion()}
})

    


