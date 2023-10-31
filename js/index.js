let products = window.productsData;
let cardsList = [];

createCard(products);
for (let product in products) {
  products[product].quantity = 1;
}
function createCard(array) {
  const cards = document.getElementById("cards");
  cardsList = array.map((product) => {
    return `<div
  class="card cards text-white bg-info col-sm-6"
  style="; "
>
  <img
    class="card-img-top"
    src="${product.images[0]}"
    alt="${product.title}"
  />
  <div class="card-body">
    <h5 class="card-title">${product.title} ${product.price} $</h5>
    <h5 >${product.price}$</h5>
    <p class="card-text">
     ${product.description}
    </p>
    <button id="add-${product.id}" class="btn btn-primary " onclick="addToCart('${product.id}')" >Add to cart</button>
  </div>
</div>
`;
  });

  cards.innerHTML = cardsList.join(" ");
}

// sort

products.sort(sortByTitle);
function compareNumbers(a, b) {
  return a.price - b.price;
}
function reverseNumbers(a, b) {
  return b.price - a.price;
}

function sortByTitle(a, b) {
  const nameA = a.title.toUpperCase();
  const nameB = b.title.toUpperCase();

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
}

function reverseByTitle(a, b) {
  const nameA = a.title.toUpperCase();
  const nameB = b.title.toUpperCase();
  if (nameB < nameA) {
    return -1;
  }
  if (nameB > nameA) {
    return 1;
  }
  return 0;
}

const sort = document.getElementById("sort");

sort.addEventListener("change", () => {
  if (sort.value === "price-up") {
    products.sort(compareNumbers);
  } else if (sort.value === "price-down") {
    products.sort(reverseNumbers);
  } else if (sort.value === "name-z-to-a") {
    products.sort(reverseByTitle);
  } else {
    products.sort(sortByTitle);
  }
  createCard(products);
});

let cartItems = [];
function addToCart(id) {
  let addItem = products.find((item) => item.id === id);
  let itemExsit = cartItems.find((item) => item.id === addItem.id);
  if (itemExsit) {
    if (itemExsit.quantity < 5) {
      itemExsit.quantity += 1;
      changeAddButton(id);
    } else {
      return alert("maxmime count of this item is five!");
    }
    buildCart();
    calculate();
    return;
  }

  cartItems.push(addItem);
  buildCart();
  calculate();
  changeAddButton(id);
}
function changeAddButton(id) {
  const addButton = document.getElementById(`add-${id}`);
  addButton.style.background = " rgb(247 227 191)";
  addButton.style.color = "rgb(26, 99, 131)";
  addButton.innerHTML = "added";
  setTimeout(function resetAddBtn() {
    addButton.style.background = " hsl(215.75deg 98.36% 52.16%)";
    addButton.style.color = "hsl(0, 0%, 100%)";
    addButton.innerHTML = "add to cart";
  }, 1000);
}

function cartIconNumber() {
  let numberItems = document.getElementById("number-items");
  numberItems.innerHTML = cartItems.length;
}

function removeItem(id) {
  cartItems = cartItems.filter((item) => {
    return item.id !== id;
  });
  cartIconNumber();
  buildCart();
  calculate();
}

const cart = document.getElementById("cart");
function buildCart() {
  let cartHtml = cartItems.map((item) => {
    cartIconNumber();
    return `<div>
  <div class="image-title-postion">
  <img src="${item.images[0]}" class="cart-image" />
  <h5 class="item-title-cart">
   ${item.title}
  </h5>
  </div>
  <div>
  <select id="quantity-${
    item.id
  }" class="dropdown-cart" onchange ="setQuantity('${item.id}')">
  <option  value=1 ${item.quantity === 1 ? "selected" : " "}>1</option>
  <option  value=2 ${item.quantity === 2 ? "selected" : " "}>2</option>
  <option  value=3 ${item.quantity === 3 ? "selected" : " "}>3</option>
  <option  value=4 ${item.quantity === 4 ? "selected" : " "}>4</option>
  <option  value=5 ${item.quantity === 5 ? "selected" : " "}>5</option>
  </select>
  <button class="btn btn-primary" onclick ="removeItem('${
    item.id
  }')">remove</button>
  <h6 id="price-${item.id}" style="float: right; color: rgb(26, 99, 131)">${(
      item.price * item.quantity
    ).toFixed(2)}$</h6>
   </div>
<br> <br>
</div>`;
  });

  cart.innerHTML = cartHtml.join(" ");
}

let itemPrice = document.getElementById("item-price");
let tax = document.getElementById("tax");
let finalPrice = document.getElementById("final-price");

function calculate() {
  let collect = cartItems.map((item) => {
    return item.price * item.quantity;
  });
  let sum = 0;
  collect.forEach((num) => {
    sum += num;
  });
  itemPrice.innerHTML = sum.toFixed(2) + "$";
  tax.innerHTML = (sum * 0.07).toFixed(2) + "$";
  finalPrice.innerHTML = (sum + sum * 0.07).toFixed(2) + "$";
}

const search = document.getElementById("search");
search.addEventListener("input", function (e) {
  let searchFilter = [];
  let value = e.target.value.toLowerCase().trim();
  searchFilter = products.filter((x) => {
    return x.title.toLowerCase().includes(value);
  });
  createCard(searchFilter);
});

function setQuantity(id) {
  const select = document.getElementById(`quantity-${id}`);
  const itemPrice = document.getElementById(`price-${id}`);
  let findItem = cartItems.find((item) => item.id === id);
  findItem.quantity = parseInt(select.value);
  itemPrice.innerHTML = (findItem.quantity * findItem.price).toFixed(2) + "$";
  calculate();
}
