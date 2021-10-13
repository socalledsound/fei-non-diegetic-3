const loadDogAnimation = (spritesheet, numFrames) => {
    return Array.from({length: numFrames}, (el, i) => {
        return spritesheet.get(i * 200, 0, 200, 200)
    })
}

// for(let i = 0; i < spriteImageFrame; i++ ){ 
//     animation[i] = spriteImage.get(i * 200, 0, 200, 200)
//  }