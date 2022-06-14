/*Write a function that takes a shape as a param and returns the area of the shape.
Pass shape as an object, 
e.g. {type: "rectangle", sides: { width: 5, height: 6} }

calculate area based on shape.type and shape.sides or the attribute you define.
Implement the area calculation for a triangle, circle and a square.*/

//The instruction doesn't mention an array. You have to pass one object to the function. You can define many shapes, but you still have to use them one by one.3,



let shapeT=[{type: "triangel", sides: { base: 5, height: 6}},{type: "circel", sides: { radius:2}},{type: "square", sides: { base:7}}];

function areaShape(shapeT){

    if(shapeT[0].type == "triangel"){

        triangelA = shapeT[0].sides.base * shapeT[0].sides.height / 2;
        return triangelA;

    } else if (shapeT[1].type == "circel" ) {

        circelA=3.14 * shapeT[1].sides.radius**2;
        return circelA;

    } else if(shapeT[2].type == "square"){  

        squareA = shapeT[2].sides.base **2;
        return squareA;
    } else{
        console.log('Shape type is not in the domain!')
    }
}

areaShape({type: "triangel", sides: { base: 5, height: 6}});




