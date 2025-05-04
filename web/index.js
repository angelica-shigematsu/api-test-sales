import fillProduct from "./src/index.js"
let url = 'http://localhost:8080';

export const getProduct = (descriptionName) => {
  return fetch(url + "/getProduct", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(descriptionName)
  }).then(response => {
    if(response.statusText == 'OK') {
      fillProduct(response);
    }
  })
}

export const createSale = (body) => {
  return fetch(url + "/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
}