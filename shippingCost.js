/*Shipping cost
You want to buy something from an online shop. 
The seller charges different prices for shipping cost based on location. 
The shipping cost is 5€ for EU,  15€ for US & Canada, 20€ else where. 
Write a function that takes the cost of the product and location. 
It should print the amount of money you have to pay as:
"You have to pay a total of 35€, 30€ for the product and 5€ for shipping"*/



function totalCost(productC,location){
   
    if (location == 'EU') {

        shippingC = 5;
        tCost= productC + shippingC;
        console.log('You have to pay a total of ' + tCost+ '€ , ' + productC +'€ for the product and ' + shippingC+'€ for shipping.');
        
    } else if(location == 'US' || 'Canada') {

        shippingC=15;
        tCost = productC + shippingC;
        console.log('You have to pay a total of ' + tCost+ '€ , ' + productC +'€ for the product and ' + shippingC+ '€ for shipping.');

    }else{

        shippingC === 20;
        tCost=productC + shippingC;
        console.log('You have to pay a total of ' + tCost+ '€ , ' + productC +'€ for the product and ' + shippingC+ '€ for shipping.');
    }
    return tCost;
}
totalCost(50,'US');

