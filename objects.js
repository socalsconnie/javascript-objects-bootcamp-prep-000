var playlist = new Object({ Chromeo: "Come Alive"  })

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
}

function removeFromPlaylist(playlist, artistName) {
  Object.assign({}, delete playlist.artistName)
}