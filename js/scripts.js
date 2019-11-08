function Pizza(size, toppings) {
    this.size = size,
    this.toppings = toppings,
    this.price = 0
}

Pizza.prototype.getPrice = function () {
    const toppingNum = this.toppings.length;
    if(toppingNum <= 2){
        this.price += 0;
    } else {
    this.price += (toppingNum - 2) * 0.85;
    }
    if(this.size === 'Large'){
        this.price += 9;
    } else if(this.size === 'Medium'){
        this.price += 7;
    } else if(this.size === 'Personal'){
        this.price += 5;
    } else {
        console.log('Please pick a size.');       
    }
    return this.price.toFixed(2);
}

function toppingSubtotalCheck (arr){
    if(arr.length === 0){
        $('#toppingsSubtotalHeader').hide();
        $('#toppingSubtotal').hide();
    } else {
        $('#toppingsSubtotalHeader').show();
        $('#toppingSubtotal').show();
    }
}

$(document).ready(function () {
    $('#orderForm').submit(function (event) {
        event.preventDefault();
        let toppingArray = [];
        // $('.orderCart').fadeOut(200);
        $('.pizzaSubtotal').fadeIn();
        console.log('Order Up!');
        const sizeSelect = $('option:selected').val();
        const toppingSelect = $('input:checked').each(function(){ //declared but only used to gather and immediately push
            toppingArray.push($(this).val());
        });
        let receiptToppings = toppingArray.join(", ")
        let pizza = new Pizza(sizeSelect, toppingArray);
        let price = pizza.getPrice();
        console.log(pizza);
        console.log(price);
        $('#sizeSubtotal').html(sizeSelect);
        $('#toppingSubtotal').html('<li>' + receiptToppings + ' (' + toppingArray.length + ' x $0.85)</li>');
        $('#priceSubtotal').html(price);
        toppingSubtotalCheck(toppingArray);
    })
});