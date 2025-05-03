import CreateSalesController from "./controller/SalesController.js"
import ProductsController from "./controller/ProductController.js";

import fetch from "node-fetch"

let dataCepFind = []

const getData = async(cep) => {
  await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(response => {
    response.json()
      .then(data => { showData(data) })
  })
}
const showData = async (result) => {

  let resultado = Array(result)

  resultado.forEach(element => {
    dataCepFind.push(element)

  });
};


let products = []
let amount = []

document.addEventListener("keypress", async (e) => {

  let cep = document.getElementById("cep").value;

  if (e.key === "Enter") {

    let scriptHtml = document.getElementById("form");

    getData(cep);
    console.log("hi");
  
    dataCepFind.forEach(data => {
      document.getElementById("cep").value = cep;

      scriptHtml.innerHTML += `<br>`
      scriptHtml.innerHTML += `
        <label>Data</label>
        <input type="text" id="data" value="${new Date()}">
        <br>`

      scriptHtml.innerHTML += `
         <label>Rua</label>
        <input type="text" id="logradouro" value="${data.logradouro}">
        <br>`
      scriptHtml.innerHTML += `
         <label>Bairro</label>
        <input type="text" id="bairro" value="${data.bairro}">
        <br>`
      scriptHtml.innerHTML += `
         <label>Número</label>
        <input type="text" id="numero">
        <br>`
      scriptHtml.innerHTML += `
         <label>Cidade</label>
        <input type="text" id="cidade" value="${data.localidade}">
        <br>`
      scriptHtml.innerHTML += `
         <label>Estado</label>
        <input type="text" id="estado" value="${data.estado}">
        <br>`
    })
  } else if (e.target.id == "Comprar") {

    CreateSalesController.create(products, amount);

  } else if (e.target.id == "Adicionar") {
    let product = document.getElementById("inputSearchProducts").value;
    console.log(product)

    let getDataProduct = await ProductsController.listByDescription(product);
    console.log(getDataProduct)

    fillProductsInTable(getDataProduct);
  }
})

const fillProductsInTable = (product) => {
  document.getElementsByTagName("tbody")[0].innerHTML += ` 
    <tr>
      <th scope="row">${product.description}</th>
      <td id="product_id">${product.id}</td>
      <td>${product.supplier}</td>
      <td>${product.price}</td>
    </tr>`
    products.push(product.id);
    amount.push(product.price);
}


