function barrier(){
this.leftPull = 1;
this.velocity = 5; //speed of gravity
this.height =100;
this.width = 100;
this.x = w + this.width;
this.y = Math.floor(Math.random() * h)-10;
  this.show = function() {
this.x;
this.y;
fill(color('red'));
rect(thi.x,this.y,this.width,this.height);
  };
  this.update = function() {
    this.velocity += this.leftPull;
    this.x -= this.velocity;
  };
}