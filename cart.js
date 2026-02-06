let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartItems = document.getElementById("cartItems");
const totalPrice = document.getElementById("totalPrice");

function renderCart() {
    cartItems.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p class='empty'>Your bag is empty 🛒</p>";
        totalPrice.innerText = "";
        return;
    }

    cart.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "cart_item";

        div.innerHTML = `
        <img src="${item.image}">
        <div class="cart_details">
            <h4>${item.name}</h4>
            <p>₹${item.price}</p>
            <button onclick="removeItem(${index})">Remove</button>
        </div>
        `;

        cartItems.appendChild(div);
        total += item.price;
    });

    totalPrice.innerText = "Total: ₹" + total;
}

renderCart();

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}


