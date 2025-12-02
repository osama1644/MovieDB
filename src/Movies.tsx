import { useMovies } from "./hooks";
import MovieCard from "./MovieCard";

function Movies() {
  const { movies } = useMovies();
  return (
    <div>
      {movies.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-5 md:px-20 bg-[#1E1E1E] py-4">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      ) : (
        <h1 className="text-center text-3xl font-bold mt-10">
          لا يوجد افلام مطابقه
        </h1>
      )}
    </div>
  );
}

export default Movies;
