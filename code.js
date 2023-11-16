
let brush = document.getElementById("c").getContext("2d")
let painter = document.getElementById("c").getContext("2d")
let size = 20 //square size
let h = 400 //canvas height
let w = 400 //canvas width
let x = w/2-size/2 //x of square
let y = 0 //y of square
let dy = 5 //increase along y
let dx = 5 //increase along x
let timer = null //timer id
let jumpImpact = 20 //speed increase upward
let g = 1 //gravity

let isLeft = false
let isRight = false
let isOnGround = false

document.addEventListener("keydown",onkeydown)
document.addEventListener("keyup", onkeyup)



drawBackground()
drawSquare()

function drawSquare () {
    brush.fillStyle = "#FF0000"
    if (x < 0){
        brush.fillRect (w+x, y, size, size)
        brush.fillRect (x, y, size, size)
    }else if (x > w - size){
        brush.fillRect (x-w, y, size, size)
        brush.fillRect (x, y, size, size)
    } else{
        brush.fillRect (x, y, size, size)
    }
    
}

function drawFrame (){ //falling
    dy += g
    y += dy

    if (isLeft){
        x -= dx
    }
    if (isRight){
        x += dx
    }
    if (y > h - size){
        y = h - size
        dy = 0
        isOnGround = true
    } else {
        isOnGround = false
    }
    if (x > w ){
        x = 0
    }
    if (x < -size){
        x = w-size
    
    }

    drawBackground()
    drawSquare()
}


function drawBackground () {
    brush.fillStyle = "#FFDDFF"
    brush.fillRect (0,0,w,h)
}



function onkeydown(e){
    setInterval (drawFrame, 400)

    if (e.key === "ArrowDown"){ //ArrowLeft, ArrowRight, ArrowDown, ArrowUp
        clearInterval(timer)
        y += dy
        timer = setInterval(drawFrame, 400)
    }else if (e.key === "ArrowLeft"){
        isLeft = true
    }else if (e.key === "ArrowRight"){
        isRight = true
    }else if (e.key === " "){
        if (isOnGround){
            dy -= jumpImpact
        }
         
    }
}
function onkeyup(e){
    if (e.key === "ArrowLeft"){
        isLeft = false
    }else if (e.key === "ArrowRight"){
        isRight = false
    }else if (e.key === "ArrowUp"){
         
    }
}