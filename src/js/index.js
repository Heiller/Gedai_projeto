window.onload = function () {
    fetch('https://projeto-treinamento-web-production.up.railway.app/gedaiflix-api/cards')
    .then(async (data) => {
        const response = await data.json();
        console.log({response});

        const cards = document.querySelector(".episode-container");

        responde.array.forEach(element => {
            const card = document.createElement("div");
            card.className = "card";

            const front = document.createElement("div");
            front.className = "front"

            const frontimg = document.createElement("img");
            frontImg.alt = cardData.name;
            frontImg.className = "card-image";
            frontImg.src = `data:Image/jpg;base64,${cardData.Image}`;

            front.appendChild(frontImg);
            card.appendChild(front);

            const back = document.createElement("div");
            back.className = "back";

            const h2 = document.createElement("h2");
            h2.textContent = cardData.name;

            const p = document.createElement("p");
            p.textContent = "trailer-button";

            const button = document.createElement("button");
            button.className = "trailer-button";
            button.id = cardData.trailer;
            button.textContent = "Veja o trailer"

            back.appendChild(button);

            card.appendChild(back);

            cards.appendChild(card);
        });
    })
    .catch((error) => {
        console.log(error);
        alert('erro ao retornar dados.')
    })
}