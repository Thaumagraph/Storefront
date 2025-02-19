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

// globals
const productSection = document.getElementById("featuredProducts");
const navElement = document.getElementById("navigation");

let myProducts = null;

// page load
GetProductData();
GetCategoryData();

/* Model code------------------------------------------------------------- */

function GetProductData() {
  fetch("https://dummyjson.com/products?limit=100")
    .then((result) => {
      //console.log(result);
      return result.json();
    })

    .then((json) => {
      console.log(json);
      ProductsReceived(json);
    });
}

function GetProductsByCategory(myCategoryURL) {
  fetch(myCategoryURL)
    .then((result) => {
      //console.log(result);
      return result.json();
    })

    .then((json) => {
      receivedProductsByCategory(json);
    });
}

function GetCategoryData() {
  fetch("https://dummyjson.com/products/categories")
    .then((result) => {
      return result.json();
    })

    .then((json) => {
      //console.log(json);
      CategoryReceived(json);
    });
}

/* controller code------------------------------------------------------------- */

function receivedProductsByCategory(productsByC) {
  let myProductArray = productsByC.products;

  CreateProductView(myProductArray);
}

function CategoryReceived(CategoryData) {
  // skriv lækker kode der kan sortere kategorier her.. nu sender vi bare alt videre.
  // console.log(CategoryData);

  CreateNavBar(CategoryData);
}

//----------------------------------------------------------------------
function ProductsReceived(productData) {
  //console.log(productData)

  myProducts = productData.products;

  let myFeaturedProducts = [];

  myFeaturedProducts.push(myProducts[8], myProducts[29], myProducts[19]);
  //console.log(myFeaturedProducts);

  CreateProductView(myFeaturedProducts);
  // CreateProductView(myProducts)
}

//----------------------------------------------------------------------

function NavCallback(CategoryName) {
  console.log(CategoryName);
  /*   // vi har Data
  
      let myCategoryProducts = []
  
      myProducts.forEach(product => {
          if (product.category == CategoryName) {
              myCategoryProducts.push(product)
          }
      });
      
    CreateProductView(myCategoryProducts)
     */

  // get data from API  bug API url og send videre
  let myCategoryURL = `https://dummyjson.com/products/category/${CategoryName}`;

  GetProductsByCategory(myCategoryURL);
}

//

//----------------------------------------------------------------------
function ProductCallback(myId) {
  console.log(myId);
  let myClickedProduct = null;

  myProducts.forEach((product) => {
    if (product.id == myId) {
      myClickedProduct = product;
    }
  });

  if (myClickedProduct == null) {
    // ingen produkt
    alert("no product");
  } else {
    // produkt
    console.log(myClickedProduct);
    clearApp();
    buildProduct(myClickedProduct);
  }
}

/* view code------------------------------------------------------------- */

function CreateNavBar(Categorydata) {
  let myNavHTML = "";

  Categorydata.forEach((categoryName) => {
    let myButton = `<button onclick="NavCallback('${categoryName}')" >${categoryName}</button>`;
    myNavHTML += myButton;
  });

  navElement.innerHTML = myNavHTML;
}

//----------------------------------------------------------------------
function CreateProductView(myCards) {
  //console.log(myCards);
  clearApp();

  myCards.forEach((product) => {
    // console.log(product);

    let myHTML = `<figure onclick="ProductCallback(${product.id})" ><h2>${product.title}</h2><img src="${product.thumbnail}"><h3>PRIS: ${product.price} rabat: ${product.discountPercentage}</h3></figure>`;

    productSection.innerHTML += myHTML;
  });
}

//----------------------------------------------------------------------
function buildProduct(product) {
  let myHTML = `<figure class="productDetails" onclick="GetProductData()" ><h2>${product.title}</h2>
  
    <img src="${product.images[0]}">
    <img src="${product.images[2]}">
    <img src="${product.images[3]}">
    <h3>PRIS: ${product.price}</h3>
    <p>${product.description}</p>
    </figure>
    `;

  productSection.innerHTML = myHTML;
}

//----------------------------------------------------------------------
function clearApp() {
  productSection.innerHTML = "";
}
