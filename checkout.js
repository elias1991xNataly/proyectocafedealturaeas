let number = localStorage.getItem("numberOfItems");
let cart = document.querySelector(".cartsection");
let paragraph = document.createElement("p");
cart.appendChild(paragraph);
paragraph.innerText = JSON.parse(localStorage.getItem("cart2")).length;;
console.log(paragraph);
paragraph.style.color = "white";
paragraph.style.width = "24px";
paragraph.style.margin = 0;
paragraph.style.height = "24px";
paragraph.style.borderRadius = "50px";
paragraph.style.background = "rgba(247, 245, 243, 0.1)";
paragraph.style.textAlign = "center";
paragraph.style.display = "flex";
paragraph.style.flexDirection = "row";
paragraph.style.justifyContent = "center";
paragraph.style.alignItems = "center";
cart.style.display = "flex";
cart.style.flexDirection = "row";
cart.style.gap = "10px";


let jsonOfCart2 = localStorage.getItem("cart2");
let ObjOfCart2 = JSON.parse(jsonOfCart2);
let copyOfObjOfCart2 = Object.assign([], ObjOfCart2);
let numtoMultiply = 0;
let amountTot = document.querySelector("#amountOfTotal");
let amountSub = document.querySelector("#amountOfSubtotal");
for (const item of copyOfObjOfCart2) {
    let patternComma = /[,]/g;
    let paternEuro = /[€]/g;
    let pri = item.price;
    let numberPrice = pri.replace(patternComma, ".").replace(paternEuro, "");
    console.log((numberPrice));
    numtoMultiply += numberPrice * item.count;
    amountSub.innerText = `${numtoMultiply},00 €`;
    amountTot.innerText = `${numtoMultiply},00 €`;
};