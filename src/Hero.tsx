import { useEffect, useState } from "react";
import { useMovies } from "./hooks";
import NavBar from "./NavBar";
import HeroCotent from "./HeroCotent";

function Hero() {
  const { movies } = useMovies();

  const [movieNum, setMovieNum] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      let randomIndex;
      if (movies.length > 0 && movies.length === 1) {
        randomIndex = 1;
        setMovieNum(randomIndex);
      } else if (movies.length > 1) {
        randomIndex = Math.floor(Math.random() * movies.length + 1);
        setMovieNum(randomIndex);
      }
    }, 4000);

    return () => clearInterval(interval); // تنظيف الـ interval عند unmount
  }, [movies]);
  return (
    <div
      className="h-[650px] bg-red-300 px-4 md:px-20 py-6 relative overflow-hidden flex flex-col"
      style={{
        background:
          movies.length > 0
            ? `url(https://image.tmdb.org/t/p/w500/${movies[movieNum]?.poster_path}) no-repeat center/cover`
            : "red",
      }}
    >
      <NavBar />
      <HeroCotent movie={movies[movieNum]} />
    </div>
  );
}

export default Hero;
