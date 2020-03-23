//-------CLASSES-------//

let shuffledQuestions
let currentQuestionIndex

// grabbing the question choice box on the questions page
const questionElement = document.querySelector('#question-choice')
// grabbing the answer boxes on the questions page
const answerButtonsElement = document.querySelector('#answer-buttons')

let playerScore = 0

let num2 = 0

const playerOneScore = document.querySelector('#player-one-score')


let players = [];
let whoseTurn = 1;
players[0] = "PLAYER ONE";
players[1] = "PLAYER TWO";






























//-------GAME OBJECT-------//

const game = {
  // This method is to start the game when the start button is clicked
  startGame: function() {
    // when you click the start button
    gameStart.classList.add('hide')
    // hide the start-screen
    showInstructions.classList.remove('hide')
    // show the instructions screen

  },

  playGame: function() {
    // when you click the play button hide instructions
    showInstructions.classList.add('hide')
    // show the options screen
    optionsScreen.classList.remove('hide')
  },

  selectOption: function() {
    // when you click the option hide the selection screen
    optionsScreen.classList.add('hide')
    // show the main game screen
    mainGame.classList.remove('hide')

  },

  valueSelected: function() {
    // when you click a box for $100 etc. This will take you to the q page.
    mainGame.classList.add('hide')
    // show the question answer screen
    questionScreen.classList.remove('hide')
    // show the question from the questions array
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    // this is current question you are on in the array
    currentQuestionIndex = 0
    // this is calling the setNextQuestion method when you click a value
    this.setNextQuestion()
  },

  setNextQuestion: function() {
    this.resetState()
    // this is calling show question from the questions array at index 0
    this.showQuestion(shuffledQuestions[currentQuestionIndex])
  },

  showQuestion: function(question) {
    // this is setting the question box text to the question in the array
    questionElement.innerText = question.question
    // populate the different answers
    question.answers.forEach(answer => {
      // create a button for each of the answers
      const button = document.createElement('button')
      // this is setting the text of each button to be equal to the array
      button.innerText = answer.text
      // set the class
      button.classList.add('btn')
      // if answer is correct add a data attribute and correct attribute
      if(answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', () =>{
        this.selectAnswer(event)
      })
      answerButtonsElement.appendChild(button)
    })
  },

  resetState: function() {
    while(answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
  },

  selectAnswer: function(event) {
    // which button we selected
    const selectedButton = event.target
    // check if its correct
    const correct = selectedButton.dataset.correct
    // Create a array from our answered buttons children
    Array.from(answerButtonsElement.children).forEach(button => {
      this.setStatusClass(button, button.dataset.correct)
    })
  },

  setStatusClass: function(element, correct) {
    this.clearStatusClass(element)
    if(correct) {
      element.classList.add('correct')
      if(whoseTurn == 0) {
        playerScore++
      } else if(whoseTurn == 1) {
        num2++
      }
      playerOneScore.innerHTML = `Score: +${playerScore}`;
      playerHiddenId.innerHTML = `Score: +${num2}`;
    } else {
      element.classList.add('wrong')
    }
  },

  clearStatusClass: function(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  },

  scoreUpdate: function() {
    playerTwoScore.innerText = `${players[whoseTurn]} "UP NEXT"`
    questionScreen.classList.add('hide')
    scoreScreen.classList.remove('hide')
    console.log(playerOneScore.innerHTML);
    this.toggle()
    this.gameOver()
  },

  toggle: function() {
    if(whoseTurn == 0) {
      whoseTurn = 1;
    } else {
      whoseTurn = 0;
    }

  },

  playerTwoOption: function() {
    scoreScreen.classList.add('hide')
    if(whoseTurn == 1) {
      optionsScreen.classList.remove('hide')
    } else if(whoseTurn == 0) {
      playerTwoOptionsScreen.classList.remove('hide')
    }
  },

  playerTwoSelectOption: function() {
    playerTwoOptionsScreen.classList.add('hide')
    mainGame.classList.remove('hide')
  },

  gameOver: function() {
    if(playerScore >= 5) {
      this.gameResult()
    } else if(num2 >= 5) {
      this.gameResult()
    } else {
      console.log('keep playing')
    }
  },

  gameResult: function() {
    scoreScreen.classList.add('hide')
    winScreen.classList.remove('hide')
    winner.innerText = `${players[whoseTurn]} "WINS"`
  }
}


const questions = [
  // this is your questions and answers array
  {
    topic: "Intro-to-JS",
    question: "Declaring and assigning a variable at the same time is called?",
    answers: [
      { text: 'A: Declaration', correct:false},
      { text: 'B: Intialization', correct:true},
      { text: 'C: Assignment Operator', correct:false},
      { text: 'D: Expression', correct:false}
    ]
  },

  {
    question: "Which of these is not a arithmetic operator?",
    answers: [
      { text: 'A: +', correct:false},
      { text: 'B: *', correct:false},
      { text: 'C: %', correct:false},
      { text: 'D: &&', correct:true}
    ]
  },
  {
    question: "Which of these is not a arithmetic operator?",
    answers: [
      { text: 'A: +', correct:false},
      { text: 'B: *', correct:false},
      { text: 'C: %', correct:false},
      { text: 'D: &&', correct:true}
    ]
  }


]



// qOrC = [
//   // hold q/c for first topic
//   [
// //     //first prompt q/c
//  {
//       question: "",
//       code: "
//     },
//     {

//     }
//   ],
//   // q/c for 2nd topic
// ]



// FATIMA said I have to give each td a id and then GET that id and use
// the question or code array to acess the information do this in a method









































//-------LISTENERS-------//
const gameStart = document.querySelector('#start-screen')
// get the start button element for the start game method
const startButton = document.querySelector('#start-btn')
// get the instructions page element to show once the start screen is hidden
const showInstructions = document.querySelector('#game-instructions')
// get the play button element for the instruction transition to options
const playButton = document.querySelector('#play-btn')
// get the options screen to show
const optionsScreen = document.querySelector('#options-screen')
// get the option to select question for your category
const questionSelect = document.querySelector('#question-select')
// get the option to select question for your category
const codeSelect = document.querySelector('#code-select')
// get the main game screen to show
const mainGame = document.querySelector('#main-game')
// get the game table and the value card clicked here
const tableClick = document.querySelector('#value-data')
// get the questions screen here
const questionScreen = document.querySelector('#questions-screen')

const nextButton = document.querySelector('#next-btn')

const scoreScreen = document.querySelector('#score-screen')

const scoreStartButton = document.querySelector('#score-start-btn')

const playerTwoOptionsScreen = document.querySelector('#p2-options-screen')

const playerTwoQuestionSelect = document.querySelector('#p2-question-select')

const playerTwoCodeSelect = document.querySelector('#p2-code-select')

// get the player two score class here
const playerTwoScore = document.querySelector('#two-score')

// get the hidden player two score
const playerHiddenScore = document.querySelector('#p22-score')

// get the hidden player id
const playerHiddenId = document.querySelector('#p2-updated-score')

const tableBoard = document.querySelector('#table-board')

const winner = document.querySelector('#winner-score')

const winScreen = document.querySelector('#win-screen')

const playAgain = document.querySelector('#play-again-btn')
// listener for start button click
startButton.addEventListener('click', () => {
  // call the start game method in your game object.
  game.startGame()
})

// listener for play button click
playButton.addEventListener('click', () => {
  // call the play game method in your game object.
  game.playGame()
})

// listener for question header clicked
questionSelect.addEventListener('click', () => {
  game.selectOption()
})
// listener for code header clicked. Switch logic to questions
codeSelect.addEventListener('click', () => {
  game.selectOption()
})

// listener for value selected on the main game screen. go to question screen
tableClick.addEventListener('click', () => {
  game.valueSelected()
})

nextButton.addEventListener('click', () => {
  // game.toggle()
  game.scoreUpdate()
})

scoreStartButton.addEventListener('click', () => {
  game.playerTwoOption()
})

playerTwoQuestionSelect.addEventListener('click', () => {
  game.playerTwoSelectOption()
})

playerTwoCodeSelect.addEventListener('click', () => {
  game.playerTwoSelectOption()
})

tableBoard.addEventListener('click', (event) => {
  console.log(event.target)
})

playAgain.addEventListener('click', () => {
  game.startGame()
})


