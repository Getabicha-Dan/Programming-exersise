/*Use the array of products from exercise-14. 
Write a function that takes the products and a product name.
	The function then should return true/false if that product name exists
	in the products array.*/




    let phoneStore=[{name: "Iphone 13", price: 1000, inStock:15},
    {name: "Iphone 10", price: 900, inStock:0},
    {name: "Samsung 22", price: 1200, inStock:9},
    {name: "OnePlus Pro", price: 850, inStock:0},
    {name: "Nokia Note", price: 950, inStock:8},
    {name: "Iphone 10", price: 1000, inStock:12}];

function stockCheker3(phoneStore,nameProduct){
for(i=0;i < phoneStore.length; i++){

if(nameProduct == phoneStore[i].name){

    console.log('True: Product exists')

} else{

    console.log('False: Product does not exists')
}

}
}
stockCheker3(phoneStore,"Iphone 12");
