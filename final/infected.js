let LivingCreature = require('./LivingCreature')


module.exports=class Infected extends LivingCreature {
    constructor(x, y) {
        super(x,y)
        this.energy = 10;
        this.directions = [];

    }
    getNewCoordinates() {
        
    }

    chooseCell(character) {
        this.getNewCoordinates()
        return super.chooseCell(character);
    }

    

    move() {
        let emptyCelss = this.chooseCell(0)
        let newCell = emptyCelss[Math.floor(Math.random() *emptyCelss. length )]
        if (newCell && this.energy >= 0) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        }
    }
}