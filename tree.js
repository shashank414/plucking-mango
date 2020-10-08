class Tree {
    constructor(x,y){
      // super(x,y,300,500);
      this.image = loadImage("tree.png");
      this.boyimage = loadImage("mango boy.png");
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      image(this.image, 400,0, 400,400);
      image(this.boyimage,50,260);
    }
  }