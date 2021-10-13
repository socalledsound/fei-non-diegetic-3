class DogHero{
    constructor(spritesheet, numframes, x, y, size){
        this.images = loadDogAnimation(spritesheet, numframes)
        this.imageCounter = 0
        this.x = x
        this.y = y
        this.size = size
        this.speed = 10
    }
    checkEdgeBottom(){
        console.log(this.y, this.size, canvasHeight)
        if(this.y > canvasHeight - (this.size * 2)){
                return true
        }else{
            return false
        }
    }

    checkEdgeLeft(){
        console.log(this.x, this.size, canvasWidth)
        if(this.x < this.size){
                return true
        }else{
            return false
        }
    }

    checkEdgeRight(){
        console.log(this.x, this.size, canvasWidth)
        if(this.x > canvasWidth - (this.size * 2)){
                return true
        }else{
            return false
        }
    }

    move({x, y}){
        
        this.x += x
        this.y += y
    }



    render(){
        // console.log(this.images)
        // image(animation[counter % animation.length], playerX, playerY, 100, 100)
        image(this.images[this.imageCounter % (this.images.length - 1)], this.x, this.y, this.size, this.size)
        // fill(255, 0,0)
        // rect(this.x, this.y, this.size, this.size)
    }


}