window.onload = () => {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart == undefined || cart.length == 0) {
        alert("No item in cart");
        window.location.href = "index.html";
    }
    else {
        let table = document.getElementById("cart-data");
        table.innerHTML = "";
        let total = 0;
        cart.forEach(item => {
            let tr = document.createElement('tr');
            tr.classList.add("productitm");
            let td = document.createElement('td');
            let img = document.createElement("img");
            img.src = item["img"];
            td.appendChild(img);
            tr.appendChild(td);
            td = document.createElement('td');
            let qty = document.createElement("input");
            qty.type = "number";
            qty.value = item["quantity"];
            qty.readOnly = true;
            qty.classList.add("qtyinput");
            tr.appendChild(qty);
            td = document.createElement('td');
            td.innerHTML = item["name"];
            tr.appendChild(td);
            td = document.createElement('td');
            td.innerHTML = item["price"];
            td.innerHTML = item["price"];
            tr.appendChild(td);
            let price = item["price"].substring(0, item["price"].length - 4);
            total += parseInt(price) * parseInt(item["quantity"]);
            console.log(total);
            table.appendChild(tr);
        });
        let tr = document.createElement('tr');
        tr.classList.add("totalprice");
        let td = document.createElement('td');
        td.classList.add("light");
        td.colSpan = 5;
        td.innerHTML = "Total: <span class='thick'>" + total + " VNĐ<span>"
        tr.appendChild(td);
        table.appendChild(tr);
    }
};

let checkout = document.getElementById("checkout");
checkout.addEventListener("click", function () {
    let cf = confirm("Do you want to checkout?");
    if (cf) {
        let cart = [];
        let data = JSON.stringify(cart);
        localStorage.setItem('cart', data);
    }
    alert("Checkout success");
    window.location.href = "index.html";
});