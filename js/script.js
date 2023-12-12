/*fetch('https://striveschool-api.herokuapp.com/api/product/',{
    method: 'GET',
    headers:{
        Authorization: ' Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4M2NlY2MwNTgzNTAwMTg1MjMwZjQiLCJpYXQiOjE3MDIzNzg3MzIsImV4cCI6MTcwMzU4ODMzMn0.-26lQkcwLHKuko-dSNKXPDo-YR3edupTUH2uI1l-B6k'

    }

})
    
  .then(response => response.json())
  .then(json => console.log(json))

let submitBtn = document.querySelector('#submit')
submitBtn.addEventListener("click", addProduct);



fetch("https://striveschool-api.herokuapp.com/api/product", {

        // Chiamata di tipo POST
        method: "POST", // Method della chiamata - Salvataggio di una risorsa
        body: JSON.stringify(obj), // nel body della richiesta invio il dato al server
        headers: {
          "Content-Type": "application/json", // il tipo del contenuto che sto inviando
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDI3OWMwNTgzNTAwMTg1MjMxOWQiLCJpYXQiOjE3MDIzODAxNTMsImV4cCI6MTcwMzU4OTc1M30.-ZyXsx7p7y0c2Ww3K9fLdtNmZu2BAVCGGJo2T-N1Vlg"
        },
      })
      .then(response => response.json())
        .then(json => {
    console.log("Risposta del server alla chiamata POST:", json);
})
.catch(error => console.error("Errore durante la chiamata POST:", error));*/