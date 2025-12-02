import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Movie } from "./types";

function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const imgBase = "https://image.tmdb.org/t/p/w500";

  async function getMovie() {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=0407056f7817ef080fb7defc3713ce58&language=ar`
      );
      setMovie(res.data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovie();
  }, [id]);

  if (loading) return <h1>جاري التحميل...</h1>;
  if (!movie) return <h1>لا توجد بيانات للفيلم</h1>;

  return (
    <div className="container mx-auto px-4 md:px-20 py-10 min-h-screen bg-gray-900 text-white">
      <div className="flex flex-col md:flex-row-reverse gap-8 bg-gray-800 p-6 rounded-2xl shadow-2xl">
        <div className="md:w-1/3 flex justify-center">
          <img
            src={imgBase + movie.poster_path}
            alt={movie.title}
            className="rounded-xl shadow-2xl w-full max-w-sm md:max-w-none md:w-full object-cover transform transition duration-500 hover:scale-105"
          />
        </div>
        <div className="md:w-2/3 flex flex-col justify-between text-right">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-extrabold text-teal-400 border-b pb-2 border-gray-600">
              {movie.title}
            </h1>

            <p className="text-gray-300 text-lg">
              <span className="font-bold text-gray-100">تاريخ الإصدار: </span>
              {movie.release_date}
            </p>

            <p className="text-gray-300 text-lg">
              <span className="font-bold text-gray-100">عدد المقيمين: </span>
              {movie.vote_count}
            </p>

            <p className="text-gray-300 text-lg">
              <span className="font-bold text-gray-100">التقييم: </span>
              <span className="text-yellow-400 font-extrabold">
                {movie.vote_average}
              </span>{" "}
              ⭐
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a
              href={`https://www.themoviedb.org/movie/${movie.id}`}
              target="_blank"
              className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-xl text-center w-full sm:w-auto"
            >
              مشاهدة الفيلم
            </a>
            <Link
              to="/"
              className="bg-gray-600 hover:bg-gray-700 py-2 px-4 rounded-xl text-center w-full sm:w-auto"
            >
              الرجوع للصفحة الرئيسية
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 text-gray-200 leading-relaxed bg-gray-800 p-6 rounded-2xl shadow-2xl text-right">
        <h2 className="text-3xl font-extrabold mb-4 text-teal-400">
          القصة (Overview)
        </h2>
        <p className="text-lg text-gray-300">{movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieDetails;
