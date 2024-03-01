const productContainer = document.getElementById("productContainer");

const navElement = document.getElementById("navigation");

GetProductData();
GetCategoryData();

// fetch

function GetProductData() {
  fetch("https://dummyjson.com/products")
    .then((result) => {
      return result.json();
    })
    .then((json) => {
      ProductReceived(json);
    });
}

function GetCategoryData() {
  fetch("https://dummyjson.com/products/categories")
    .then((result) => {
      //console.log(result);
      return result.json();
    })

    .then((json) => {
      ReciveCategoryData(json);
    });
}

// controller

function ProductReceived(productData) {
  console.log(productData);

  let myProducts = productData.products;

  let myFeaturedProducts = [];

  myFeaturedProducts.push(
    myProducts[1],
    myProducts[2],
    myProducts[3],
    myProducts[4],
    myProducts[5],
    myProducts[6],
    myProducts[7]
  );

  console.log(myFeaturedProducts);
  buildProuctCard(myFeaturedProducts);
}

function ReciveCategoryData(myCategories) {
  //console.log(myCategories);
  CreateNavBar(myCategories);
}

function NavCallBack(myCategory) {
  console.log(myCategory);

  if (myCategory == "all") {
    CreateProductView(myProducts);
  } else {
    console.log(myCategory);

    let mySelectedProducts = [];

    myProducts.forEach((product) => {
      if (myCategory == product.category) {
        console.log(product);
        mySelectedProducts.push(product);
      }
    });
    //console.log(mySelectedProducts);

    CreateProductView(mySelectedProducts);
  }
}

// view

function buildProuctCard(myFeaturedProducts) {
  myFeaturedProducts.forEach((product) => {
    let productCard = `
    <figure class="product-card" onclick="buildProductDetails(${product.id})">
    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"
    onclick="playAudio('cash-register-kaching-sound-effect-125042.mp3')"
    >
    </a>
    <span class="discountPercentage">
         <div class="star">
         <h4>TILBUD ${product.discountPercentage} ¤</h4>
         </div>
         
        </span>
    <div class="img-container">
      <img src="${product.thumbnail}" />
    </div>
    <header>
      <h2>${product.title}</h2>
    </header>
    <figcaption>
      
      <footer>
        <span class="price">
         <h4>${product.price} ¤</h4>
        </span>
        <h5>${product.stock} in stock</h5>
        <span class="rating">
          <p>${product.rating}</p>
        </span>
      </footer>
    </figcaption>
  </figure>
  `;
    productContainer.innerHTML += productCard;
  });
}

// Set the target time for the countdown (1 hour, 37 minutes, and 50 seconds from now)
var countdownDate = new Date();
countdownDate.setHours(countdownDate.getHours() + 1);
countdownDate.setMinutes(countdownDate.getMinutes() + 37);
countdownDate.setSeconds(countdownDate.getSeconds() + 50);

// Update the countdown every second
var countdownTimer = setInterval(function () {
  var now = new Date().getTime();
  var distance = countdownDate - now;

  // Calculate remaining time
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("countdown").innerHTML =
    hours + "h " + minutes + "m " + seconds + "s ";

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(countdownTimer);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

function playAudio(url) {
  new Audio(url).play();
}

// categories
let myCategories = [
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "womens-dresses",
  "womens-shoes",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
  "automotive",
  "motorcycle",
  "lighting",
];

// // // let myCategory = myCategories[8];

// Hovedkategorier
let myElectronics = [];
let myWomensClothing = [];
let myMensClothing = [];

myCategories.forEach((category) => {
  switch (category) {
    case "smartphones":
    case "laptops":
    case "lighting":
      console.log("Electronics");
      myElectronics.push(category);
      break;

    case "fragrances":
    case "skincare":
      console.log("Cosmetics");
      myElectronics.push(category);

      break;

    case "groceries":
      console.log("Everyday items");
      myElectronics.push(category);

      break;

    default:
      console.log("misc.");
      break;

    case "home-decoration":
    case "furniture":
    case "lighting":
      console.log("Home");
      myElectronics.push(category);

      break;

    case "tops":
    case "womens-dresses":
    case "womens-shoes":
    case "mens-shirts":
    case "mens-shoes":
      console.log("Appearals");
      myElectronics.push(category);

      break;

    case "womens-dresses":
    case "womens-shoes":
      console.log("Women's clothes");
      myWomensClothing.push(category);

      break;

    case "mens-shirts":
    case "mens-shoes":
      console.log("Men's clothes");
      myMensClothing.push(category);

      break;
  }
});

console.log(smartphones);