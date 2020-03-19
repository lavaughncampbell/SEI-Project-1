//-------CLASSES-------//





















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
    // when you click play button on the instruction screen
    console.log("let's play")
    // when you click the play button hide instructions
    showInstructions.classList.add('hide')
    // show the options screen
    optionsScreen.classList.remove('hide')
  },


  // selectPlayer: function() {
  //   // when you select how many players
  // }


  selectOption: function() {
    // when you click the option hide the selection screen
    optionsScreen.classList.add('hide')
    // show the main game screen
    mainGame.classList.remove('hide')

  },

  // mainGame: function() {
  //   // main game screen select your category and value
  // }

}
























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

codeSelect.addEventListener('click', () => {
  game.selectOption()
})



