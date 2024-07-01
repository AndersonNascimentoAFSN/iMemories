import { IMovie } from "../types/video";


export async function getMovies() {
  try {
    const movies: Promise<IMovie[]> = fetch('http://localhost:3333/movies').then(response => response.json()).then(data => {
      return data
    })

    return movies
  } catch {
    null
  }
}

export async function getFavoritesMovies() {
  try {
    const movies: Promise<IMovie[]> = fetch('http://localhost:3333/movies?isFavorite=true').then(response => response.json()).then(data => {
      return data
    })

    return movies
  } catch {
    null
  }
}

export async function getMovieByName(name: string | undefined) {
  const url = name ? `http://localhost:3333/movies?name=${name}` : `http://localhost:3333/movies`

  try {
    const movie: Promise<IMovie[]> = fetch(url).then(response => response.json()).then(data => {
      return data
    })

    return movie
  } catch {
    null
  }
}

export async function getMovieById(id: string | undefined) {
  try {
    const movie: Promise<IMovie> = fetch(`http://localhost:3333/movies/${id}`).then(response => response.json()).then(data => {
      return data
    })

    return movie
  } catch {
    null
  }
}

export async function patchMovie(id: string, body: {
  isFavorite?: boolean
  name?: string
  url?: string
}) {
  try {
    const editedMovie: Promise<IMovie> = fetch(
      `http://localhost:3333/movies/${id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }
    ).then(response => response.json()).then(data => {
      return data
    })

    return editedMovie
  } catch {
    null
  }
}
