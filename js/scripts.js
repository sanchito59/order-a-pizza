function Pizza(size, toppings, deliveryCharge, price) {
    this.size = size,
    this.toppings = toppings,
    this.deliveryCharge = deliveryCharge,
    this.price = 0
}

Pizza.prototype.getPrice = function () {
    const toppingNum = this.toppings.length;
    if (toppingNum <= 2) {
        this.price += 0;
    } else {
        this.price += (toppingNum - 2) * 0.85;
    }
    if (this.deliveryCharge === true) {
        this.price += 3.75;
    } else if (this.deliveryCharge === false) {
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
    let deliveryCharge = false;
    let deliveryFeeSubtotal = 0;
    $('.delivery').on('click', function () {
        deliveryCharge = true;
        deliveryFeeSubtotal += 3.75
        $('#deliveryTakeoutPage').fadeOut();
        $('#orderPage').fadeIn();
        return deliveryCharge, deliveryFeeSubtotal;
    })
    $('.takeout').on('click', function () {
        deliveryCharge = false;
        $('#deliveryTakeoutPage').fadeOut();
        $('#orderPage').fadeIn();
        return deliveryCharge;
    })
    $('#orderForm').submit(function (event) {
        event.preventDefault();
        let toppingArray = [];
        $('.pizzaSubtotal').fadeIn();
        const sizeSelect = $('option:selected').val();
        const toppingSelect = $('input[name="topping"]:checked').each(function () { //declared but only used to gather and immediately push
            toppingArray.push($(this).val());
        });
        const cheeseRadio = $("input:radio:checked").prop("checked", true).val();
        const receiptToppings = toppingArray.join(", ")
        let pizza = new Pizza(sizeSelect, toppingArray, deliveryCharge, cheeseRadio);
        const price = pizza.getPrice();
        $('#sizeSubtotal').html(sizeSelect);
        $('#toppingSubtotal').html('<li>' + receiptToppings + ' (' + (toppingArray.length) + ' x $0.85)</li>');
        $('#deliveryFeeSubtotal').html(deliveryFeeSubtotal);
        $('#priceSubtotal').html(price);
        toppingSubtotalCheck(toppingArray);
    })
});