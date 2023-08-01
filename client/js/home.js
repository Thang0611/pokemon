function fetchData() {
  // Replace 'API_ENDPOINT' with the actual URL of the API you want to call
  const apiUrl = 'http://127.0.0.1:3000/pokemons'

  const data = fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      const listItem = document.querySelector('.list-item')
      data.map((pokemon) => {
        const item = document.createElement('div')
        item.classList.add('item')
        const img = document.createElement('img')
        img.src = pokemon.image
        img.classList.add('img')
        const namePokemon = document.createElement('p')
        namePokemon.innerHTML = pokemon.name
        item.appendChild(img)
        item.appendChild(namePokemon)
        listItem.appendChild(item)
       item.addEventListener('click', (event) => {
         console.log('click')
         redirectToDetailPage(pokemon.id)
       })
      })
    })
    .catch((error) => {
      console.error('Error fetching data:', error)
    })
  return data
}
fetchData()

const btnSearch = document.querySelector('.btn-search')
console.log(btnSearch)
btnSearch.addEventListener('click', async () => {
  console.log(123)
  const data = await search()
  console.log(data)
  displayResults(data)
})
const search = async () => {
  try {
    const searchQuery = document.querySelector('.input-search').value
    const apiUrl = `http://127.0.0.1:3000/pokemons/?search=${encodeURIComponent(
      searchQuery
    )}`

    const response = await fetch(apiUrl)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}


function displayResults(data) {
  const searchResultsDiv = document.querySelector('.list-item')
  searchResultsDiv.innerHTML = ''

  if (data && data.length > 0) {
    const listItem = document.querySelector('.list-item')
    data.forEach((pokemon) => {
      const item = document.createElement('div')
      item.classList.add('item')
      const img = document.createElement('img')
      img.src = pokemon.image
      img.classList.add('img')
      const namePokemon = document.createElement('p')
      namePokemon.innerHTML = pokemon.name
      item.appendChild(img)
      item.appendChild(namePokemon)
      listItem.appendChild(item)
      item.addEventListener('click', () => {
        console.log('click')
        redirectToDetailPage(pokemon.id)
      })
    })
  } else {
    const noResultsDiv = document.createElement('div')
    noResultsDiv.textContent = 'Không tìm thấy pokemon'
    searchResultsDiv.appendChild(noResultsDiv)
  }
}

function redirectToDetailPage(pokemonId) {
  window.location.href = `info.html?id=${pokemonId}`
}


