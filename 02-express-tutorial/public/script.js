const productBtn = document.getElementById("btn");
const productContainer = document.getElementById("product-container");

productBtn.addEventListener("click", () => {
  fetch("api/v1/products")
    .then((response) => response.json())
    .then((data) => {
      let productList = "";

      data.forEach((product) => {
        productList += `
          <div class="product-card">
            <h2>${product.name}</h2>
            <p class="price">$${product.price}</p>
          </div>
        `;
      });

      productContainer.innerHTML = productList;
    });
});

// {
//   id: 1,
//   name: 'albany sofa',
//   image:
//     'https://dl.airtable.com/.attachments/6ac7f7b55d505057317534722e5a9f03/9183491e/product-3.jpg',
//   price: 39.95,
//   desc: `I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian.`,
// },
