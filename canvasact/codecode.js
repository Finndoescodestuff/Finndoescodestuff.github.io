let canvas = document.getElementById("canvas")
let painter = canvas.getContext("2d")

painter.fillStyle = "#000000"
painter.fillRect(0,0,400,400)
painter.fillStyle = "#FF0000"
painter.fillRect(10,10,20,20)

let canvas2 = document.getElementById("canvas2")
let painter2 = canvas2.getContext("2d")
let painter3 = canvas2.getContext("2d")

painter2.fillStyle = "#000000"
painter2.fillRect(0,0,400,400)
painter2.fillStyle = "#FF0000"
painter2.fillRect(10,10,20,20)

for (let c = 0; c < 13 ; ++c ){
    for (let r = 0; r < 13; ++r){
        painter2.fillRect (10+ c*30, 10+r*30, 20, 20)
    }
}

let s = 10 
let t = 10
let i = 0
while(i<13){
    painter.fillRect(s, t, 20, 20)
    s = s + 30
    t = t + 30
    
    i=i+1
}

let xax = 370
let yax = 10
let k = 0 
while(k<13){
    painter.fillRect(xax, yax, 20, 20)
    xax = xax - 30
    yax = yax + 30
    k=k+1
}