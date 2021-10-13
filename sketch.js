
// some settings
const canvasWidth = 400
const canvasHeight = 600
//bg
const bgStartX = 0
const bgStartY = -5400
const bgWidth = 400
const bgHeight = 6000
// dog hero
const dogHeroStartX = 150
const dogheroStartY = 400
const dogHeroSize = 100
// daisy
const daisyStartX = 100
const daisyStartY = 150
const daisyWidth = 200
const daisyHeight = 150


// vars for images
const numDogFrames = 10
let mainDogImage, bgImg, daisyImg

// vars for class instances
let dogHero, bg, daisy
let game

function preload() {
  //images
  mainDogImage = loadImage('assets/dog-walking.png'); 
  bgImg = loadImage('assets/bg.png'); 
    // definitely save this for soon
  //  daisy = loadModel('assets/flower_obj.obj')
  daisyImg = loadImage('assets/dasiy.jpg'); 
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);  
  // make the things
  bg = new Background(bgImg, bgStartX, bgStartY, bgWidth, bgHeight)
  dogHero = new DogHero(mainDogImage, numDogFrames, dogHeroStartX, dogheroStartY, dogHeroSize)
  daisy = new Daisy(daisyImg, daisyStartX, daisyStartY, daisyWidth, daisyHeight)
  // pass them into the game so we can keep track of them easily
  game = new Game(bg, dogHero, daisy)

}

function draw() {
  // CLEAN
  background(30)
  game.update()
  game.render()
  checkKeys()
}


function checkKeys(){
  // this is the function to use for continuously pressed keys
  if(keyIsDown(UP_ARROW)){
    game.moveUp()
  }else if(keyIsDown(DOWN_ARROW)){
    game.moveDown()
  } else if(keyIsDown(LEFT_ARROW)){
    game.moveLeft()
  } else if(keyIsDown(RIGHT_ARROW)){
    game.moveRight()
  }
}




