function Pizza(size, toppings) {
    this.size = size,
    this.toppings = toppings,
    this.price = 0
}

Construction.prototype.getPrice = function () {
    this.toppings.forEach(function(topping){
        this.price += 0.75;
    }) 
    if(this.size === 'Large'){
        this.price += 9;
    } else if(this.size === 'Medium'){
        this.price += 7;
    } else if(this.size === 'Personal'){
        this.price += 5;
    } else {
        console.log('Please pick a size.');       
    }
}


$(document).ready(function () {
    $('#orderForm').submit(function (event) {
        event.preventDefault();

    })
});