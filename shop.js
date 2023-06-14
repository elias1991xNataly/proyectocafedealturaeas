
let number = localStorage.getItem("numberOfItems");
console.log(number);
let cart = document.querySelector(".cartsection");
let paragraph = document.createElement("p");
cart.appendChild(paragraph);
paragraph.innerText = number;
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



var shoppingcart = (function () {
    let cart2 = [];

    //Constructor
    function Item(image, name, price, count) {
        this.image = image;
        this.name = name;
        this.price = price;
        this.count = count;
    }

    //Save cart
    function saveCart() {
        sessionStorage.setItem("shoppingCart", JSON.stringify(cart));
    }

    //Load cart
    function loadCart() {
        cart = JSON.parse(sessionStorage.getItem("shoppingCart"));
    }
    if (sessionStorage.getItem("shoppingCart") != null) {
        loadCart();
    }

    // Public methods and propeties
    var obj = {};

    // Add to cart
    obj.addItemToCart = function (image, name, price, count) {
        for (const item of cart2) {
            if (cart[item].name === name) {
                cart[item].count++;
                saveCart();
                return;
            }
        }
        var item = new Item(image, name, price, count);
        cart.push(item);
        saveCart;
    }


    // Set count from item
    obj.setCountForItem = function (name, count) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count = count;
                break;
            }
        }
    };
    // Remove item from cart
    obj.removeItemFromCart = function (name) {
        for (var item in cart) {
            if (cart[item].name === name) {
                cart[item].count--;
                if (cart[item].count === 0) {
                    cart.splice(item, 1);
                }
                break;
            }
        }
        saveCart();
    }

    // Remove all items from cart
    obj.removeItemFromCartAll = function (name) {
        for (var item in cart) {
            if (cart[item].name === name) {
                cart.splice(item, 1);
                break;
            }
        }
        saveCart();
    }


    // Clear cart
    obj.clearCart = function () {
        cart = [];
        saveCart();
    }

    // Count cart 
    obj.totalCount = function () {
        var totalCount = 0;
        for (var item in cart) {
            totalCount += cart[item].count;
        }
        return totalCount;
    }

    // Total cart
    obj.totalCart = function () {
        var totalCart = 0;
        for (var item in cart) {
            totalCart += cart[item].price * cart[item].count;
        }
        return Number(totalCart.toFixed(2));
    }

    // List cart
    obj.listCart = function () {
        var cartCopy = [];
        for (i in cart) {
            item = cart[i];
            itemCopy = {};
            for (p in item) {
                itemCopy[p] = item[p];

            }
            itemCopy.total = Number(item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy)
        }
        return cartCopy;
    }

    // cart : Array
    // Item : Object/Class
    // addItemToCart : Function
    // removeItemFromCart : Function
    // removeItemFromCartAll : Function
    // clearCart : Function
    // countCart : Function
    // totalCart : Function
    // listCart : Function
    // saveCart : Function
    // loadCart : Function


    return obj;
})();