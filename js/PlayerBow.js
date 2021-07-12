class PlayerBow{
    constructor(x,y,width,height,angle){
        this.x =x
        this.y = y
        this.width = width
        this.height = height
        this.angle = angle
      this.image = loadImage("assets/playerArcher.png")
      this.body = Bodies.rectangle(x,y,width, height)
    }
    display(){

      if(keyIsDown(LEFT_ARROW)){
        this.angle+= 0.02
     }
     
        if(keyIsDown(RIGHT_ARROW)){
        this.angle-= 0.02
        }
      
   push()
  translate(this.x,this.y)
  rotate(this.angle,)
imageMode(CENTER)
image(this.image,0,0,this.width, this.height)

   pop()
    }
}