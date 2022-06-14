/*Max/Min
Write a function that takes three numbers and write two more functions 
which calculate and return the largest and smallest of these numbers.
The first function should print what is returned from 
the functions largest and smallest. */


function leapCalcalculator(year){
    
    let condition1=byFour(year);
    let condition2=byHundered(year);
    let condition3=byfourHundred(year);

    if(condition1 == 0 && condition2 == 0 && condition3 == 0){

        console.log(' The year is a leap year ')
    } else {
     
        console.log(' The year is not a leap year ')
    }
}


function byFour(year){

    dby4 = year % 4;
    return dby4;
}


function byHundered(year){
    dby100 = year % 100;
    return  dby100;
}



function byfourHundred(year){
    dby400 = year % 400;
    return dby400;
}

leapCalcalculator(1956);





