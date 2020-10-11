$(function () {
    $("a#kgl").click(function () {
        $("#small").show();
    })
})

$('.total').last().click(function () {

    var size = {
        small: 7000,
        medium: 9000,
        large: 12000
    };

    var crust = {
        crispy: 500,
        stuffed: 800,
        gluten: 1000
    };
    var toppings = {
        pepperoni: 500,
        mushroom: 1700,
        chicken: 2400,
        pinneaples: 1300,
        ham: 1700,
        extraCheese: 1700
    };

    function PizzaChoice(size, crust, toppings, qyt) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.qyt = qyt;
    }

    var sizeSelected = $("select#size option:checked").val();
    var crustSelected = $('input[type=radio][name=crust]:checked').val();
    var toppingSelected = $("input[type=checkbox][name = toppings]:checked").val();
    var qytSelected = $('input[type=number]').val();
    var totalToppings = 0;
    var toppingSelected = [];
    $('input[name=toppings]:checked').each(function () {
        toppingSelected.push($(this).val());
        console.log(toppingSelected.join(','));

        for (i = toppingSelected[0] ; i < toppingSelected.length; i++) {
            totalToppings += toppings[toppingSelected[i]];
            console.log(totalToppings);
        };


    });
    var subTotal= 0;
    subTotal= "<ul class='list-group'>"+
    '<li class="list-group-item">Size Selected: '+' '+ sizeSelected+'</li>'+'<li class="list-group-item">Crust Selected: '+' '+ crustSelected+ '</li>'+'<li class="list-group-item">Toppings Selected: '+' '+toppingSelected+ '</li>'+
    '<li class="list-group-item">Qty Selected: '+' '+ qytSelected +' </li>'+'<li class="list-group-item">Subtotal: </li></ul>'
    // var newPizza = new PizzaChoice(sizeSelected, crustSelected, toppingSelected, qytSelected);
    // newPizza.prototype.pizzaPrice = function () { (size[sizeSelected] + crust[crustSelected] + totalToppings) * qytSelected }
    $('#total').append(subTotal);


})
$(function () {
    $('button#delivery').click(function () {
        $('#option').show(function (event) {
            event.preventDefault();
        }
        );
    })

})
$(function(){
    $('button#no').click(function () {
        $('#option').hide();
    })

})
$(function () {
    $('button#checkout').click(function () {
        var inputName = $('input#name').val();
        var inputLocation = $('input#location').val();
        if (inputName == "") {
            alert('enter your name');
        } else if (inputLocation = '') {
            alert('enter your location for delivery');
 
        }else{ 
            $('#big').show(function () {
            $('.name').text('inputName');
            $('.location').text('inputLocation');
            $('.totalPrice').text('totalPrice');
        })        
        }
        $('#small').hide();
    })

})
$(function () {
    $('#close').click(function () {
        $("#big").hide();
    })
})
$(function(){
    $('button#cancel').click(function(){
        $('#small').hide();
    })
})
