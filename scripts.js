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
}

