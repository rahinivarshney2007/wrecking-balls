class Ground{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0.5,
            density:0.4,
            friction:0.6
        }
this.ground=Bodies.rectangle(x,y,800,20,options)
World.add(world,this.ground)
}
display(){
    var pos=this.ground.position
   rectMode(CENTER)
   fill("pink")
    rect(pos.x,pos.y,800,20)
}
}