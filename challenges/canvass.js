let canvas = document.getElementById("canvas")
    //creates canvas element
let painter = canvas.getContext("2d")
    //painter draws in 2d
painter.fillStyle = "#000000"
painter.fillRect(0,0,400,400)



let i = 0

//while(i<13){
    //painter.fillRect(x, x, 20, 20)
    
    //x = x + 30
    //y = y + 30
    //i=i+1
    
//}
 let x 
 let y 
for(let i = 0; i <13; i=i+1){
    x = 10
    painter.fillStyle = "#00FF00"
    painter.fillRect(x, 10, 20, 20)
    x = x + 10

}
