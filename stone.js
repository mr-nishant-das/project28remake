class stone{
    constructor(x, y, radius){
        var options ={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.image = loadImage("homecoming/stone.png");
        this.body = Bodies.rectangle(this.x, this.y, this.radius/2, options);
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        ellipseMode(CENTER);
        image(this.image, 0, 0, this.radius*2, this.radius*2);
        pop();
      }
}