function selectFood(item, ident){

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

    const reviewScreen = document.querySelector(".review-screen-container");
    reviewScreen.classList.remove("display-none");
    reviewScreen.classList.add("display-flex");



}
