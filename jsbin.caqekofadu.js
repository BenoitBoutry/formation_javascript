// Create your variables here
// ==========================================

let numberOfSeasons = 6;
let numberOfEpisodes = 12;

let numberOfVideos = numberOfSeasons * numberOfEpisodes ;
// ==========================================

let paragraph = document.querySelector('#info');
paragraph.innerText = `${numberOfVideos} Videos`