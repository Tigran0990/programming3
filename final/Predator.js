let LivingCreature = require('./LivingCreature')


module.exports=class predator extends LivingCreature {
    constructor(x, y) {
       super(x,y)
        this.energy = 25;
        this.directions = [];
 
    }

 
    mul() {
        let emptyCelss = this.chooseCell(0)
        let newCell = emptyCelss[Math.floor(Math.random() *emptyCelss. length )]
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[newY][newX] = 3
            let newGr = new predator(newX, newY)
            PredatorArr.push(newGr)
            this.energy = 25
        }
        if (weath == "winter") {
            this.energy -= 2
            this.multiply -= 2

        }
        if (weath == "spring") {
            this.energy +=3
            this.multiply += 3
        }
        if (weath == "summer") {
            this.energy += 5
            this.multiply += 5
        }
        if (weath == "autaumn") {
            this.energy--
            this.multiply--
        }
    }
 
    move() {
        this.energy--
        let emptyCelss = this.chooseCell(0)
        let newCell = emptyCelss[Math.floor(Math.random() *emptyCelss. length )]
        if (newCell && this.energy >= 0) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        } else {
            this.die()
        }
    }
 
    eat() {
        let emptyCelss = this.chooseCell(2)
        let newCell = emptyCelss[Math.floor(Math.random() *emptyCelss. length )]
        if (newCell) {
            this.energy++
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            if (this.energy >= 30) {
                this.mul()
            }
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
 
        } else {
            this.move()
        }
    }
 
    die() {
        matrix[this.y][this.x] = 0
        for (var i in PredatorArr) {	
            if (this.x == PredatorArr[i].x && this.y == PredatorArr[i].y) {
                PredatorArr.splice(i, 1);
                break;
            }
        }
    }
}

