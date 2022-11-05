let LivingCreature = require('./LivingCreature')


module.exports = class Grass extends LivingCreature{
    constructor(x,y){
        super(x,y)
    }

    mul() {
        this.multiply++
        let emptyCelss = this.chooseCell(0)
        let newCell = emptyCelss[Math.floor(Math.random() *emptyCelss. length )]
        if (this.multiply >= 8 && newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[newY][newX] = 1
            let newGr = new Grass(newX, newY)
            grassArr.push(newGr)
            this.multiply = 0
        }
        if (weath == "winter") {
            this.energy -= 2;
            this.multiply -= 2;
        }
        if (weath == "spring") {
            this.energy += 5;
            this.multiply += 5;
        }
        if (weath == "summer") {
            this.energy += 3;
            this.multiply += 3;
        }
        if (weath == "autumn") {
            this.energy--;
            this.multiply--;
    }
}
    }










