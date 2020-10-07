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






    

    const all_filters = document.querySelectorAll('[data-filter-name]');
    console.log(all_filters);
        if(filter_active === "all"){
            for (let i = 0; i < all_filters.length; i++) {
                all_filters[i].classList.remove("tags-inactive");
                all_filters[i].classList.remove("tags-filter-focused");
            }
        }else{

            console.log("for not all!!");
            for (let i = 0; i < all_filters.length; i++) {
                all_filters[i].classList.add("tags-inactive");
                all_filters[i].classList.remove("tags-filter-focused");
                if (all_filters[i].dataset.filterName === filter_active) {
                    all_filters[i].classList.remove("tags-inactive");
                    all_filters[i].classList.add("tags-filter-focused");
                }
            }
        }
    
    

        


}







// Creation d'une base template pour une card
function template_country_card(obj) {

    const card = document.createElement("div");
    card.classList.add("article-bloc");
    card.classList.add("article-bloc-"+obj.category.key);
    card.classList.add("article-bloc-"+obj.category.key);
    card.dataset.filterBlock = obj.category.key;

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
    cardContentTitleTags.classList.add("tags-"+obj.category.key);
    cardContentTitleTags.textContent = obj.category.name;
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

for (var i in countriesV2) {
    template_country_card(countriesV2[i]);
  }


// countriesV2.keys(a).forEach(function (key){
//     console.log(a[key]);
// });


// countriesV2.forEach(function (item) {
//     console.log(item);
//     //template_country_card(item);
// });







