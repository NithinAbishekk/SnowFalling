class Snow {
    constructor(x,y){

        this.body = Bodies.circle(x,y,10);
        this.r= 10;
        this.image =  loadImage("images/snow5.webp");
        World.add(world, this.body);
    }

    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,30,30);
    }
}

