class Product {
  constructor(name, price, description, brand, imageUrl,) {
      this.name = name;
      this.description = description;
      this.brand = brand;
      this.imageUrl = imageUrl;
      this.price = price;
  }
}

let endpoint = "https://striveschool-api.herokuapp.com/api/product/";

function getData(endpoint) {
  fetch(endpoint, {
      method: "GET",
      headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc5ZDY1ZTdjMGRkOTAwMThjOTM5ODkiLCJpYXQiOjE3MDI0ODM1NTAsImV4cCI6MTcwMzY5MzE1MH0.buKjbSZygH7AqRR3OTGe177xjw0Gbhti6BLXZMMT3PY"
      }
  })
      .then(response => response.json())
      .then(data => {
          console.log(data);
      })
      .catch(err => console.log(err));
}

document.addEventListener("DOMContentLoaded", async () => {
  if (window.location.pathname.includes('home_page.html')) {
      getData(endpoint);
      createProductCards();
  }
  getData(endpoint);
  if (window.location.pathname.includes('backoffice.html')) {
      document.querySelector("#addItem").addEventListener('click', () => {addNewProductCard()});
  }
});

function postData(data, endpoint) {
  fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc5ZDY1ZTdjMGRkOTAwMThjOTM5ODkiLCJpYXQiOjE3MDI0ODM1NTAsImV4cCI6MTcwMzY5MzE1MH0.buKjbSZygH7AqRR3OTGe177xjw0Gbhti6BLXZMMT3PY"
      },
      
  })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
}

function addNewProductCard() {
  let nome = document.querySelector('#name').value;
  console.log(nome);
  let marca = document.querySelector('#brand').value;
  console.log(marca);
  let descrizione = document.querySelector('#description').value;
  let prezzo = document.querySelector('#price').value;
  let immagine = document.querySelector('#imageUrl').value;
  let p = new Product(nome, prezzo, descrizione, marca, immagine);
  console.log(p);
  postData(p, endpoint);
}

function createProductCards() {
  let container = document.querySelector("div#containerCards");
  fetch(endpoint, {
      method: "GET",
  headers: {
  Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc5ZDY1ZTdjMGRkOTAwMThjOTM5ODkiLCJpYXQiOjE3MDI0ODM1NTAsImV4cCI6MTcwMzY5MzE1MH0.buKjbSZygH7AqRR3OTGe177xjw0Gbhti6BLXZMMT3PY"
      }
  })
  .then(response => response.json())
  .then(data => data.forEach(element => {
          let card = `
              <div class="col">
                  <div class="card h-100 border border-warning">
                      <img src="${element.imageUrl}" class="card-img-top" alt="${element.name}">
                      <div class="card-body">
                          <h5 class="card-title">${element.name}</h5>
                          <p class="card-text">${element.description}</p>
                          <p class="card-text">${element.brand}</p>
                          <p class="card-text">${element.price}</p>
                      </div>
                    </div>
              </div>`;
          container.innerHTML += card;
      }))
      .catch(err => console.log(err));
}


       /* let productID = new URLSearchParams(window.location.search).get('productID')

        const deleteProduct = async () => {
                        
                        let response = await fetch(endpoint + productID, {
                            method: 'DELETE',
                            headers: {
                                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc5ZDY1ZTdjMGRkOTAwMThjOTM5ODkiLCJpYXQiOjE3MDI0ODM1NTAsImV4cCI6MTcwMzY5MzE1MH0.buKjbSZygH7AqRR3OTGe177xjw0Gbhti6BLXZMMT3PY"
                            }
                        })

                        console.log(response);

                        if (response.ok) {
                            alert('PRODOTTO ELIMINATO CORRETTAMENTE');
                            window.location.replace('home_page.html');
                        } else {
                            alert("PROBLEMA NELL'ELIMINAZIONE DEL PRODOTTO");
                        }
                    }*/