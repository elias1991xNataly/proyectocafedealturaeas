// DIV expandible

var divcollapse1 = document.querySelectorAll(".divider")
var divcollapse2 = document.querySelector("#textcollapse2")
var textexpand1 = document.querySelector("#textexpand1")
var textexpand2 = document.querySelector("#textexpand2")
console.log(divcollapse1);
divcollapse1.forEach((element, key) => {
    element.addEventListener("click", () => {
        console.log("hola");
        textexpand1[key].classList.toggle("textexpand1")
    })
});



// Añadir un número cerca de cart
const cart = document.querySelector("#cart");
const addButtonsum = document.querySelectorAll(".addButton");
console.log(addButtonsum);
let numberNexttoCart = 0;
addButtonsum.forEach((element) => {
    element.addEventListener('click', () => {
        numberNexttoCart += 1;
        console.log(numberNexttoCart);
        let itemsIncart = localStorage.setItem("numberOfItems", numberNexttoCart);
        let getnumber=localStorage.getItem("numberOfItems");
        console.log(getnumber);
        let realnumber=JSON.parse(getnumber);
        // cart.parentElement.append(realnumber);
        // cart.parentElement.append(p);
        p.innerText=getnumber; 
        // console.log(p);
    })
});
let putnumber=localStorage.getItem("numberOfItems");
let div=document.createElement("div");
let p=document.createElement("p");
p.style.width="24px";
p.style.margin=0;
p.style.height="24px";
p.style.borderRadius="50px";
p.style.background="rgba(247, 245, 243, 0.1)";
p.style.textAlign="center";
p.style.display="flex";
p.style.flexDirection="row";
p.style.justifyContent="center";
p.style.alignItems="center";
console.log(putnumber);
// div.style.color="white";
// cart.parentElement.append(putnumber);
cart.parentElement.append(p);
// div.append(p);
// cart.parentElement.append(p);


