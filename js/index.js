// const products = require('./shopping')
// console.log(products);

let products = [
  {
    "id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    "title": "Wireless Bluetooth Earbuds",
    "description": "High-quality wireless earbuds with noise-cancellation feature.",
    "images": [
      "https://m.media-amazon.com/images/I/61RW3L1+KEL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61I1UluvczL._AC_SL1500_.jpg"
    ],
    "price": 49.99
  },
  {
    "id": "5c994a9e-827d-4e27-a5bb-4ab3fe3d06eb",
    "title": "Smartphone Stand and Holder",
    "description": "Adjustable and sturdy smartphone stand for hands-free use.",
    "images": [
      "https://m.media-amazon.com/images/I/61dpRC+gl3L._AC_SY879_.jpg",
      "https://m.media-amazon.com/images/I/61Dsa0PfOPL._AC_SL1500_.jpg"
    ],
    "price": 15.95
  },
  {
    "id": "0b5d49a9-66f6-482c-9e0a-3d3d6850c7c9",
    "title": "Ultra HD 4K Action Camera",
    "description": "Capture your adventures in stunning 4K quality with this compact action camera.",
    "images": [
      "https://m.media-amazon.com/images/I/61lfLWP8cZL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/718byg46XhL._AC_SL1500_.jpg"
    ],
    "price": 129.99
  },
  {
    "id": "91f5ebda-13d7-4e48-b51c-0b23a73cc32f",
    "title": "Portable External SSD Drive",
    "description": "500GB portable SSD drive for fast and convenient data storage.",
    "images": [
      "https://m.media-amazon.com/images/I/519JcK1MKEL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71L+sVPjRvL._AC_SL1500_.jpg"
    ],
    "price": 89.95
  },
  {
    "id": "32bcb43c-ae98-4289-b967-7382d09ef4e1",
    "title": "Wireless Gaming Mouse",
    "description": "High-performance wireless mouse for gaming enthusiasts.",
    "images": [
      "https://m.media-amazon.com/images/I/71KxlmYnoOL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61adk0VcF1L._AC_SL1500_.jpg"
    ],
    "price": 59.99
  },
  {
    "id": "fba05df7-16de-4e96-8204-6f4e1d7c7ad5",
    "title": "Soft Leather Travel Backpack",
    "description": "Elegant and spacious leather backpack for your travel needs.",
    "images": [
      "https://m.media-amazon.com/images/I/71oDt2ZKcdL._AC_SL1200_.jpg",
      "https://m.media-amazon.com/images/I/71974SjEw5L._AC_SL1200_.jpg"
    ],
    "price": 79.95
  },
  {
    "id": "a60f3d57-df9f-4e46-97f0-33bfa0a1f1a1",
    "title": "Stainless Steel Kitchen Knife Set",
    "description": "Professional-grade knife set for precision cooking.",
    "images": [
      "https://m.media-amazon.com/images/I/71+HZ7LkSzL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81DMsdDcHJL._AC_SL1500_.jpg"
    ],
    "price": 149.99
  },
  {
    "id": "e93a8b52-0c74-445a-9a90-8c5a82ebf13d",
    "title": "Fitness Tracker Smartwatch",
    "description": "Track your health and workouts with this stylish smartwatch.",
    "images": [
      "https://m.media-amazon.com/images/I/61phYd-jr6L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61rhvXsS3hL._AC_SL1500_.jpg"
    ],
    "price": 129.00
  },
  {
    "id": "785a40b2-3481-42f2-9a3e-9d961cbeea0a",
    "title": "Foldable Electric Scooter",
    "description": "Convenient and eco-friendly electric scooter for urban commuting.",
    "images": [
      "https://m.media-amazon.com/images/I/61CXdXnnBhL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61g6ai4C7SL._AC_SL1500_.jpg"
    ],
    "price": 299.00
  },
  {
    "id": "c4f35f6d-2a57-417c-9ce9-9e7a1c529a89",
    "title": "Wireless Charging Pad",
    "description": "Qi-compatible wireless charging pad for your devices.",
    "images": [
      "https://m.media-amazon.com/images/I/51Rg-W1lUBL._AC_CR0%2C0%2C0%2C0_SX960_SY720_.jpg",
      "https://m.media-amazon.com/images/I/61o3PAyAqML._AC_CR0%2C0%2C0%2C0_SX960_SY720_.jpg"
    ],
    "price": 29.95
  }
];


  


function createCard(){
const cards = document.getElementById("cards");
const arrayMap = products.map((product) =>{
  return  `<div
  class="card cards text-white bg-info col-sm-6"
  style="width: 15rem; height:30rem"
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
` ;
})

cards.innerHTML = arrayMap.join(' ');
}
createCard(); 

const total = document.getElementById('total');

let arrayCart = [];
function addToCart(id) {
  let addItem = products.find((item) => item.id === id);
  arrayCart.push(addItem);
  console.log(arrayCart);

  cartItems();
 total.innerHTML = culculate();
 
}

function cartItems(){
const cart = document.getElementById("cart");
const arrayOfCart = arrayCart.map(item =>{
  return     `<div>
  <img src="${item.images[0]}" style="width: 20%; height: 20%" />
  <h6 class="small-title">
   ${item.title}<span style="float: right"> ${item.price} $</span>
  </h6>

  <select class="dropdown">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </select>
  <button class="btn btn-primary">remove</button>

<br> <br>
</div>`
})
cart.innerHTML=arrayOfCart.join(' ')

}

function culculate(){
  let itemTotal = 0;
  for (i = 0; i < arrayCart.length; i++) {
    itemTotal += arrayCart[i].price;
  const tax = itemTotal *0.7;
  

    
    return `<div>
    <h5> total <span id="total-price" style="float: right">${itemTotal}</span></h5>
    <h5>tax: <span id="total-price" style="float: right">${tax}  </span></h5>
    <hr />
    <h5>total: <span id="total-price" style="float: right">${itemTotal} + ${tax}  </span></h5>
</div>`
  }
   
}