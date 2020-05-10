fetch("https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72")
  .then((res) => res.json())
  .then(function (data) {
    data.map(function (quarto) {
      //alert(quarto.photo);
      document.getElementById("cards").innerHTML += ` <div class="card-content">
          <div class="card-header">
            <h3>${quarto.name}</h3>
            <p>${quarto.property_type}</p>
          </div>
          <img src="${quarto.photo}" alt="${quarto.name}" />
          <p class="price">R$ ${quarto.price},00</p>
        </div>`;
    });
  });
