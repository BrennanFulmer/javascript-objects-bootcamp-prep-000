var playlist = {Slowdive: "Alison", 'My Bloody Valentine': "Sometimes"};

function updatePlaylist(playlist, artistName, songTitle) {
<<<<<<< HEAD
  playlist[artistName] = songTitle;
=======
  playlist.artistName = songTitle;
>>>>>>> 6263c5aa4a333301a32f33a53566c771e64fb4aa
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
<<<<<<< HEAD
  delete playlist[artistName];
=======
  delete playlist.artistName;
>>>>>>> 6263c5aa4a333301a32f33a53566c771e64fb4aa
  return playlist;
}

