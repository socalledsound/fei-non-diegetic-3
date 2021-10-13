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
        this.textSize = 16
        this.textColor = 255
        this.textX = 20
        this.textY = 20
        this.atGoal = false
    }

    // this used to be checkMiles, 
    // we could make that number bigger if we want people to click more....
    checkBackgroundCount(){
        // console.log(this.background.count)
        if(this.background.count === 10){
            if(this.currentLevel < (this.levelTexts.length - 1)){
                this.currentLevel++
                this.background.count = 0
            }

        }
    }

    checkGoal(){
        if(this.currentLevel === this.levelTexts.length - 1){
            this.atGoal = true
        }
    }

    drawText(){
        textSize(this.textSize);
        fill(this.textColor);
        text(this.levelTexts[this.currentLevel], this.textX, this.textY);
        if(this.warningTriggered){
            text(this.warningText, this.textX , this.textY + 50);
        } 
    }

    // need to rework these next!
    moveDown(){   
        if(!this.doghero.checkEdgeBottom()){
            this.doghero.move({x: 0, y: this.doghero.speed})
        }else{
            this.triggerWarning()
        }
    }

    moveLeft(){
        if(!this.doghero.checkEdgeLeft()){
            this.doghero.move({x: this.doghero.speed * -1, y: 0})
        }else{
            this.triggerWarning()
        }
    
    }

    moveRight(){
        if(!this.doghero.checkEdgeRight()){
            this.doghero.move({x: this.doghero.speed, y: 0})
        }else{
            this.triggerWarning()
        }
    }


    // this one works
    moveUp(){
        if(!this.atGoal){
            if(this.doghero.y > this.doghero.size){
                this.doghero.move({x: 0, y: this.doghero.speed * -1})
            } else {
                // console.log('moving bg')
                this.background.increaseCount()
                //this.background += this.speed;
            }
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

    resetWarningTriggered = () => {
        this.warningTriggered = false
    }

    triggerWarning(){
        if(!this.warningTriggered){
            this.warningTriggered = true
            setTimeout(this.resetWarningTriggered, 1000)
        }
        

    }

    update(){
        //this.checkMiles()
        this.checkBackgroundCount()
        this.checkGoal()
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