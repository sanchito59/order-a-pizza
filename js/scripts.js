function Pizza(size, toppings) {
    this.size = size,
    this.toppings = toppings,
    this.price = 0
}

Pizza.prototype.getPrice = function () {
    this.toppings.forEach(function(topping){
        this.price += 0.75;
    }) 
    if(this.size === 9){
        this.price += 9;
    } else if(this.size === 7){
        this.price += 7;
    } else if(this.size === 5){
        this.price += 5;
    } else {
        console.log('Please pick a size.');       
    }
    return this.price;
}


$(document).ready(function () {
    $('#orderForm').submit(function (event) {
        let toppingArray = [];
        event.preventDefault();
        console.log('Order Up!');
        const sizeSelect = parseInt($('option:selected').val());
        const toppingSelect = $('input[name="topping"]:checked').each(function(){
            toppingArray.push($(this).val());
        });
        toppingArray.push(toppingSelect);
        console.log(toppingArray);
        console.log(sizeSelect);
        console.log(toppingSelect.length);

        let pizza = new Pizza(sizeSelect, toppingArray);
        let price = pizza.getPrice();
        console.log(pizza);
        console.log(price);
  
        
        

    })
});