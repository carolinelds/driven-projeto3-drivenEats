let dish = "";
let drink = "";
let dessert = "";


function selectFood(item, ident){

    if (ident === ".dishes"){
        dish = item;
    }
    else if (ident === ".drinks"){
        drink = item;
    }
    else if (ident === ".desserts"){
        dessert = item;
    }

    //identify previous selected item of the same category
    const previousSelected = document.querySelector(ident + " .selected");
   
    // unselect previous selected item of the same category
    if (previousSelected !== null) {
        previousSelected.classList.remove("selected");
        const checkOn = previousSelected.querySelector("ion-icon");
        checkOn.classList.add("display-none");
    }

    // add green border to selected item
    item.classList.toggle("selected");

    // add checkmark to selected item
    const check = item.querySelector("ion-icon");
    check.classList.toggle("display-none");

    checkOrderButton();
}

function checkOrderButton(){

    // identify if there is one food selected in each category
    const dishSelected = document.querySelector(".dishes .selected");
    const drinkSelected = document.querySelector(".drinks .selected");
    const dessertSelected = document.querySelector(".desserts .selected");

    // return true or false whether there is one food selected in each category
    let status = (dishSelected !== null) && (drinkSelected !== null) && (dessertSelected !== null);

    // if true, disable old order button (grey) and enable newer one (green)
    if (status) {
        const disabled = document.querySelector(".order-button-disabled");
        disabled.classList.add("display-none");

        const enabled = document.querySelector(".order-button-enabled")
        enabled.classList.remove("display-none");
    }
}

function reviewOrder() {

    // enable review screen
    const reviewScreen = document.querySelector(".review-screen-container");
    reviewScreen.classList.remove("display-none");
    reviewScreen.classList.add("display-flex");

    let priceDish = fillInReviewData(".review-dish", dish);
    let priceDrink = fillInReviewData(".review-drink", drink);
    let priceDessert = fillInReviewData(".review-dessert", dessert);

    priceDish = parseFloat(priceDish.replace(",", "."));
    priceDrink = parseFloat(priceDrink.replace(",", "."));
    priceDessert = parseFloat(priceDessert.replace(",", "."));

    const totalPrice = document.querySelector(".review-screen span");

    totalPrice.innerHTML = (priceDish + priceDrink + priceDessert).toFixed(2).toString();

    totalPrice.innerHTML = totalPrice.innerHTML.replace(".", ",");
}

function fillInReviewData(reviewCategory, category) {

    // identify locations of names and prices to review 
    const reviewName = document.querySelector(reviewCategory + " p:first-of-type");
    const reviewPrice = document.querySelector(reviewCategory + " p:last-of-type");

    // fill in these locations with the respectives names and prices
    reviewName.innerHTML = category.querySelector("strong").innerHTML;
    reviewPrice.innerHTML = category.querySelector("span").innerHTML;

    return reviewPrice.innerHTML;
}

function cancel() {
    const reviewScreen = document.querySelector(".review-screen-container");
    reviewScreen.classList.remove("display-flex");
    reviewScreen.classList.add("display-none");
}

function order() {

    // get info from the user 
    const name = prompt("Qual o seu nome?");
    const address = prompt("E o seu endereço?");

    // get info about final dish, drink, dessert and price
    const finalDish = document.querySelector(".review-dish p:first-of-type");
    const finalDrink = document.querySelector(".review-drink p:first-of-type");
    const finalDessert = document.querySelector(".review-dessert p:first-of-type");
    const finalPrice = document.querySelector(".review-screen > div:nth-of-type(4) span")


    // get info about the plastic utensils option
    let plasticOption = "";
    if (document.getElementById("yes").checked) {
        plasticOption = "Sim";
    }
    else {
        plasticOption = "Não";
    }
   
    // write and format the text to send via WhatsApp
    let text = `Olá, gostaria de fazer o pedido:\n- Prato: ${finalDish.innerHTML}\n- Bebida: ${finalDrink.innerHTML}\n- Sobremesa: ${finalDessert.innerHTML}\nTotal: R\$ ${finalPrice.innerHTML}\n\nNome: ${name}\nEndereço: ${address}\n\n Gostaria de talheres/canudos de plástico: ${plasticOption}`;
    text = window.encodeURIComponent(text);

    // send order via WhatsApp
    let cellNumber = "5555984375147";
    window.open("https://wa.me/" + cellNumber + "?text=" + text, "_blank");

}

function happyTurtle() {
    if (document.getElementById("yes").checked) {
		document.getElementById("yes").checked = false;
	}

    const imageSad = document.querySelector(".review-screen img:last-of-type");
    imageSad.classList.add("display-none");

    const imageHappy = document.querySelector(".review-screen img:first-of-type");
    imageHappy.classList.remove("display-none");
}

function sadTurtle() {
    if (document.getElementById("no").checked) {
		document.getElementById("no").checked = false;
	}

    const imageSad = document.querySelector(".review-screen img:last-of-type");
    imageSad.classList.remove("display-none");

    const imageHappy = document.querySelector(".review-screen img:first-of-type");
    imageHappy.classList.add("display-none");
}

document.getElementById("yes").onchange = sadTurtle;
document.getElementById("no").onchange = happyTurtle;