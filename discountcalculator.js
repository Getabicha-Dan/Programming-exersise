/*Write a function that takes price and discount percentage as parameters and 
calculates the discounted price. 
The function should give an error message if the price or percentage are < 0. 
(e.g. If price = 30€, discount = 50%, new price should be 15€)

15 = 30 - (30 * (50 / 100));*/

function discountedPrice(price,dsPercentage){

    PriceAfterDiscount = price - (price * (dsPercentage / 100));

    if (price < 0 || dsPercentage < 0){
        PriceAfterDiscount = 'Error';

        return PriceAfterDiscount;
    }
 }

discountedPrice(70,30);
discountedPrice(70,-30);
discountedPrice(-70,30);
