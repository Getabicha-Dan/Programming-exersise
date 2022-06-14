/*Use the array of products from exercise-14. 
Write a function that takes the products and a product name.
	The function then return a product array that doesn't include 
	the product with the given name. 
	(The function deletes the given product name if it exists)*/
    
    let phoneStore=[{name: "Iphone 13", price: 1000, inStock:15},
    {name: "Iphone 10", price: 900, inStock:0},
    {name: "Samsung 22", price: 1200, inStock:9},
    {name: "OnePlus Pro", price: 850, inStock:0},
    {name: "Nokia Note", price: 950, inStock:8},
    {name: "Iphone 11", price: 1000, inStock:12}];

function stockCheker3(phoneStore,nameProduct){
let phoneStoreNew = [ ] ;

for(i=0;i < phoneStore.length; i++){

if(nameProduct !== phoneStore[i].name){

phoneStoreNew.push(phoneStore[i]);             
} 
}
return phoneStoreNew;
}
stockCheker3(phoneStore,"Iphone 11");
