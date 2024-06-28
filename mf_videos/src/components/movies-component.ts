import { IMovie } from "../types/movie"

export function moviesComponent(movies: IMovie[], container: HTMLElement) {
  console.log('pathname', window.location.pathname)
  console.log('movies in', movies)
  const movieCards = document.createElement('div')
  movieCards.classList.add('movie-cards')

  movies.forEach(movie => {
    const div = document.createElement('div')
    div.classList.add('movie-card')

    div.innerHTML = `
          <h2 class="movie-card-title">${movie.name}</h2>
        `

    movieCards.appendChild(div)
  })

  container.appendChild(movieCards)
}
