let LivingCreature = require('./LivingCreature')

module.exports = class Virus extends LivingCreature {

    constructor(x, y) {
        super(x, y)
        this.energy = 25;
        this.directions = [];

    }
   

    mul() {
        let emptyCelss = this.chooseCell(0)
        let newCell = emptyCelss[Math.floor(Math.random() * emptyCelss.length)]
        let newX = newCell[0]
        let newY = newCell[1]
        matrix[newY][newX] = 4
        let newGr = new Virus(newX, newY)
        VirusArr.push(newGr)
        this.energy = 30
    }

    move() {
        this.energy--
        let emptyCelss = this.chooseCell(0)
        let newCell = emptyCelss[Math.floor(Math.random() * emptyCelss.length )]
        let emptyCelss1 = this.chooseCell(0)
        let newCell1 = emptyCelss1[Math.floor(Math.random() * emptyCelss1.length )]
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
    let emptyCelss1 = this.chooseCell(3)
    let newCell = emptyCelss[Math.floor(Math.random() * emptyCelss.length )]
    let newCell1 = emptyCelss1[Math.floor(Math.random() * emptyCelss1.length )]


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

    } else if (newCell1) {
        this.energy++
        let newX = newCell1[0]
        let newY = newCell1[1]
        matrix[newY][newX] = matrix[this.y][this.x]
        matrix[this.y][this.x] = 6
        InfectedArr.push(new Infected(this.x, this.y))
        this.x = newX
        this.y = newY
        if (this.energy >= 30) {
            this.mul()
        }
        for (var i in PredatorArr) {
            if (newX == PredatorArr[i].x && newY == PredatorArr[i].y) {
                PredatorArr.splice(i, 1);
                break;
            }
        }

    } else {
        this.move()

    }

}


die() {
    matrix[this.y][this.x] = 0
    for (var i in VirusArr) {
        if (this.x == VirusArr[i].x && this.y == VirusArr[i].y) {
            VirusArr.splice(i, 1);
            break;
        }
    }
}
}










