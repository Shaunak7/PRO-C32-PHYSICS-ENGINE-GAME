class FootBall{

    constructor(x,y,r)
    {
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=r
        this.image=loadImage("images/Football.png")
        this.body=Bodies.circle(this.x, this.y, r/2, options)
        World.add(world, this.body);
    }
    
    display()
    {
        var footBallPos=this.body.position;	
        push()
        translate(footBallPos.x, footBallPos.y);
        // rectMode(CENTER);
        rotate(this.body.angle)
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r)
        pop()
    }
    }