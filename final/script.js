var socket = io()


function setup() {
   let side = 10
    createCanvas(60 * side, 60 * side );
    



}


function nkarel(matrix) {
for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            } else if (matrix[y][x] == 0) {
                fill("#acacac");
            } else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red")
            }
            else if (matrix[y][x] == 4) {
                fill("blue")

            }
            else if (matrix[y][x] == 5) {
                fill("black")
            }
            else if (matrix[y][x] == 6) {
                fill("orange")

            }


            rect(x * side, y * side, side, side);
        }
    }


}
socket.on("send matrix", nkarel )