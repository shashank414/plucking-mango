class Mango extends BaseClass {
    constructor(x,y){
      var options = {
        isStatic: true,
        restitution: 0,
        friction: 1,
        density: 1.2
      }
      super(x,y,50,50,options);
      this.image = loadImage("mango.png");
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      
      super.display();
    }
attackmango(stone){
  if(Math.abs(stone.body.position.x-this.body.position.x)< stone.width/2+this.width/2 && Math.abs(stone.body.position.y-this.body.position.y)< stone.height/2+this.height/2  ){
		console.log("insidemango")
				Matter.Body.setStatic(this.body,false);
	}
}
    

  }