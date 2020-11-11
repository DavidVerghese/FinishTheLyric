
const musicDiv = document.createElement('div')
musicDiv.setAttribute('class', 'music')
document.body.append(musicDiv)

async function music(artist, song) {
  //console.log('hi')
  const response = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`)
  try {
    const lyrics = response.data.lyrics
    //console.log(response.data.lyrics)
    const displayMusic = document.createElement('p')
    displayMusic.innerText = response.data.lyrics
    musicDiv.append(displayMusic)
  }
  catch (error) {
    console.log("error!")
  }
}

music('the beatles', 'something')

// document.querySelector('#clicked').addEventListener("click", function () {
//   music('the beatles', 'hey jude')
// })

