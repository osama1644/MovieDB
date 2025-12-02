import { Link } from "react-router-dom";
import type { Movie } from "./types";

const url = `https://image.tmdb.org/t/p/w500`;

function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div
      key={movie.id}
      className="flex flex-col gap-3 border rounded-2xl overflow-hidden shadow-lg  from-[#f0f0f5] to-[#dcdce0]"
    >
      <div className="h-[395px] relative group">
        <img
          src={`${url}/${movie.poster_path}`}
          alt={movie.original_title}
          className="h-full w-full object-cover"
        />
        {/* overlay */}
        <div className="absolute w-full h-full scale-x-0 group-hover:scale-x-100 transition bg-gray-600/50 text-white font-bold text-2xl top-0 left-0 flex flex-col justify-center items-center gap-4 p-4">
          <p className="text-xl md:text-2xl text-center">اسم الفيلم: {movie.title}</p>
          <p className="text-lg md:text-xl">تاريخ الإصدار: {movie.release_date}</p>
          <p className="text-lg md:text-xl">عدد المقيمين: {movie.vote_count}</p>
          <p className="text-lg md:text-xl">التقييم: {movie.vote_average}</p>
        </div>
      </div>

      
      <Link
        to={`/movie/${movie.id}`}
        className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-b-2xl text-center transition"
      >
        عرض التفاصيل
      </Link>
    </div>
  );
}

export default MovieCard;
