// CALCULATE FOR THE AREA, RADIUS, DIAMETER AND CIRCUMFERENCE OF CIRCLE

class Circle{
    constructor (radius, diameter){
        this.radius = radius;
        this.diameter = diameter
    }
    getRadius(){
        return this.diameter / 2
    } 
    getDiameter(){
        return this.radius * 2
    }
    getCircumference(){
        return  Math.PI * this.diameter
    }
    getArea(){
        return Math.PI * this.radius **2
    }
}

const totalCircle = new Circle( 2, 6)
console.log(totalCircle.getRadius());
console.log(totalCircle.getDiameter());
console.log(totalCircle.getCircumference().toFixed(4));
console.log(totalCircle.getArea().toFixed(4));

