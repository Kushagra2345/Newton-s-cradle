class Wall{

    constructor(x,y,width,height){

        this.x=x
        this.y=y
        this.width=width
        this.height=height

        var options={
            isStatic:true,
            density:2,
            friction:0,
            frictionAir:0,
            frictionStatic:0

        }
        this.body=Bodies.rectangle(x,y,this.width,this.height,options)
        World.add(world,this.body)

    }

    display(){
        push()
        fill("red")
        stroke("green")
        strokeWeight(2)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
        rectMode(CENTER)
        pop()
    }
}