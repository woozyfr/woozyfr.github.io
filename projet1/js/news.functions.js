

const cards = document.querySelector(".news-section");

// Creation d'une base template pour une card
function template_news(obj) {

    const card = document.createElement("div");
    card.classList.add("news-bloc");
    card.classList.add("buzz-out-on-hover");
    card.classList.add("news-bloc-"+obj.category_key);
    card.onclick = function() { window.location = "https://www.google.com/search?q="+obj.title; };
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


}





// Init
const newsCards = document.querySelector(".news-section");
console.log(newsCards);
newsDatabase.forEach(function (item) {
    template_news(item);
});





