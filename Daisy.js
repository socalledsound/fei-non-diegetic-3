class Daisy{
    constructor(img, x, y, w, h){
        this.img = img
        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }

    render(){
        // image(daisy2D, 100, 150, 200, 150); 
        image(this.img, this.x, this.y, this.w, this.h); 
    }
}


  // save this for the next version for sure!
  //?????????? WebGL for 3D model_obj is not shown?????????????
  // function drawDaisy(){
  //   push()
  //   scale(100);
  //   fill(125, 0, 250);
  //   rotateX(PI);
  //   rotateY(angle);
  //   model(daisy);
  //   pop(); 
  //    angle += 0.01;
  // }