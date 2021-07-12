class PlayerArrow {
    constructor(x, y, width, height) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: true
      };
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      this.image = loadImage("./assets/arrow.png");
      this.trajectory = []
      World.add(world, this.body);
    }
    shoot(){
        var velocity  = p5.Vector.fromAngle(Pbow.angle)
        velocity.mult(20)
        Matter.Body.setStatic(this.body, false)
        Matter.Body.setVelocity(this.body,{x: velocity.x+9 , y: velocity.y })

        
      
        }
   display() {
      var pos = this.body.position;
      var angle = Pbow.angle+90
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();

      if (this.body.velocity.x> 0) {
        var position = [pos.x, pos.y]
        this.trajectory.push(position);
    }

    for (var i = 0; i < this.trajectory.length; i++) {
        ellipse(this.trajectory[i][0], this.trajectory[i][1], 5)
    }
    }
  }