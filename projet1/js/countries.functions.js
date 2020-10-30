let filter_active = "all";

function filterCountries(country) {
    const all_countries = document.querySelectorAll('[data-filter-block]');

    if(filter_active === country){
        filter_active = "all";
    }else{
        filter_active = country;
    }

    if(filter_active === "all"){
        for (let i = 0; i < all_countries.length; i++) {
            all_countries[i].style.display = "flex";
        }
    }else{
        for (let i = 0; i < all_countries.length; i++) {
            if (all_countries[i].dataset.filterBlock === country) {
                all_countries[i].style.display = "flex";
            } else {
                all_countries[i].style.display = "none";
            }
        }
    }
}







// Creation d'une base template pour une card
function template_country_card(obj) {

    const card = document.createElement("div");
    card.classList.add("article-bloc");
    card.classList.add("article-bloc-"+obj.category_key);
    card.classList.add("article-bloc-"+obj.category_key);
    card.dataset.filterBlock = obj.category_key;

    countriesCards.appendChild(card);

    // Gestion de l'image
    const cardPictures = document.createElement("div");
    card.appendChild(cardPictures);

    const images = document.createElement("img");
    images.setAttribute('src', obj.picture);
    cardPictures.appendChild(images);

    // Gestion du contenu
    const cardContent = document.createElement("div");
    card.appendChild(cardContent);

    const cardContentTitle = document.createElement("h2");
    cardContentTitle.textContent = obj.name;
    cardContent.appendChild(cardContentTitle);

    const cardContentTitleTags = document.createElement("span");
    cardContentTitleTags.classList.add("tags");
    cardContentTitleTags.classList.add("tags-"+obj.category_key);
    cardContentTitleTags.textContent = obj.category_name;
    cardContentTitle.appendChild(cardContentTitleTags);

    const cardContentText = document.createElement("p");
    cardContentText.textContent = obj.text;
    cardContent.appendChild(cardContentText);

    const cardContentButtonContainer = document.createElement("div");
    cardContentButtonContainer.classList.add("right");
    cardContent.appendChild(cardContentButtonContainer);
   

    const cardContentButton = document.createElement("a");
    cardContentButton.textContent = "En voir plus";
    cardContentButton.href = obj.url;
    cardContentButton.classList.add("btn");
    cardContentButton.classList.add("btn-default");
    cardContentButtonContainer.appendChild(cardContentButton);
}







// Init
const countriesCards = document.querySelector(".article-section");
countriesDatabase.forEach(function (item) {
    template_country_card(item);
  });







