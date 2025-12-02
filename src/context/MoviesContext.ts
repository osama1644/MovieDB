import { createContext } from "react";
import type { Movie } from "../types";

type MealsContextType = {
  movies: Movie[];
  loading: boolean;
  error:null | string,
  searchMovies:(word:string)=>void
  fetchData:(bum:number)=>void,
  numOfPages:number,
  

};

export const MoviesContext = createContext<MealsContextType | null>(null);