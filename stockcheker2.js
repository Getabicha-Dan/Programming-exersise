/*Use the array of products from the previous exercise. 
Write a function that returns the products that are available in stock. */



let phoneStore=[{name: "Iphone 13", price: 1000, inStock:15},
                {name: "Iphone 10", price: 900, inStock:0},
                {name: "Samsung 22", price: 1200, inStock:9},
                {name: "OnePlus Pro", price: 850, inStock:0},
                {name: "Nokia Note", price: 950, inStock:8},
                {name: "Iphone 10", price: 1000, inStock:12}];

function stockCheker2(phoneStore){
    for(i = 0;i < phoneStore.length; i++){

       if(phoneStore[i].inStock > 0){
        console.log(phoneStore[i].name + ' is availbel in stock.')
        } else{
            console.log(phoneStore[i].name + ' is out of stock.')
        }
    }
}
stockCheker2(phoneStore);
