class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.image=loadImage("block.png");
      this.Visibilty=255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
  
    }
    display(){
      if(this.body.speed<3){
        var pos= this.body.position;
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,30,40);
      }
      else{
        World.remove(world,this.body);
        push();
        this.Visibilty=this.Visibility-5;
        tint(255,this.Visibilty);
        image(this.image,this.body.position.x,this.body.position.y,30,40);
        pop();
      }
     
    }
}

