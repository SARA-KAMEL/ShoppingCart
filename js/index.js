let products = [
  {
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    title: "Wireless Bluetooth Earbuds",
    description:
      "High-quality wireless earbuds with noise-cancellation feature.",
    images: [
      "https://m.media-amazon.com/images/I/61RW3L1+KEL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61I1UluvczL._AC_SL1500_.jpg",
    ],
    price: 49.99,
  },
  {
    id: "5c994a9e-827d-4e27-a5bb-4ab3fe3d06eb",
    title: "Smartphone Stand and Holder",
    description: "Adjustable and sturdy smartphone stand for hands-free use.",
    images: [
      "https://m.media-amazon.com/images/I/61dpRC+gl3L._AC_SY879_.jpg",
      "https://m.media-amazon.com/images/I/61Dsa0PfOPL._AC_SL1500_.jpg",
    ],
    price: 15.95,
  },
  {
    id: "0b5d49a9-66f6-482c-9e0a-3d3d6850c7c9",
    title: "Ultra HD 4K Action Camera",
    description:
      "Capture your adventures in stunning 4K quality with this compact action camera.",
    images: [
      "https://m.media-amazon.com/images/I/61lfLWP8cZL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/718byg46XhL._AC_SL1500_.jpg",
    ],
    price: 129.99,
  },
  {
    id: "91f5ebda-13d7-4e48-b51c-0b23a73cc32f",
    title: "Portable External SSD Drive",
    description:
      "500GB portable SSD drive for fast and convenient data storage.",
    images: [
      "https://m.media-amazon.com/images/I/519JcK1MKEL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71L+sVPjRvL._AC_SL1500_.jpg",
    ],
    price: 89.95,
  },
  {
    id: "32bcb43c-ae98-4289-b967-7382d09ef4e1",
    title: "Wireless Gaming Mouse",
    description: "High-performance wireless mouse for gaming enthusiasts.",
    images: [
      "https://m.media-amazon.com/images/I/71KxlmYnoOL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61adk0VcF1L._AC_SL1500_.jpg",
    ],
    price: 59.99,
  },
  {
    id: "fba05df7-16de-4e96-8204-6f4e1d7c7ad5",
    title: "Soft Leather Travel Backpack",
    description: "Elegant and spacious leather backpack for your travel needs.",
    images: [
      "https://m.media-amazon.com/images/I/71oDt2ZKcdL._AC_SL1200_.jpg",
      "https://m.media-amazon.com/images/I/71974SjEw5L._AC_SL1200_.jpg",
    ],
    price: 79.95,
  },
  {
    id: "a60f3d57-df9f-4e46-97f0-33bfa0a1f1a1",
    title: "Stainless Steel Kitchen Knife Set",
    description: "Professional-grade knife set for precision cooking.",
    images: [
      "https://m.media-amazon.com/images/I/71+HZ7LkSzL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81DMsdDcHJL._AC_SL1500_.jpg",
    ],
    price: 149.99,
  },
  {
    id: "e93a8b52-0c74-445a-9a90-8c5a82ebf13d",
    title: "Fitness Tracker Smartwatch",
    description: "Track your health and workouts with this stylish smartwatch.",
    images: [
      "https://m.media-amazon.com/images/I/61phYd-jr6L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61rhvXsS3hL._AC_SL1500_.jpg",
    ],
    price: 129.0,
  },
  {
    id: "785a40b2-3481-42f2-9a3e-9d961cbeea0a",
    title: "Foldable Electric Scooter",
    description:
      "Convenient and eco-friendly electric scooter for urban commuting.",
    images: [
      "https://m.media-amazon.com/images/I/61CXdXnnBhL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61g6ai4C7SL._AC_SL1500_.jpg",
    ],
    price: 299.0,
  },
  {
    id: "c4f35f6d-2a57-417c-9ce9-9e7a1c529a89",
    title: "Wireless Charging Pad",
    description: "Qi-compatible wireless charging pad for your devices.",
    images: [
      "https://m.media-amazon.com/images/I/51Rg-W1lUBL._AC_CR0%2C0%2C0%2C0_SX960_SY720_.jpg",
      "https://m.media-amazon.com/images/I/61o3PAyAqML._AC_CR0%2C0%2C0%2C0_SX960_SY720_.jpg",
    ],
    price: 29.95,
  },
];

let arrayCards = [];
function createCard(array) {
  const cards = document.getElementById("cards");
  arrayCards = array.map((product) => {
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
    <a id="add-to-card" href="#" class="btn btn-primary" onclick="addToCart('${product.id}') " >Add to cart</a>
  </div>
</div>
`;
  });

  cards.innerHTML = arrayCards.join(" ");
}
createCard(products);
let numberItems = document.getElementById("number-items");
console.log(numberItems.innerHTML)

let arrayCart = [];
function addToCart(id) {
  let addItem = products.find((item) => item.id === id);
  arrayCart.push({ quantity: 1, ...addItem });
  numberItems.innerHTML = arrayCart.length 
  buildCart();
  // calculate();
}

const cart = document.getElementById("cart");
function buildCart() {
  let cartItems = arrayCart.map((item) => {
    // calculate();
    return `<div>
  <div>
  <img src="${item.images[0]}" style="width:30%; height: 20%" />
   </div>
   <div>
  <h6>
   ${item.title}
  </h6>
  <select id="quantity-${item.id}" class="dropdown" onchange ="setQuantity('${item.id
      }')">
  <option  value=1 ${item.quantity === 1 ? "selected" : " "}>1</option>
  <option  value=2 ${item.quantity === 2 ? "selected" : " "}>2</option>
  <option  value=3 ${item.quantity === 3 ? "selected" : " "}>3</option>
  <option  value=4 ${item.quantity === 4 ? "selected" : " "}>4</option>
  <option  value=5 ${item.quantity === 5 ? "selected" : " "}>5</option>
  </select>
  <button class="btn btn-primary">remove</button>
  <h6 style="float: right"> ${item.price}$</h6>
   </div>
<br> <br>
</div>`;
  });

  cart.innerHTML = cartItems.join(" ");
  console.log(cart);
}

let total = document.getElementById("total");
let itemPrice = document.getElementById("item-price ");
let tax = document.getElementById("tax");
let finalPrice = document.getElementById("final-price");
let itemsTax = 0;
let allTotal = 0;
let sum = 0;

function calculate() {
  for (let i = 0; i < arrayCart.length; i++) {
    sum += arrayCart[i].price;
  }
  itemsTax += sum * 0.07;
  allTotal += itemsTax + sum;
  itemPrice.innerHTML = sum;
  tax.innerHTML = itemsTax.toFixed(2);
  finalPrice.innerHTML = allTotal.toFixed(2);
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
  let findItem = arrayCart.find((item) => item.id === id);
  findItem.quantity = parseInt(select.value);
  console.log(select.value);
}
