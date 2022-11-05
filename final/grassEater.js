let LivingCreature = require('./LivingCreature')


module.exports=class GrassEater extends LivingCreature {
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
            matrix[newY][newX] = 2
            let newGr = new grassEater(newX, newY)
            grassEaterArr.push(newGr)
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
            matrix[newY][newX] = matrix[this.y][this.x]///////2
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        } else {
            this.die()
        }
    }

    eat() {
        let emptyCelss = this.chooseCell(1)
        let newCell = emptyCelss[Math.floor(Math.random() * emptyCelss.length)]
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
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }

        } else {
            this.move()
        }
    }

    die() {
        matrix[this.y][this.x] = 0
        for (var i in grassEaterArr) {
            if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1);
                break;
            }
        }
    }
}