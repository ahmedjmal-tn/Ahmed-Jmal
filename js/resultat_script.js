// Fonction pour récupérer le score depuis l'URL
function getScoreFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const score = urlParams.get('score');
    return score;
}

// Récupérer le score et l'afficher
const score = getScoreFromURL();
if (score !== null) {
    document.write("<p>Votre score est : " + score + " bonnes réponses.</p>");
} else {
    document.write("<p>Score non disponible.</p>");
}
