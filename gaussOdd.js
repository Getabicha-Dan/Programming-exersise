/* Gauss's Odd Sum
Calculates the sum of 1+3+5+7...+99+101
Prints the sum of 1+3+5+7...+99+101
Output: "The sum is 2601"
(Source: https://github.com/py-study-group/beginner-friendly-programming-exercises/blob/master/exercises.md) */

let oddSum = 0;
for(j=1;j<=101;j+=2){
    oddSum = oddSum + j ; 
    
    }
console.log('The sum of odd is  '+ oddSum); 
