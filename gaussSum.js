/*Gauss's Sum
Create a program that:
Calculates the sum of 1+2+3+4...+98+99
Prints the sum of 1+2+3+4...+98+99
Output: "The sum is 4950"*/

let totalSum = 0;
for(i = 1;i <= 99; i++){

    totalSum = totalSum + i;     
    }
console.log('The sum is  '+ totalSum);