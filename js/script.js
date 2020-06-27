let amount = document.querySelector(".js-amount");
let changeFrom = document.querySelector(".js-change");
let changeOn = document.querySelector(".js-changeOn");
let button = document.querySelector(".js-button");
let finalResult = document.querySelector(".finalResult");
let resetButton = document.querySelector(".js-resetButton");


let pln = 1.00;
let eur = 4.46;
let usd = 3.82;
let gbp = 4.93;
let result;

button.addEventListener("click", (event) => {
    event.preventDefault();

    switch (changeFrom.value) {
        case "pln":
            result = +amount.value * pln;
            break;
        case "eur":
            result = +amount.value * eur;
            break;
        case "usd":
            result = +amount.value * usd;
            break;
        case "gbp":
            result = +amount.value * gbp;
            break;
    }

    switch (changeOn.value) {
        case "pln":
            result /= pln;
            break;
        case "eur":
            result /= eur;
            break;
        case "usd":
            result /= usd;
            break;
        case "gbp":
            result /= gbp;
            break;
    }

    finalResult.innerText = result.toFixed(2);

    resetButton.addEventListener("click", () => {
        finalResult.innerHTML = "";
    })

})
