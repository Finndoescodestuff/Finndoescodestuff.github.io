let canvas = document.getElementById("canvas")
let painter = canvas.getContext("2d")

let big = 10
let small = 4
let l = 400
let h = 400
for (let r = 0; r < l/big; ++r){
    for (let c = 0; c < h/big; ++c){
        if ((r+c)%2 == 0){
            painter.fillStyle= "#BB00BB"
        } else {
            painter.fillStyle = "#00BBBB"
        }
        painter.fillRect(c*big, r*big, big, big)
}}

for (let r = 0; r < l/big -1; ++r){
    for (let c = 0; c < h/big; ++c){
        if ((r+c)%2 == 0){
            painter.fillStyle= "#000000"
        } else if ((r+c)%2 == 1) {
            painter.fillStyle = "#FFFFFF"
        }
        if(r > 1/4*l/big && r < 3/4*l/big && c > 1/4*h/big && c < 3/4*h/big){
            if (painter.fillStyle === "#000000"){
                painter.fillStyle = "#FFFFFF"
            } else {
                painter.fillStyle = "#000000"
            }
        }
        painter.fillRect(c*big + big-small/2, r*big + big-small/2, small, small)
}}
