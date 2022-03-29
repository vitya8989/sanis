let itemCardFavorite = document.querySelectorAll('.item_card__favorite');

for (let i = 0; i < itemCardFavorite.length; i++) {
    itemCardFavorite[i].onclick = () => {
        itemCardFavorite[i].classList.toggle('added_to_favorite');
    }
}