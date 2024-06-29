import { getMovieById, patchMovie } from "../services/movies"
import { IMovie } from "../types/movie"

export async function moviesComponent(
  movies: IMovie[],
) {
  const moviesCards = document.querySelector('.movies-cards') as HTMLElement

  moviesCards.innerHTML = ''

  let favoriteCount = movies.reduce((acc, movie) => {
    if (movie.isFavorite) {
      return acc + 1
    }

    return acc
  }, 0)


  movies.forEach(movie => {
    const div = document.createElement('div')
    div.classList.add('movie-card')
    div.setAttribute('data-id', String(movie.id))
    div.innerHTML = `
          <h2 class="movie-card-title">${movie.name}</h2>
          <span class="movie-card-title">${movie.isFavorite}</span>
        `

    div.addEventListener('click', async () => {
      const movieId = div.getAttribute('data-id') as string
      const movie = await getMovieById(movieId)

      if (movie) {
        const updatedMovie = await patchMovie(String(movie.id), {
          isFavorite: !movie.isFavorite
        })

        if (updatedMovie) {
          div.innerHTML = `
                <h2 class="movie-card-title">${updatedMovie.name}</h2>
                <span class="movie-card-title">${updatedMovie.isFavorite}</span>
              `

          favoriteCount = updatedMovie.isFavorite ? favoriteCount + 1 : favoriteCount - 1

          const favoriteCountElement = document.querySelector('#favorite-count') as HTMLElement | null

          if (favoriteCountElement) {
            favoriteCountElement.innerText = `(${favoriteCount})`
          }
        }
      }
    })

    const favoriteCountElement = document.querySelector('#favorite-count') as HTMLElement | null

    if (favoriteCountElement) {
      favoriteCountElement.innerText = `(${favoriteCount})`
    }

    moviesCards.appendChild(div)
  })
}
