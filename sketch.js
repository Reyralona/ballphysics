const [width, height] = [800,600]
var balls = []

function setup() {
  createCanvas(width, height)
  // ball = new Ball(30, 30, 30, 5, 5, color(255, 0, 0))
  
  for(let i = 0; i < 1; i++){
    let x = round(random(0, width))
    let y = 0
    let ra = round(random(30, 50))
    let xv = round(random(5, 25))
    let yv = round(random(5, 25))
    let col = color((round(random(0, 255))),(round(random(0, 255))),(round(random(0, 255))))
    let ball = new Ball(x, y, ra, xv, yv, col)
    balls.push(ball)
    
  }
  
}

function draw() {
  background(0);
  for(let i = 0; i < balls.length; i++){
    balls[i].render()
    balls[i].move()
  }
  
}
