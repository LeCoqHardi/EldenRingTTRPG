function openCard(cardElement) {
    // Basculer l'ouverture/fermeture de la carte cliquée
    cardElement.classList.toggle('open');
}

function openPopup(cardElement) {
    const textOverlay = cardElement.querySelector('.text-overlay').innerHTML;
    document.getElementById('popup-text').innerHTML = textOverlay;
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
