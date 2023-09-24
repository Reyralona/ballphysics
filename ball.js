const gravity = 1;

function invert(num) {
  return num > 0 ? -num : Math.abs(num);
}

class Ball {
  constructor(xpos, ypos, rad, xvel, yvel, col) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.rad = rad;
    this.xvel = xvel;
    this.yvel = yvel;
    this.col = col;
  }
  render() {
    fill(this.col);
    circle(this.xpos, this.ypos, this.rad);
  }
  move() {
    
    this.yvel += gravity;
    this.ypos += this.yvel;
    this.xpos += this.xvel;
    this.collide();
  }
  collide() {
    if (this.ypos >= height - this.rad / 2) {
      // ground drag
      if (this.xvel > 0) {
        this.xvel -= 0.05;
      }
      // energy loss from collision
      if (this.yvel > 0){
        this.yvel -= 2
      }
      
      this.yvel = invert(this.yvel);
      this.ypos = height - this.rad / 2;
    }
    if (this.ypos <= 0 + this.rad / 2) {
      // energy loss from collision
      if (this.yvel > 0){
        this.yvel -= 2
      }
      this.yvel = invert(this.yvel);
      this.ypos = 0 + this.rad / 2;
    }
    if (this.xpos >= width - this.rad / 2) {
      // energy loss from collision
      if (this.xvel > 0) {
        this.xvel -= 2;
      }
      this.xvel = invert(this.xvel);
      this.xpos = width - this.rad / 2;
    }
    if (this.xpos <= 0 + this.rad / 2) {
      if (this.xvel > 0) {
        // energy loss from collision
        this.xvel -= 2;
      }
      this.xvel = invert(this.xvel);
      this.xpos = 0 + this.rad / 2;
    }
  }
}
