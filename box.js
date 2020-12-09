class Box{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0.5,
            density:0.4,
            friction:0.6
        }
this.box=Bodies.rectangle(x,y,200,90,options)
World.add(world,this.box)
}
display(){
    var pos=this.box.position
   rectMode(CENTER)
   fill("pink")
    rect(pos.x,pos.y,200,90)
}
}