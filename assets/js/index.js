const div = document.getElementById("product");
const btn = document.getElementById("btn");

let page = 1;
let limit = 3;

btn.addEventListener("click", getimage);
function getimage() {
  let skip = (page - 1) * limit;
  axios.get(`https://65680f2a9927836bd97406ef.mockapi.io/food/products?page=${page}&limit=${limit}&skip=${skip}`
    )
    .then((res) => {
      db = res.data;
      db.map((item) => {
        console.log(item);
        const box = document.createElement("div");
        box.innerHTML = `
        <img src="${item.image}" alt="image">
                <p>${item.name}</p>
                <p>${item.price}</p>
                <p>${item.title}</p>
                
                
                <button onclick='addToBasket(${item.id})'>Button</button>
                `;
        div.appendChild(box);
      });
      page++;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
getimage();

function addToBasket(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(db.find((item) => item.id == id));
  localStorage.setItem("cart", JSON.stringify(cart));
}