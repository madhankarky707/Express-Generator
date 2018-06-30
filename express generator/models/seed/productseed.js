var Product  = require ('../models/product');
var mongoose = require('mongoose')

mongoose.connect('localhost:27017/product')

var Products = [
 new Product({
    image: '/bootstrap/images/kittens.jpg',
    title: 'kitten',
    description : 'Awesome Game!!!!',
    price : 50
}),

new Product({
    image: '/bootstrap/images/kittens.jpg',
    title: 'kit',
    description : 'Awesome Game!!!!',
    price : 150
}),

new Product({
    image: '/bootstrap/images/kittens.jpg',
    title: 'cat',
    description : 'Awesome Game!!!!',
    price : 250
}),

new Product({
    image: '/bootstrap/images/kittens.jpg',
    title: 'kitty',
    description : 'Awesome Game!!!!',
    price : 350
}),

];

var a=0;

for(var i =0 ; i<Products.length ; i++){
    a++
    if(a === Products.length){

        Product[i].save(function(){
            Exit()
        
        })

    }
}

function Exit(){
    mongoose.disconnect();
}