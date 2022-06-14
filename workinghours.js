/*Sum of working hours
Write a function that takes a parameter array of working hours 
(e.g. [4, 5, 7.5, 8.5, 9, 6]), 
the function should return the sum of the working hours.*/


function totalHour(whArray){
    let sumHr=0;
    for (i = 0; i < whArray.length; i++){ 
         sumHr = sumHr + whArray [i];
      
    }
    return sumHr;
}
totalHour([4, 5, 7.5, 8.5, 9, 6]);
