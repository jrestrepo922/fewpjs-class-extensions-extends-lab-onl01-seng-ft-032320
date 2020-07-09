// Your code here
class Polygon{
    constructor(sidesArray){
        this.sidesArray = sidesArray
    }

    get countSides(){
        return this.sidesArray.length
    }

    get perimeter(){
        let sum = 0
        this.sidesArray.forEach(element => {
            sum = element + sum
        });
        return sum
    }

}


class Triangle extends Polygon {
    get isValid(){
        // create 3 if statements and one else 
        if (((this.sidesArray[0] + this.sidesArray[1]) > this.sidesArray[2]) && ((this.sidesArray[0] + this.sidesArray[2]) > this.sidesArray[1] ) && ((this.sidesArray[1] + this.sidesArray[2]) > this.sidesArray[0] ) ){
            return true 
        } else {
            return false 
        }
    }
}

class Square extends Polygon {
    get isValid(){
        if(this.sidesArray[0] === this.sidesArray[1] && this.sidesArray[1] === this.sidesArray[2] && this.sidesArray[2] === this.sidesArray[3]){
            return true
        } else {
            return false 
        }
    }

    get area(){
        return this.sidesArray[0] ** 2
    }
}

triangle = new Triangle( [ 5, 5, 5 ] )
triangle2 = new Triangle( [ 15, 10, 1 ] )

triangle.isValid