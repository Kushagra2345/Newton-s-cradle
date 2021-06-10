class Bob{
    
    constructor(x,y,radius){

        this.x=x
        this.y=y
        this.radius=2*radius

        var options={
         isStatic:false,
         restitution:1,
         density:1,
         friction:0,
         frictionAir:0,
         frictionStatic:0,
         inertia:100000,
         mass:0.1,



        }
        this.body=Bodies.circle(x,y,radius,options)
        World.add(world,this.body)

    }

    display(){
        push()
        fill("white")
        stroke("purple")
        strokeWeight(2)
        circle(this.body.position.x,this.body.position.y,this.radius)
        rectMode(CENTER)
        pop()
    }
}