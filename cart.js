var btn_buy = document.querySelectorAll(".btn-buy");

btn_buy.forEach(function (item, index) {
    item.addEventListener("click", function () {
        let cart = [];
        if (localStorage.getItem('cart') != undefined) {
            cart = JSON.parse(localStorage.getItem('cart'));
        }
        let parent = item.parentNode;
        let children = parent.childNodes;
        let img = children[1].src;
        let name = children[5].textContent;
        let desc = children[7].textContent;
        let price = children[9].textContent;
        let isExist = false;
        for (let i = 0; i < cart.length; i++) {
            if (cart[i]["name"] == name) {
                cart[i]["quantity"] = parseInt(cart[i]["quantity"]) + 1;
                isExist = true;
                break;
            }
        }
        if (!isExist) {
            cart.push({ "img": img, "name": name, "desc": desc, "price": price, "quantity": 1 });
        }
        let data = JSON.stringify(cart);
        localStorage.setItem('cart', data);
    });
})