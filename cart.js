
// number close to cart
let number = localStorage.getItem("numberOfItems");
let cart = document.querySelector(".cartsection");
let paragraph = document.createElement("p");
cart.appendChild(paragraph);
paragraph.innerText = JSON.parse(localStorage.getItem("cart2")).length;
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


// 
let insertProducts = document.querySelector("#products");
let container = document.createElement("div");
insertProducts.appendChild(container);

function generateDivs(arr) {

    for (const a of arr) {
        let eachproduct = document.createElement("div");
        eachproduct.innerHTML = `
        <div class="cartitemcartcolumn">
        <p class="btn">-</p>
        <p class="cantProd">${a.count}</p>
        <p class="btn">+</p>
        <img class="cart-item-image" src="${a.imagen}" width="100" height="100">
        <span class="cart-item-title">${a.name}</span>
        <div>Paquete de café, 250 gr</div>
    </div>
    <span class="cart-price cart-column">${a.price}</span>
    <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1">
        <button class="btn btn-danger" type="button">REMOVE</button>
    </div>
    <div class="line2"></div>
    `;

        container.appendChild(eachproduct);
    }
}

let circleOfNumber = document.querySelectorAll(".cantProd");

let jsonOfCart2 = localStorage.getItem("cart2");
let ObjOfCart2 = JSON.parse(jsonOfCart2);
let copyOfObjOfCart2 = Object.assign([], ObjOfCart2);
console.log(copyOfObjOfCart2);
generateDivs(copyOfObjOfCart2);
container.style.display = "flex";
container.style.flexDirection = "column";


let numbe = JSON.parse(localStorage.getItem("cart2")).length;
let cartNumber = document.querySelector("#numberItems");
if (numbe != 0) {
    cartNumber.innerText = `Cesta\t(${numbe})`;
};




let amountTot = document.querySelector("#amountOfTotal");
let numtoMultiply = 0;
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