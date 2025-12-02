import type { Movie } from "./types";

function HeroContent({ movie }: { movie: Movie }) {
  const url = `https://image.tmdb.org/t/p/w780`;

  return (
    <div className=" flex-1 relative flex items-center justify-center p-4 ">
      {movie ? (
        <div
          className="
            flex 
            flex-col-reverse md:flex-row 
            gap-6 sm:gap-10 
            justify-between 
            items-center 
            w-full 
            max-w-6xl 
            bg-black bg-opacity-70 
            backdrop-blur-sm 
            p-6 sm:p-8 
            rounded-xl 
            shadow-2xl 
            border border-gray-700 
            transition-all duration-300 
            hover:scale-[1.01]
            text-right rtl
          "
        >
          <div className="flex flex-col gap-4 flex-1">
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase p-2 w-full text-right">
              {movie.original_title}
            </h1>

            {movie.overview && (
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed p-2 max-h-32 overflow-hidden text-right">
                {movie.overview}
              </p>
            )}

            <a
              href={`https://www.themoviedb.org/movie/${movie.id}`}
              target="_blank"
            >
              <button
                className="
                bg-[#9747FF] 
                rounded-lg 
                cursor-pointer 
                w-full md:w-[200px] 
                py-3 
                font-semibold 
                text-xl sm:text-2xl 
                capitalize 
                text-white 
                hover:bg-[#7b39cc] 
                transition duration-200
                mt-4
              "
              >
                Watch Now
              </button>
            </a>
          </div>

          <div
            className="
            hidden md:block 
            md:w-1/3 
            max-w-[300px] 
            h-auto 
            rounded-xl 
            overflow-hidden 
            shadow-xl 
          "
          >
            <img
              src={`${url}${movie.poster_path}`}
              alt={movie.original_title}
              className="w-full h-full object-cover  transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      ) : (
        <h2 className="text-white text-center text-3xl font-bold p-4 bg-black bg-opacity-70 rounded-lg">
          لا يوجد أفلام لعرضها
        </h2>
      )}
    </div>
  );
}

export default HeroContent;
