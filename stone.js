class Stone {
    constructor(x, y, r) {
      
      var options = {
          'restitution':0,
          'friction':1,
          'density': 0.5,
          isStatic : false
      }
      this.body = Bodies.circle(x, y, r/2 , options);
      this.radius = r
      this.image = loadImage("Plucking+mangoes/stone.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y)
      imageMode(RADIUS);
      fill(255);
      image(this.image,0, 0, this.radius, this.radius);
      pop();
    }
  };