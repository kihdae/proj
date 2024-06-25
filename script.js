// Array to store objects representing songs
let playlist = [];


let display = document.querySelector(".display");
let displaySong = document.querySelector(".display-song");
let displayArtist = document.querySelector(".display-artist");
let displayImage = document.querySelector(".display-image");
let displayLink = document.querySelector(".display-link");


let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// Function to add song information to the playlist array
let add = document.querySelector(".add");
add.addEventListener('click', function() {
  addSongInfo();
  displaySongInfo();
});

function addSongInfo() {
  //input values
  let image = document.querySelector(".image").value.trim();
  let songName = document.querySelector(".song-name").value.trim();
  let artist = document.querySelector(".artist").value.trim();
  let songLink = document.querySelector(".song-link").value.trim();

  // Check if any required field is empty
  if (!image || !songName || !artist || !songLink) {
    alert("Please fill in all required fields.");
    return; // Exit the function if any field is empty
  }
  let successMessage = document.getElementById("successMessage");
  if (successMessage) {
    successMessage.style.display = "block";
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 2000); // Hide after 2 seconds
  }
  // Create a new song object and add it to the playlist
  let newSong = {
    image: image,
    songName: songName,
    artist: artist,
    songLink: songLink,
  };
  playlist.push(newSong);
}

let initialSongs = [
{
  image: "https://i.scdn.co/image/ab67616d0000b2736c93b18e2b198ee3ece40a99",
  songName: "I Been Drinking",
  artist: "Future",
  songLink: "https://www.youtube.com/watch?v=fYsW4GoHwAo",
},
{
  image: "https://f4.bcbits.com/img/a1666561334_5.jpg",
  songName: "Do ya like",
  artist: "Childish Gambino",
  songLink: "https://www.youtube.com/watch?v=DsE1MsTWM5s"
},
  {
    image: "https://f4.bcbits.com/img/a0698136415_10.jpg",
    songName: "B.O.R(Birth of Rap)",
    artist: "Lil B (AKA Based God)",
    songLink: "https://www.youtube.com/watch?v=OeLQOfb6IBU"
  },
  {
    image: "https://i.scdn.co/image/ab67616d0000b273cbf6c960af111d28a6356771",
    songName: "Undercover",
    artist: "Baby Smoove",
    songLink: "https://www.youtube.com/watch?v=2tfn5Z6V_QI"
  },
  { 
    image: "https://i1.sndcdn.com/artworks-gTTyKppkQ9Nj-0-t500x500.jpg",
    songName: "My Collection",
    artist: "Future",
    songLink: "https://www.youtube.com/watch?v=aM0C03JcVgs"
  },
  {
  image: "https://i.scdn.co/image/ab67616d0000b2735eae69bbe37d5f382155e387",
  songName: "I Don’t Care If You’re Contagious",
  artist: "Pierce The Veil",
  songLink: "https://www.youtube.com/watch?v=RPxffXhoYi4"
},
  ]

function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}

function initializePlaylist() {
  playlist = [...initialSongs];
  displaySongInfo();
}
initializePlaylist();


// Function - stored songs
function displaySongInfo() {
  emptyDisplay();

  // Looping through the playlist array and display song information
  for (let i = 0; i < playlist.length; i++) {
    displayImage.innerHTML += `<img src="${playlist[i].image}" alt="Song Image">`;
    displaySong.innerHTML += `<p>${playlist[i].songName}</p>`;
    displayArtist.innerHTML += `<p>${playlist[i].artist}</p>`;
    displayLink.innerHTML += `<a href="${playlist[i].songLink}" target="">Listen</a>`;
  }
}


let shuffleButton = document.querySelector(".shuffle");
shuffleButton.addEventListener('click', function() {
  shufflePlaylist();
  displaySongInfo();
});

function shufflePlaylist() {
  playlist.sort(() => Math.random());
}

// Function to open the link of the first song in the shuffled playlist
function openLink() {
  if (playlist.length > 0) {
    window.open(playlist[0].songLink, "");
  } else {
    console.log("Playlist is empty.");
  }
}
let openLinkButton = document.querySelector(".open-link");
openLinkButton.addEventListener('click', function() {
  openLink();
});
shuffleButton.onclick = function () {
  playlist.sort(() => Math.random() - 0.5);
  displaySongInfo();
};

let clearButton = document.querySelector(".clear");

clearButton.addEventListener('click', function () {
  clearPlaylist();
  displaySongInfo();
});

function clearPlaylist() {
  playlist = []; // Clear the playlist array
}


