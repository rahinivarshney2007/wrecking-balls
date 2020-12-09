class Rope{
    constructor(bodyA,pointB){
var options={
    bodyA:bodyA,
    pointB:pointB,
    length:10,
    stiffness:0.04,
//density:0.4
}
this.b=pointB
this.rope=Matter.Constraint.create(options)
World.add(world,this.rope)

    }
    display(){
        //if(this.rope.bodyA){

            //var b=this.pointB\
            if(this.rope.bodyA){
                var a=this.rope.bodyA.position
                line(a.x,a.y,this.b.x,this.b.y)
            }
        
       // }
        }
        fly(){
          this.rope.bodyA=null
        }
        attach(bodyA){
        this.rope.bodyA=bodyA
        }
        }
        
    

