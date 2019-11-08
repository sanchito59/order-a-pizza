function Pizza(size, toppings, deliveryCharge) {
    this.size = size,
    this.toppings = toppings,
    this.deliveryCharge = deliveryCharge;
    this.price = 0
}

// Pizza.prototype.deliveryCharge = function(){
//     $('.delivery').on('click', function () {
//         this.deliveryCharge = true;
//         console.log(this.deliveryCharge);
//         $('#deliveryTakeoutPage').fadeOut();
//         $('#orderPage').fadeIn();
//     })
//     return this.deliveryCharge;
// }

Pizza.prototype.getPrice = function () {
    const toppingNum = this.toppings.length;
    if (toppingNum <= 2) {
        this.price += 0;
    } else {
        this.price += (toppingNum - 2) * 0.85;
    }
    if(this.deliveryCharge === true){
        this.price += 3.75;
    } else if(this.deliveryCharge === false){
        this.price += 0;
    } else {
        console.log('Uh oh');     
    }
    if (this.size === 'Large ($9)') {
        this.price += 9;
    } else if (this.size === 'Medium ($7)') {
        this.price += 7;
    } else if (this.size === 'Personal ($5)') {
        this.price += 5;
    } else {
        console.log('Please pick a size.');
    }
    return this.price.toFixed(2);
}

function toppingSubtotalCheck(arr) {
    if (arr.length === 0) {
        $('#toppingsSubtotalHeader').hide();
        $('#toppingSubtotal').hide();
    } else {
        $('#toppingsSubtotalHeader').show();
        $('#toppingSubtotal').show();
    }
}

$(document).ready(function () {
    // console.log(this.deliveryCharge);
    $('#orderForm').submit(function (event) {
        event.preventDefault();
        let toppingArray = [];
        $('.pizzaSubtotal').fadeIn();
        const sizeSelect = $('option:selected').val();
        const toppingSelect = $('input[name="topping"]:checked').each(function () { //declared but only used to gather and immediately push
            toppingArray.push($(this).val());
        });
        const cheeseRadio = $("input:radio:checked").prop("checked", true).val();
        console.log(cheeseRadio);
        const receiptToppings = toppingArray.join(", ")
        let pizza = new Pizza(sizeSelect, toppingArray, true, cheeseRadio);
        const price = pizza.getPrice();
        console.log(pizza);
        console.log(price);
        $('#sizeSubtotal').html(sizeSelect);
        $('#toppingSubtotal').html('<li>' + receiptToppings + ' (' + (toppingArray.length) + ' x $0.85)</li>');
        $('#priceSubtotal').html(price);
        toppingSubtotalCheck(toppingArray);
    })
});