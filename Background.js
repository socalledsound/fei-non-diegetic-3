class Background{
    constructor(img, x, y, w, h){
        this.img = img
        this.dashHeight = 50
        this.dashWidth = 20
        this.dashColor = 255
        this.dashes = this.initDashes(h)
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.count = 0
        this.speed = 10
    }

    initDashes(h){
        const numDashes = h/(this.dashHeight * 2)
        console.log(numDashes)
        const dashes = Array.from({length: numDashes}, (el, i) => {
            const x = canvasWidth/2 - this.dashWidth/2
            const y = (i * this.dashHeight * 2 * -1) + 300
            return {
                x,
                y
            }
        })
        // console.log(dashes)
        return dashes
    }

    increaseCount(){
        this.counter++
        this.dashes.forEach(dash => {
            console.log(dash)
            dash.y+=this.speed
        })
    }

    render(){
        // image(bg, bgX, bgY, 400, 6000); 
        //image(this.img, this.x, this.y, this.w, this.h)
        // const bgStartX = 0
        // const bgStartY = -5400
        // const bgWidth = 400
        // const bgHeight = 6000
        this.dashes.forEach(dash => {
            // console.log(dash)
            fill(this.dashColor)
            rect(dash.x, dash.y, this.dashWidth, this.dashHeight)
        })
    }


}


