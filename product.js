const products = [
    {
        id: 1,
        name: "Men T-Shirt",
        category: "men",
        price: 799,
        image: "assets/images/products/1.png"
    },
    {
        id: 2,
        name: "Men Designer T-Shirt",
        category: "men",
        price: 1499,
        image: "assets/images/products/2.png"
    },
    {
        id: 3,
        name: "Trendy Sneakers",
        category: "men",
        price: 999,
        image: "assets/images/products/3.png"
    },
    {
        id: 4,
        name: "Designer Jacket",
        category: "men",
        price: 999,
        image: "assets/images/products/4.png"
    },
    {
        id: 5,
        name: "men Jeans",
        category: "men",
        price: 999,
        image: "assets/images/products/5.png"
    },
    {
        id: 6,
        name: "Heels",
        category: "women",
        price: 3899,
        image: "assets/images/products/6.png"
    },
    {
        id: 7,
        name: "Shirts",
        category: "men",
        price: 999,
        image: "assets/images/products/7.png"
    },
    {
        id: 8,
        name: "Men T-Shirt",
        category: "men",
        price: 499,
        image: "assets/images/products/8.png"
    },
    {
        id: 9,
        name: "Men Boots",
        category: "men",
        price: 1699,
        image: "assets/images/products/9.png"
    },
    {
        id: 10,
        name: "Sandals",
        category: "women",
        price: 999,
        image: "assets/images/products/10.png"
    },
    {
        id: 11,
        name: "Women Jeans",
        category: "women",
        price: 4599,
        image: "assets/images/products/11.png"
    },
    {
        id: 12,
        name: "Trendy Fit",
        category: "women",
        price: 5900,
        image: "assets/images/products/12.png"
    },
];

const productList = document.getElementById("productList");

function renderProducts(items) {
    productList.innerHTML = "";

    items.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product_card");

        div.innerHTML = `
            <img src="${product.image}" onclick="openModal(${product.id})"/>
            <h5>${product.name}</h5>
            <p>₹${product.price}</p>
            <button onclick="addToBag(${product.id})">Add to Bag</button>
        `;

        productList.appendChild(div);
    });
}

renderProducts(products);

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToBag(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    document.getElementById("bagCount").innerText = cart.length;
}

document.getElementById("bagCount").innerText = cart.length;

function openModal(id) {
    const p = products.find(x => x.id === id);
    modal.style.display = "flex";
    modalImg.src = p.image;
    modalName.innerText = p.name;
    modalPrice.innerText = "₹" + p.price;
}

closeModal.onclick = () => modal.style.display = "none";