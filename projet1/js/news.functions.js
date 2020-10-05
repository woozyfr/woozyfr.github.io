

const cards = document.querySelector(".news-section");

// Creation d'une base template pour une card
function template_news(obj) {

    const card = document.createElement("div");
    card.classList.add("news-bloc");
    card.classList.add("buzz-out-on-hover");
    card.classList.add("news-bloc-"+obj.category_key);
    card.onclick = function() { window.location = "http://www.mozilla.org"; };
    newsCards.appendChild(card);

    // Gestion du contenu :title
    const cardContent = document.createElement("div");
    cardContent.classList.add("news-bloc-title");
    cardContent.textContent = obj.title;
    card.appendChild(cardContent);

    // Gestion du contenu : msg
    const cardContentText = document.createElement("p");
    cardContentText.textContent = obj.text;
    card.appendChild(cardContentText);
 
    // const cardContentButtonContainer = document.createElement("div");
    // cardContentButtonContainer.classList.add("center");
    // card.appendChild(cardContentButtonContainer);
   
    // const cardContentButton = document.createElement("a");
    // cardContentButton.textContent = "En voir plus";
    // cardContentButton.href = obj.url;
    // cardContentButton.classList.add("btn");
    // cardContentButton.classList.add("btn-news");
    // cardContentButtonContainer.appendChild(cardContentButton);

}





// Init
const newsCards = document.querySelector(".news-section");
console.log(newsCards);
newsDatabase.forEach(function (item) {
    template_news(item);
});





