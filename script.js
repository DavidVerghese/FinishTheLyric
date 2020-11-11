const attach = document.querySelector('#attach')

const musicDiv = document.createElement('div')
musicDiv.setAttribute('class', 'music')
attach.append(musicDiv)

// async function dearPrudence(artist, song) {
//   const response = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`)

//   //
//   try {
//     const lyrics = response.data.lyrics
//     let firstLine = ''
//     for (i = 0; i < 37; i++) {
//       firstLine += lyrics[i]
//     }
//     const displayMusic = document.createElement('p')
//     displayMusic.innerText = firstLine
//     musicDiv.append(displayMusic)
//   }
//   catch (error) {
//     console.log("error!")
//   }
// }

// dearPrudence('the_beatles', 'dear prudence')

async function song(artist, song) {
  const response = await axios.get(`https://orion.apiseeds.com/api/music/lyric/${artist}/${song}?apikey=lR78ECWIWgsXd0MPYBopACxHpWL2Q6fOVET7KJtjI8vIHGnk0UVNaU0SdIs2JdVE`)
  console.log(response.data.result.track.text)
  try {
    const lyrics = response.data.result.track.text
    let firstLine = ''
    for (i = 0; i < 37; i++) {
      firstLine += lyrics[i]
    }
    const displayMusic = document.createElement('p')
    displayMusic.innerText = firstLine
    musicDiv.append(displayMusic)


  }
  catch (error) {
    console.log("error!")
  }
}

song('Beatles', 'Penny Lane')
