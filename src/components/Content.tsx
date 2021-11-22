import { MovieCard } from '../components/MovieCard';
import { MovieProps } from '../App'

interface ContentProps {
  movies: MovieProps[],
  categoryName: string
}

export function Content(props: ContentProps) {
  return (
    
      <div className="container">
        <header>
          <span className="category">Categoria:<span> {props.categoryName}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {props.movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  )
}