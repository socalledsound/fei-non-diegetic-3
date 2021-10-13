class Game{
    constructor(background, dogHero, daisy){
        this.background = background
        this.doghero = dogHero
        this.daisy = daisy
        this.currentLevel = 0
        this.warningTriggered = false
        this.warningText = 'keep going UP!'
        this.levelTexts = [
            'keep going!',
            'yes, keep going!',
            'yes, keep going!',
            'You are almost there!',
            'yes, keep going!',
            'You are here!'
        ]
        // nice pattern here, we can also make this programmatically....
        this.levels = [
            {
                min: -4400,
                max: -4000,
            },
            {
                min: -3400,
                max: -3000,
            },
            {
                min: -2400,
                max: -2000,
            },
            {
                min: -1400,
                max: -1000,
            },
            {
                min: -400,
                max: 0,
            },

        ]
        this.textSize = 16
        this.textColor = 255
        this.textX = 20
        this.textY = 20
        this.atGoal = false
    }

    checkMiles(){
        
    }

    drawText(){
        textSize(this.textSize);
        fill(this.textColor);
        if(this.warningTriggered){
            text(this.warningText, this.textX, this.textY);
        }else{
            text(this.levelTexts[this.currentLevel], this.textX, this.textY);
            
        }
        
    }

    // need to rework these next!
    moveDown(){
        if(playerY < 500) {
            playerY+=10;
            console.log(playerY)
           } else if (playerY >= 500 && playerY < 600){
            console.log( playerY)
            //??????????????????? text not shown!!!?????????????
            textSize(16);
            fill(255);
            text('keep going UP!', 50, 10);
           }
    }

    moveLeft(){
        if(playerX <= 300 && playerX > 0){
            playerX-=10; 
            console.log( playerX);
            }else if(playerX <= 0) {
              console.log( playerX);
                //??????????????????? text not shown!!!?????????????
              textSize(16);
              fill(255);
              text('keep going UP!', 50, 10);
             }
    }

    moveRight(){
        if(playerX < 300 && playerX  >= 0){
            playerX+=10; 
            console.log( playerX);
            }else {
              console.log( playerX);
              //??????????????????? text not shown!!!?????????????
              textSize(16);
              fill(255);
              text('keep going UP!', 50, 10);
            }
    }


    moveUp(){
       
        if(this.doghero.y > this.doghero.size){
            this.doghero.move({x: 0, y: this.doghero.speed * -1})
        } else {
            console.log('moving bg')
            this.background.increaseCount()
            //this.background += this.speed;
        }
    }





    render(){
        this.background.render()
        this.doghero.render()
        this.drawText()
        if(this.atGoal){
            this.daisy.render()
        }
        
    }

    update(){
        this.checkMiles()
    }
}






// function checkMiles() {
//     if( bgY > -4400 && bgY < -4000) {
//       textSize(16);
//       fill(255);
//       text('keep going!', 20, 20);
//     } else if (bgY > -3400 && bgY < -3000){
//       textSize(16);
//       fill(255);
//       text('yes, keep going!', 20, 20);
//     } else if (bgY > -2400 && bgY < -2000){
//       textSize(16);
//       fill(255);
//       text('yes, keep going!', 20, 20);
//     }else if (bgY > -1400 && bgY < -1000){
//       textSize(16);
//       fill(255);
//       text('You are almost there!', 20, 20);
//     }else if (bgY > -400 ){
//       textSize(16);
//       fill(255);
//       text('You are here!', 20, 20);
//      //  drawDaisy();
//       drawDaisy2D();
//     }
//   }