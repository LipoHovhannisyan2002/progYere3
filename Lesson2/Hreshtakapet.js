

class hreshtakich extends eater{

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
   
    eat() {
        var newCell1 = this.chooseCell(1);
        var newCell2 = this.chooseCell(2);
        var newCell3 = this.chooseCell(3);
        var newCell4 = this.chooseCell(4);
        var newCell = random(newCell1.concat(newCell1, newCell2, newCell3, newCell4));

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            if (grassEaterArr.length < grassEaterEaterArr.length) {
                matrix[this.y][this.x] = 2;
                let gE = new GrassEater(this.x, this.y, 2);
                grassEaterArr.push(gE);
            }
            else if (grassEaterArr.length > grassEaterEaterArr.length) {
                matrix[this.y][this.x] = 3;
                let gEe = new GrassEaterEater(this.x, this.y, 3);
                grassEaterEaterArr.push(gEe);

            }


            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;


            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            for (var i in mardArr) {
                if (newX == mardArr[i].x && newY == mardArr[i].y) {
                    mardArr.splice(i, 1);
                    break;
                }
            }

            for (var i in grassEaterEaterArr) {
                if (newX == grassEaterEaterArr[i].x && newY == grassEaterEaterArr[i].y) {
                    grassEaterEaterArr.splice(i, 1);
                    break;
                }
            }
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }


            this.y = newY;
            this.x = newX;
            this.energy += 1;

        }
    }
    mul() {

        var newCell = random(this.chooseCell(0));

        if (this.energy >= 15 && newCell) {
            var newMard = new Hreshtakapet(newCell[0], newCell[1], this.index);
            mardArr.push(newMard);
            matrix[newCell[1]][newCell[0]] = 5;
            this.energy = 10;
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in mardArr) {
            if (mardArr[i].y == this.y && mardArr[i].x == this.x) {
                mardArr.splice(i, 1);
            }
        }
    }


}




