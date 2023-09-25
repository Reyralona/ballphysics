const [width, height] = [800,600]
var balls = []
var physicsEnabled = true

function setup() {
  createCanvas(width, height)
  createballs() 
}

function createballs(){
  for(let i = 0; i < 1; i++){
    let x = round(random(0, width))
    let y = 0
    let ra = round(random(20, 50))
    let xv = round(random(5, 25))
    let yv = round(random(5, 25))
    let col = color((round(random(0, 255))),(round(random(0, 255))),(round(random(0, 255))))
    let ball = new Ball(x, y, ra, xv, yv, col)
    balls.push(ball)
  }
}

function resetballs(){
  balls = []
  createballs()
}
function addball(){
  createballs()
}

function draw() {
  background(0);
  for(let i = 0; i < balls.length; i++){
    balls[i].render()
    if(physicsEnabled){
      balls[i].move()
    }
    
  }
  
}

const reset = document.querySelector("#reset")
reset.onclick = () => {
  resetballs()
}
const add = document.querySelector("#add")
add.onclick = () => {
  addball()
}

const but = document.querySelector("#togglephysics")
but.onclick = () =>{
  !physicsEnabled ? but.innerText = "Disable Physics" : but.innerText = "Enable Physics"
  physicsEnabled = !physicsEnabled
}