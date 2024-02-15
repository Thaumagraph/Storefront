GetProductData();

function GetProductData() {
  fetch("https://dummyjson.com/products")
    .then((result) => {
      return result.json();
    })
    .then((json) => {
      ProductReceived(json);
    });
}

// controller

function ProductReceived(productData) {
  console.log(productData);

  let myProducts = productData.myProducts;

  let myFeaturedProducts = [];

  myFeaturedProducts.push(myProducts[1], myProducts[3], myProducts[9]);

  console.log(myFeaturedProducts);
}
