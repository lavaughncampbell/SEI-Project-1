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


  // selectOption: function() {
  //   // select question or code
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

// listener for start button click
startButton.addEventListener('click', () => {
  // call the start game method in your game object.
  game.startGame()
})

playButton.addEventListener('click', () => {
  // call the play game method in your game object.
  game.playGame()
})

