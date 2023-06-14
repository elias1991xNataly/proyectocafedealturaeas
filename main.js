// DIV expandible

var divcollapse1 = document.getElementsByClassName("accordion");
var y;
for (let y = 0; y < divcollapse1.length; y++) {
    divcollapse1[y].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
    
}


// console.log(divcollapse1);
// divcollapse1.forEach((element, key) => {
//     element.addEventListener("click", () => {
//         console.log("hola");
//         textexpand1[key].classList.toggle("showtext")
//     })
// });











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
        p.innerText=getnumber; 
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
cart.parentElement.append(p);


