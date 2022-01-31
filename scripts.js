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