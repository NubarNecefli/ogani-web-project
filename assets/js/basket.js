const div = document.getElementById("product");

function getimage() {
  div.innerHTML = "";

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  console.log(cart);
  cart.forEach((item, index) => {
    if (item) {
      const box = document.createElement("div");
      box.innerHTML = `
      <img src="${item.image}" alt="image">
      <p>${item.name}</p>
      <p>${item.price}</p>
      <p>${item.title}</p>
        
        <button onclick="removeItem(${index})">Remove from cart</button>
      `;
      div.appendChild(box);
    }
  });

}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  getimage();
}

  getimage();






function display(data) {
    product.innerHTML = ""
    data.forEach((item, index) => {
        let div = document.createElement('div');
        div.className = "box";
        div.innerHTML = `
    <img src="${item.image}" alt="image">
    <p>${item.title}</p>
    <h3>${item.price}$</h3>
    <button onclick="removeToCart(${index})"></i> Add To cart</button>
    `
        product.appendChild(div)
    })
}




let max = document.getElementById("max");
let min = document.getElementById("min");
let abc = document.getElementById("abc");

max.addEventListener("click", maxFunc)
min.addEventListener("click", minFunc)
abc.addEventListener("click", abcFunc)

function maxFunc() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let data = cart.sort((a, b) => (b.price - a.price));
    display(data)
}
function minFunc() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let data = cart.sort((a, b) => (a.price - b.price));
    display(data)
}
function abcFunc() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let data = cart.sort((a, b) => a.title.localeCompare((b.title)));
    display(data)
}






let form = document.getElementById("form");
form.addEventListener("submit", formFunc);
// btn.addEventListener('click', formFunc);
function formFunc(e){
    e.preventDefault()
    let inp = document.getElementById("inp");
    let val = inp.value;
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let data = cart.filter((item) => item.title.toLowerCase().includes(val.toLowerCase()))
    display(data)
}












const name = document.getElementById ('name');
const surname = document.getElementById ('surname');
const submit = document.getElementById ('myform');

submit.addEventListener('submit', function (event) {
  event.preventDefault(); 

  fetch('https://65680f2a9927836bd97406ef.mockapi.io/food/products', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
   name:name.value,
   surname:surname.value,
   myform: myform.value,
      }),
  })
  .then((response) => response.json()) 
  .then(data =>{
      console.log( data );
  })
})


function updateData(id) {

  console.log(id);
}

function deleteData(id) {
  fetch(`https://65680f2a9927836bd97406ef.mockapi.io/food/products`, {
      method: 'DELETE',
  })
      .then(response => response.json())
      .then(data => {
          console.log( data);
          getAllData(); 
      })
      .catch(error => console.error('Error deleting data:', error));
    }







