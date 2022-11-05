var socket = io()


var side = 10
function setup() {
    createCanvas(60 * side, 60 * side );
    



}


function nkarel(matrix) {
for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
   obj = matrix[y][x]
            if (obj == 1){
                if(weath == "summer") {
                fill("green");
            }else if (weath == "autumn") {
                fill("yellow");
            }else if (weath == "winter") {
                fill("white");
            }else if (weath == "spring") {
                fill("orange");
            }
        }else if (obj == 2) {
                fill("yellow");
            }else if (obj == 0){
                fill("grey")
            }
            else if (obj == 3) {
                fill("purple")
                
            }
            rect(x * side, y * side, side, side);
        }
    }
}

        socket.on('send matrix', nkarel)
 

        function killInfected() {
            socket.emit("kill Infected")
        }
        function spawnGrass() {
            socket.emit("add Grass")
        }
        function spawnGrassEater() {
            socket.emit("add grassEater")
        }
        function spawnHunter() {
            socket.emit("add hunter")
        }