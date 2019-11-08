function Pizza(size, toppings) {
    this.size = size,
    this.toppings = toppings,
    this.price = 0
}

Pizza.prototype.getPrice = function () {
    const toppingNum = this.toppings.length;
    this.price += toppingNum * 0.85;
    if(this.size === 9){
        this.price += 9;
    } else if(this.size === 7){
        this.price += 7;
    } else if(this.size === 5){
        this.price += 5;
    } else {
        console.log('Please pick a size.');       
    }
    return this.price.toFixed(2);
}

$(document).ready(function () {
    $('#orderForm').submit(function (event) {
        event.preventDefault();
        let toppingArray = [];
        console.log('Order Up!');
        const sizeSelect = parseInt($('option:selected').val());
        const toppingSelect = $('input:checked').each(function(){
            toppingArray.push($(this).val());
        });
        
        let pizza = new Pizza(sizeSelect, toppingArray);
        let price = pizza.getPrice();
        console.log(pizza);
        console.log(price);
    })
});