
let sideIncrease = document.querySelector(".increse");
let sideDecrease = document.querySelector(".decrease");
let buttonReset = document.querySelector(".reset")
let number = document.querySelector(".number");




sideDecrease.addEventListener("pointerdown", function(event){
    
    number.innerHTML = +number.innerHTML - 1;

    

    let addOne = document.createElement("div");

    addOne.classList.add("popNumber");
    addOne.innerHTML = "- 1";
    addOne.style.left = event.pageX - 10 + "px";
    addOne.style.top = event.pageY - 10 + "px";
    
    document.body.append(addOne);


    setTimeout(() => {
        addOne.style.transform = 'translateY(-220%)';
    }, 0);

    setTimeout(() => {
        document.body.removeChild(addOne);
    }, 1000);
    
})

sideIncrease.addEventListener("pointerdown", function(event){

    number.innerHTML = +number.innerHTML + 1;

    let addOne = document.createElement("div");

    addOne.classList.add("popNumber");
    addOne.innerHTML = "+ 1";
    addOne.style.left = event.pageX - 10 + "px";
    addOne.style.top = event.pageY  - 10 + "px";
    
    document.body.append(addOne);


    setTimeout(() => {
        addOne.style.transform = 'translateY(-220%)';
    }, 0);

    setTimeout(() => {
        document.body.removeChild(addOne);
    }, 1000);
})

buttonReset.addEventListener("click", function (){
    number.innerHTML = 0;
})




