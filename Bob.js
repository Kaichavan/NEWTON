class Bob {
    constructor(x, y, radius) {
        var options = {
            isStatic: true,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.x = x
        this.y = y
        this.radius = radius
        this.body = Bodies.circle(this.x, this.y, (this.radius)/2,options)
        World.add(world, this.body);

        
      }
      display(){
        var bobpos = this.body.position
        push();
        translate (bobpos.x,bobpos.y)
        fill ("pink")
        ellipse (0,0,this.radius, this.radius)
        pop();
      }




}