
/*Let's write a program that filters out products that are out of stock.
Write a function that takes an array of products as a parameter. 
The product should be an object with name, price, and stockAmount. 
Add multiple products to the array, with varying stock amount, 
where some of the products have stock amount 0. 

Return the total sum of all the items in stock. 

e.g. if prod-1 has 4 items, prod-2 has 6, prod-3 has 5 => 
total should be 4+6+5=15*/



let phoneStore=[{name: "Iphone 13", price: 1000, inStock:15},
                {name: "Iphone 10", price: 900, inStock:0},
                {name: "Samsung 22", price: 1200, inStock:9},
                {name: "OnePlus Pro", price: 850, inStock:0},
                {name: "Nokia Note", price: 950, inStock:8},
                {name: "Iphone 10", price: 1000, inStock:12}];

function stockCheker(phoneStore){
     
      let totalStock=0;
      for (i = 0; i < phoneStore.length; i++){ 
           totalStock = totalStock + phoneStore [i].inStock;
      }
      return totalStock;

  }
  
stockCheker(phoneStore);

 







