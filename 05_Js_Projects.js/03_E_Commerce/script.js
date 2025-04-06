document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCart = document.getElementById("empty-cart");
  const cartTotal = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkoutButton = document.getElementById("checkout-btn");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const products = [
    { id: 1, name: "Product 1", price: 39 },
    { id: 2, name: "Product 2", price: 59 },
    { id: 3, name: "Product 3", price: 49 },
  ];

  products.forEach((product) => {
    const prodDiv = document.createElement("div");
    prodDiv.classList.add("product");
    prodDiv.innerHTML = `
      <span>${product.name} - $${product.price}</span>
      <button class="add-to-cart-btn" data-id="${product.id}">Add To Cart</button>`;

    productList.appendChild(prodDiv);
  });

  productList.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart-btn")) {
      const productId = parseInt(e.target.getAttribute("data-id"));
      const targetProduct = products.find((p) => p.id === productId);
      addToCart(targetProduct);
    }
  });

  function addToCart(product) {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    saveCart();
    renderCart();
  }

  function renderCart() {
    cartItems.innerHTML = "";
    let totalPrice = 0;

    if (cart.length > 0) {
      emptyCart.classList.add("hidden");
      cartTotal.classList.remove("hidden");

      cart.forEach((item) => {
        totalPrice += item.price * item.quantity;

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
          <span>${item.name} - $${item.price} x ${item.quantity}</span>
          <button class="remove-from-cart-btn" data-id="${item.id}">Remove</button>`;

        cartItem
          .querySelector(".remove-from-cart-btn")
          .addEventListener("click", () => {
            removeFromCart(item.id);
          });

        cartItems.appendChild(cartItem);
      });

      totalPriceDisplay.textContent = `$${totalPrice.toFixed(2)}`;
    } else {
      emptyCart.classList.remove("hidden");
      cartTotal.classList.add("hidden");
      totalPriceDisplay.textContent = `$0.00`;
    }
  }

  function removeFromCart(productId) {
    const productIndex = cart.findIndex((item) => item.id === productId);
    if (productIndex !== -1) {
      const product = cart[productIndex];
      if (product.quantity > 1) {
        product.quantity--;
      } else {
        cart.splice(productIndex, 1);
      }
      saveCart();
      renderCart();
    }
  }

  checkoutButton.addEventListener("click", () => {
    cart = [];
    alert("Checkout successful!");
    saveCart();
    renderCart();
  });

  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  renderCart();
});
