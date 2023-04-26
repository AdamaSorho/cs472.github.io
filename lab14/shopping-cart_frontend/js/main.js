"use strict";

window.onload = getProducts;

async function getProducts() {
  const response = await fetch("http://localhost:3000/products");
  const jsonData = await response.json();

  for (let e of jsonData) {
    addNewProductRowToTable(e.id, e.title, e.description, e.price);
  }
}

function addNewProductRowToTable(id, title, description, price) {
  //   const row = document.createElement("tr");
  //   let cell = document.createElement("td");
  //   cell.appendChild(document.createTextNode(id));
  //   row.appendChild(cell);

  //   cell = document.createElement("td");
  //   cell.appendChild(document.createTextNode(title));
  //   row.appendChild(cell);

  //   cell = document.createElement("td");
  //   cell.appendChild(document.createTextNode(description));
  //   row.appendChild(cell);

  //   cell = document.createElement("td");
  //   cell.appendChild(document.createTextNode(price));
  //   row.appendChild(cell);
  const row = `
    <tr>
        <td>${id}</td>
        <td>${title}</td>
        <td>${description}</td>
        <td>${price}</td>
        <td>
        <button product-id="${id}" class="btn btn-bg shopping-cart-btn" data-toggle="tooltip" data-placement="top"
        title="Edit Product">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
</svg>
      </button>
      <button product-id="${id}" class="btn btn-bg" data-toggle="tooltip" data-placement="top"
        title="Delete Product">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>

      </button>
        </td>
    </tr>
  `;

  //   document.getElementById("tbodyProductList").appendChild(row);
  document.getElementById("tbodyProductList").innerHTML += row;
}

async function postProduct(title, description, price) {
  let b = { title: title, description: description, price: price };
  let setting = {
    method: "POST",
    body: JSON.stringify(b),
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch("http://localhost:3000/products", setting);
  const jsonData = await response.json();
  return jsonData;
}

document.getElementById("btnRegister").addEventListener("click", (event) => {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const price = document.getElementById("price").value;
  data = postProduct(title, description, price);

  document.getElementById("title").innerHTML = data;
  document.getElementById("myform").reset();
});
