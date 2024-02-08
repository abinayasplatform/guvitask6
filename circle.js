
// Circle - Class
// Convert the UML diagram to Typescript class. - use number for double


class Circle {
    
    // radius: number;
    // color: string;

    constructor(radius= 1.0, color= "red") {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    toString() {
        return `Circle [radius=${this.radius}, color=${this.color}]`;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;         // Area of a circle = pi * r * r
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;       // circumference of a circle = 2 * pi * r
    }
}


let circle1 = new Circle();
console.log(circle1.toString()); 
console.log("Area:", circle1.getArea()); 
console.log("Circumference:", circle1.getCircumference()); 

console.log("---------------------------------------------------------------");

let circle2 = new Circle(2.5, "blue"); // set radius & color as parameters 
console.log(circle2.toString()); 
console.log("Area:", circle2.getArea()); 
console.log("Circumference:", circle2.getCircumference());

console.log("---------------------------------------------------------------");

let circle3 = new Circle();
circle3.setRadius(3); // to set the radius
circle3.setColor("green"); // to set the color
console.log(circle3.toString()); 
console.log("Area:", circle3.getArea()); 
console.log("Circumference:", circle3.getCircumference());

console.log("---------------------------------------------------------------");




             // output

// Circle [radius=1, color=red]
// Area: 3.141592653589793
// Circumference: 6.283185307179586
// ---------------------------------------------------------------
// Circle [radius=2.5, color=blue]
// Area: 19.634954084936208
// Circumference: 15.707963267948966
// ---------------------------------------------------------------
// Circle [radius=3, color=green]
// Area: 28.274333882308138
// Circumference: 18.84955592153876
// ---------------------------------------------------------------
