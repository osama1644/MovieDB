import React, { useEffect, useState } from "react";
import { MoviesContext } from "./MoviesContext";
import type { Movie } from "../types";
import axios from "axios";



function MoviesContextProvider({ children }: { children: React.ReactNode }) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [numOfPages, setNumOfPages] = useState(0);


  // function for fetcheng movies
  const fetchData = async (page: number, query: string = "") => {
    try {
      setLoading(true);
      setError(null);
      let url = "";

      if (query !== "") {
        url = `https://api.themoviedb.org/3/search/movie?api_key=0407056f7817ef080fb7defc3713ce58&query=${query}&language=ar&page=${page}`;
      } else {
        url = `https://api.themoviedb.org/3/movie/popular?api_key=0407056f7817ef080fb7defc3713ce58&language=ar&page=${page}`;
      }

      const res = await axios.get(url);
      if (res.status !== 200) throw new Error("حدث خطأ في جلب البيانات");
      setMovies(res.data.results);
      setNumOfPages(res.data.total_pages);


    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError("حدث خطأ غير معروف");
    } finally {
      setLoading(false);
    }
  };

  // fetch movies for the first time
  useEffect(() => {
    fetchData(1);
  }, []);


  // fetch movies including search word
  const searchMovies = (word: string) => {
    fetchData(1, word.trim());
  };

  return (
    <MoviesContext.Provider
      value={{ movies, error, loading, searchMovies, fetchData, numOfPages }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

export default MoviesContextProvider;