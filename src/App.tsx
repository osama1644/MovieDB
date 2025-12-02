import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import MovieDetails from "./MovieDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movie/:id",
    element: <MovieDetails />
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
