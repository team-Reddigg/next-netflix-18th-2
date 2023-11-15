import { SearchIcon2, XIcon } from "../../../public/svgs";

const SearchBar = () => {
  return (
    <div className="fixed top-[50px] left-1/2 transform -translate-x-1/2 flex items-center bg-[#424242] w-[375px] h-[50px]">
      <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
        <SearchIcon2 className="h-5 w-5" />
      </div>

      <input
        type="text"
        className="w-full bg-[#424242] text-[#C4C4C4] pl-12 pr-12 focus:outline-none"
        placeholder="Search for a show, movie, genre, e.t.c"
      />

      <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none">
        <XIcon className="h-5 w-5" />
      </div>
    </div>
  );
};
export default SearchBar;
