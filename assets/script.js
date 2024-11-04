// Selezione degli elementi del DOM
let sideIncrease = document.querySelector(".increase");
let sideDecrease = document.querySelector(".decrease");
let buttonReset = document.querySelector(".reset");
let number = document.querySelector(".number");
let currentValue = 0;

// Funzione per aggiornare il numero del contatore
function updateCounterNumber() {
    number.innerHTML = currentValue;
}

// Event Listener per decrementare il valore del contatore
sideDecrease.addEventListener("pointerdown", function(event) {
    currentValue -= 1;
    updateCounterNumber();

    let addOne = document.createElement("div");
    addOne.classList.add("popNumber");
    addOne.innerHTML = "- 1";
    addOne.style.left = (event.pageX - 10) + "px";
    addOne.style.top = (event.pageY - 10) + "px";

    document.body.append(addOne);

    // Animazione decremento
    setTimeout(() => {
        addOne.style.transform = 'translateY(-220%)';
    }, 0);

    setTimeout(() => {
        document.body.removeChild(addOne);
    }, 1000);
});

// Event Listener per incrementare il valore del contatore
sideIncrease.addEventListener("pointerdown", function(event) {
    currentValue += 1;
    updateCounterNumber();

    let addOne = document.createElement("div");
    addOne.classList.add("popNumber");
    addOne.innerHTML = "+ 1";
    addOne.style.left = (event.pageX - 10) + "px";
    addOne.style.top = (event.pageY - 10) + "px";

    document.body.append(addOne);

    // Animazione incremento
    setTimeout(() => {
        addOne.style.transform = 'translateY(-220%)';
    }, 0);

    setTimeout(() => {
        document.body.removeChild(addOne);
    }, 1000);
});

// Pulsante per resettare il valore del contatore
buttonReset.addEventListener("click", function() {
    currentValue = 0;
    updateCounterNumber();
});