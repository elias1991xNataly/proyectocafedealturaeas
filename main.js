// DIV expandible

var divcollapse1 = document.getElementsByClassName("accordion");
var y;
for (let y = 0; y < divcollapse1.length; y++) {
    divcollapse1[y].onclick = function () {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }

}











// Option primera
// Añadir un número cerca de cart
// const cart = document.querySelector("#cart");
// const addButtonsum = document.querySelectorAll(".addButton");
// console.log(addButtonsum);
// let numberNexttoCart = 0;
// addButtonsum.forEach((element) => {
//     element.addEventListener('click', () => {
//         numberNexttoCart += 1;
//         console.log(numberNexttoCart);
//         let itemsIncart = localStorage.setItem("numberOfItems", numberNexttoCart);
//         let getnumber=localStorage.getItem("numberOfItems");
//         console.log(getnumber);
//         let realnumber=JSON.parse(getnumber);
//         p.innerText=getnumber; 
//     })
// });
// let putnumber=localStorage.getItem("numberOfItems");
// let div=document.createElement("div");
// let p=document.createElement("p");
// p.style.width="24px";
// p.style.margin=0;
// p.style.height="24px";
// p.style.borderRadius="50px";
// p.style.background="rgba(247, 245, 243, 0.1)";
// p.style.textAlign="center";
// p.style.display="flex";
// p.style.flexDirection="row";
// p.style.justifyContent="center";
// p.style.alignItems="center";
// console.log(putnumber);
// cart.parentElement.append(p);



// let div=document.createElement("div");
// let p=document.createElement("p");
// cart.parentElement.append(p);
// const cart = document.querySelector("#cart");
// p.innerText=getnumber;

// Option 2a
const addButtonSum2 = document.querySelectorAll(".addButton");
const images = document.querySelectorAll(".imageSetUp");
const pricesOfCoffees = document.querySelectorAll(".priceOfCoffee");
const namesOfCoffees = document.querySelectorAll(".nameOfCoffee");

const cart2 = [];
addButtonSum2.forEach((element, key) => {
    element.addEventListener("click", () => {
        const object = { imagen: "", name: "", price: "", count: 0 };
        object.imagen = images[key].src;
        console.log(namesOfCoffees[key].innerText);
        object.name = namesOfCoffees[key].innerText;
        object.price = pricesOfCoffees[key].innerText;
        object.count += 1;
        console.log(images);
        cart2.push(object);
        console.log(cart2);
        console.log(cart2.length);
        let final=JSON.stringify(cart2);
        localStorage.setItem("cart2", final);
        let getCart2 = localStorage.getItem("cart2");
        let getCart2TurnedToObj = JSON.parse(getCart2);
        console.log(getCart2TurnedToObj.length);
        p2.innerText=getCart2TurnedToObj.length;
    })
});
// let div2=document.createElement("div");
let p2=document.createElement("p");
const cart3 = document.querySelector("#cart");
cart3.parentElement.appendChild(p2);

p2.style.width = "24px";
p2.style.margin = 0;
p2.style.height = "24px";
p2.style.borderRadius = "50px";
p2.style.background = "rgba(247, 245, 243, 0.1)";
p2.style.textAlign = "center";
p2.style.display = "flex";
p2.style.flexDirection = "row";
p2.style.justifyContent = "center";
p2.style.alignItems = "center";


p2.innerText=JSON.parse(localStorage.getItem("cart2")).length;