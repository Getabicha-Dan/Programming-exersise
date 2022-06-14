/*Write a simple calculator program that calculates 
the difference, sum or product of two numbers. 

The function takes as a parameter, the type of calculation to perform and two numbers.

Then based on the type of calculation given 
(addition, subtraction, multiplication, division), 
it performs the calculation and returns the result.  */




function calculator(typeCalculation,x,y){

    if(typeCalculation === 'Sum'){

        summation = x + y ;
        return summation;

    } else if(typeCalculation === 'Diffrence'){

      differ = x - y ;
      return differ;

    } else if (typeCalculation==='Product'){

        prodct = x * y ;
        return prodct;

    } else if(typeCalculation === 'Division'){

        div = x / y ;
        return div;
    }
}

calculator('Diffrence',3,6);


