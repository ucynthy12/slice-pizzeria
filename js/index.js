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

    PizzaChoice.prototype.pizzaPrice = function () {
        return (size[this.size] + crust[this.crust] + this.toppings) * this.qyt
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

    });
    for (i = 0; i < toppingSelected.length; i++) {
        totalToppings += parseInt(toppings[toppingSelected[i]]);

    };
    var newPizza = new PizzaChoice(sizeSelected, crustSelected, totalToppings, qytSelected);
    var boomboom = parseInt(newPizza.pizzaPrice());
    console.log(boomboom);

    $('.list-group').show();
    $('.sizeSelected').text(sizeSelected);
    $('.crustSelected').text(crustSelected);
    $('.toppingSelected').text(toppingSelected);
    $('.qytSelected').text(qytSelected);
    var answer = $("button, input[type='button'][class='delivery'] ");
    var answerNo = $("button, input[type='button'][class='no'] ");
    console.log(answer);
    if (answer = 'yes') {
        var total = parseInt(boomboom + 1000);
        $('.del').text('yes');
        $('.sub').text(total)

    } else if (answerNo = 'no') {
        $('.del').text('no');
        $('.sub').text(boomboom);

    };
    $('button#checkout').click(function () {
        $('#small').hide();
        $('#big').hide();

        var inputName = $('input#name').val();
        var inputLocation = $('input#location').val();

        if (inputName == " ") {
            alert('enter your name');

        } else if (inputLocation == '') {
            alert('enter your location for delivery');
            $('#small').show();
        } else {
            $('#big').show();
            $('.name').text(inputName);
            $('.location').text(inputLocation);
            if ($("button,input[type=button][class=delivery]")) {
                $('.totalPrice').text(total);
            } else {
                $('.totalPrice').text(boomboom);
            }
        }
        resetFields();
    })
    resetFields();


})
function resetFields() {
    $('.sizeSelected').val(' ');
    $('.crustSelected').val(' ');
    $('.toppingSelected').val(' ');
    $('.qytSelected').val(' ');
    $('.subTotal').val(' ');
    $('.list-group').val(' ');
}


$(function () {
    $('button.delivery').click(function () {
        $('#option').show(function (event) {
            event.preventDefault();
        }
        );
    })

})
$(function () {
    $('button#no').click(function () {
        $('#option').hide();
    })

})




$(function () {
    $('#close').click(function () {
        $("#big").hide();
        resetFields();
    })
   
})

$(function () {
    $('button#cancel').click(function () {
        $('#small').hide();
    });
   
})

