class Wire{
    constructor(a,b){

        var options={
    
            bodyA:a,
            bodyB:b,
            length:400,
            Stiffness:1,
            friction:0,
            frictionAir:0,
            frictionStatic:0
    
        }
    
        this.wire=Constraint.create(options)
        World.add(world,this.wire)
    
    }
    
    display(){
        
        stroke("yellow")
        line(this.wire.bodyA.position.x,this.wire.bodyA.position.y,this.wire.bodyB.position.x,this.wire.bodyB.position.y)
    
    }
}