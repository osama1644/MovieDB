import { useMemo, useState } from "react";
import debounce from "lodash.debounce";
import { useMovies } from "./hooks";

function NavBar() {
  const { searchMovies } = useMovies();
  const [value, setValue] = useState<string>("");
  
 
  const debounced = useMemo(() => {
    return debounce((term: string) => {
      searchMovies(term);
    }, 500);
  }, [searchMovies]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setValue(searchValue);
    debounced(searchValue);
  };

  return (
    <nav className="flex flex-col sm:flex-row justify-between bg-gray-900 px-4 sm:px-7 py-4 shadow-lg items-center gap-4">
      
      
      <p className="text-xl sm:text-lg font-extrabold uppercase text-white">
        cinema<span className="text-red-500">club</span>
      </p>
      
      
      <input
        type="text"
        value={value}
        className="
          border border-gray-600 
          bg-gray-700 
          text-white 
          w-full 
          sm:w-3/5 
          lg:w-[500px] 
          p-2 
          rounded-lg 
          outline-none 
          focus:border-3 focus:border-red-500 
          placeholder-gray-400
        "
        placeholder="ابحث عن فيلم..."
        dir="rtl"
        onChange={handleChange}
      />
      
    </nav>
  );
}

export default NavBar;