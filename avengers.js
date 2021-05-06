class Avengers {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;

      this.image1=loadImage("images/AntMan.png")
      this.image2=loadImage("images/BlackPanther.png")
      this.image3=loadImage("images/CaptainAmerica.png")
      this.image4=loadImage("images/DoctorStrange.png")
      this.image5=loadImage("images/Falcon.png")
      this.image6=loadImage("images/Groot.png")
      this.image7=loadImage("images/Hulk.png")
      this.image8=loadImage("images/IronMan.png")
      this.image9=loadImage("images/Loki.png")
      this.image10=loadImage("images/Mystique.webp")
      this.image11=loadImage("images/SpiderMan.png")
      this.image12=loadImage("images/Storm.webp")
      this.image13=loadImage("images/Thor.webp")
      this.image14=loadImage("images/Vision.webp")
      this.image15=loadImage("images/Wanda.png")
      this.image16=loadImage("images/Wolverine.webp")
      
      World.add(world, this.body);
    }
    display1(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image1,0,0,this.width,this.height);
      pop();
    }

    display2(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image2,0,0,this.width,this.height);
      pop();
    }

    display3(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image3,0,0,this.width,this.height);
      pop();
    }

    display4(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image4,0,0,this.width,this.height);
      pop();
    }

    display5(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image5,0,0,this.width,this.height);
      pop();
    }

    display6(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image6,0,0,this.width,this.height);
      pop();
    }

    display7(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image7,0,0,this.width,this.height);
      pop();
    }

    display8(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image8,0,0,this.width,this.height);
      pop();
    }

    display9(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image9,0,0,this.width,this.height);
      pop();
    }

    display10(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image10,0,0,this.width,this.height);
      pop();
    }

    display11(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image11,0,0,this.width,this.height);
      pop();
    }

    display12(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image12,0,0,this.width,this.height);
      pop();
    }

    display13(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image13,0,0,this.width,this.height);
      pop();
    }

    display14(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image14,0,0,this.width,this.height);
      pop();
    }

    display15(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image15,0,0,this.width,this.height);
      pop();
    }

    display16(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image16,0,0,this.width,this.height);
      pop();
    }
  }
    