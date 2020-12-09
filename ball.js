class Ball{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.5,
            density:0.4,
            friction:0.6
        }
this.ball1=Bodies.circle(x,y,40,options)
World.add(world,this.ball1)
}
display(){
    var pos=this.ball1.position
   ellipseMode(RADIUS)
   fill("pink")
    ellipse(pos.x,pos.y,40)
}
}