function selectFood(item, ident){

    //identify previous selected item of the same category
    const previousSelected = document.querySelector(ident + " .selected");
   
    // unselect previous selected item of the same category
    if (previousSelected !== null) {
        previousSelected.classList.remove("selected");
        const checkOn = previousSelected.querySelector("ion-icon");
        checkOn.classList.add("checkmarkOff");
    }

    // add green border to selected item
    item.classList.toggle("selected");

    // add checkmark to selected item
    const check = item.querySelector("ion-icon");
    check.classList.toggle("checkmarkOff");

    checkOrderButton();
}

function checkOrderButton(){

    // identify if there is one food selected in each category
    const dishSelected = document.querySelector(".dishes .selected");
    const drinkSelected = document.querySelector(".drinks .selected");
    const dessertSelected = document.querySelector(".desserts .selected");

    // return true or false whether there is one food selected in each category
    let status = (dishSelected !== null) && (drinkSelected !== null) && (dessertSelected !== null);

    // if true, enable order button (green version)
    if (status) {
        const orderButton = document.querySelector(".order-button");

        orderButton.classList.add("enabled");
        orderButton.innerHTML = "Fechar pedido";
    }
}
