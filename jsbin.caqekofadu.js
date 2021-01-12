// Test formatioçn javascript
// =========================================
let numberOfSeasons = 6;
let numberOfEpisodes = 12;
let numberOfVideos = numberOfSeasons * numberOfEpisodes ;

let episodeTitle = 'resumé'
let episodeDuration = 30
let hasBeenWatched = false

let str = 'Mozilla';

// =========================================

document.querySelector('#episode-info').innerText = 
`${numberOfVideos} Videos
Episode: ${episodeTitle}
Duration: ${episodeDuration} min
${hasBeenWatched ? 'Already watched' : 'Not yet watched'}
titre ${str.substr(0,2)}`
