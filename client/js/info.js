const fetchData = async () => {
  try {
    const urlParams = new URLSearchParams(window.location.search)

    const id = urlParams.get('id')

    const apiUrl = `http://127.0.0.1:3000/pokemons/${id}`

    const response = await fetch(apiUrl)

    const data = await response.json()

    return data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

const showDetail = async () => {
  const data = await fetchData()

  if (data) {
    const name = document.querySelector('.name')

    name.innerHTML = data.name

    const infoImg = document.querySelector('.info-img')

    const intro = document.querySelector('.intro_content')

    infoImg.src = data.image

    intro.innerHTML = data.introduction

    const evolutionCards = document.querySelector('.evolution_cards')
    data.evolutions.map((evolution) => {
      const card = document.createElement('div')

      card.classList.add('card')

      const img = document.createElement('img')

      img.classList.add('img')

      img.src = evolution.image

      const evolutionName = document.createElement('p')

      evolutionName.innerHTML = evolution.name

      card.appendChild(img)

      card.append(evolutionName)

      evolutionCards.appendChild(card)

      card.addEventListener('click', () => {
        redirectToDetailPage(evolution.pokemonId)
      })
    })
  }
  else {
    const info=document.querySelector('.info')
    info.innerHTML = `<div class="not_found">404  Not Found </div>`
  }
}

showDetail()

function redirectToDetailPage(pokemonId) {
  window.location.href = `info.html?id=${pokemonId}`
}



const logo = document.querySelector('.logo_left')
logo.addEventListener('click', () => {
  window.location.href = `home.html`
})