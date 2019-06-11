class eaterr extends eater{

    chooseCell(character) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    //qayluma
    move() {

        //yntruma vandak
        var newCell = random(this.chooseCell(0));

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;


            this.y = newY;
            this.x = newX;
            this.energy--;
            if (this.energy <= 0) {
                this.die();
            }

        }

    }
    eat() {


        var newCell = random(this.chooseCell(2));

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;

            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }


            this.y = newY;
            this.x = newX;
            this.energy += 3;

        }
    }
    mul() {

        var newCell = random(this.chooseCell(0));

        if (this.energy >= 10 && newCell) {
            var newGrassEaterEater = new GrassEaterEater(newCell[0], newCell[1], this.index);
            grassEaterEaterArr.push(newGrassEaterEater);
            matrix[newCell[1]][newCell[0]] = 3;
            this.energy = 5;
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in grassEaterEaterArr) {
            if (grassEaterEaterArr[i].y == this.y && grassEaterEaterArr[i].x == this.x) {
                grassEaterEaterArr.splice(i, 1);
            }
        }
    }


}