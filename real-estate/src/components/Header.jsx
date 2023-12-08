// fa stands for font awesome
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const Header = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  const [searchTerm, setSearchTerm] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const urlParams = new URLSearchParams(window.location.search);
  //   urlParams.set("searchTerm", searchTerm);
  //   const searchQuery = urlParams.toString();
  //   navigate(`/search/${searchQuery}`);
  // };

  // useEffect(() => {
  //   const urlParams = new URLSearchParams(location.search);
  //   const searchTermFromUrl = urlParams.get("searchTerm");
  //   if (searchTermFromUrl) {
  //     setSearchTerm(searchTermFromUrl);
  //   }
  // }, [location.search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [window.location.search]);

  return (
    //   this is the container for all elements and we set te background color here using it as well as add a text shadow
    <header className="bg-slate-200 shadow-md">
      {/* explain css here */}
      {/* we created the div to justify the h1 and form inside and nay other element well add. Flex takes them from column to row next to each other, justify creates equal space between elements, items center centers vertically, max w not sure but it pushes on the the sec element and we have to use i'm assuming margin auto to equally create space on the side for both elements, we add padding to the the div which adds more space around the elements  */}
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3 ">
        {/* confusing bit here is text-sm and sm:tet-xl so i'll look into it but it supposed to change the size of the text first one is how it is by default and second one is i'm assuming when the screen is small */}
        {/* one other thing, the flex and wrap is targeting the span elements inside the h1, so they become on the same line and if it gets too small with big text that it wraps  */}
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span
              //   just adding color to the span texts
              className="text-slate-500"
            >
              Real
            </span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        {/* for this css, we went to the input and made its white color to transparent and added the color to the form itself and then we also added a rounded corner the goal of doing that is so we can also add the search icon from react-icon and it looking like it's apart of the input field, since we added the icon and we want them to be next to each other we added the flex so now instead of columns they're rows and we also added items-center to make them centered vertically */}
        <form
          onSubmit={handleSubmit}
          className="bg-slate-100 p-3 rounded-lg flex items-center "
        >
          <input
            //   for the css, for responsiveness he said first do the mobile width then the next line will be what the width will look like after mobile, we can more specific and set the width for all the diff screen sizes
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form>
        {/* the menu */}
        <ul className="flex gap-4">
          {/* okay for the menu, we use link to link to the diff pages and inside it an li, we use hidden for two of them, wonder if using conditional rendering is better */}
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>{" "}
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>{" "}
          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className="sm:inline text-slate-700 hover:underline">
                Sign In
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
};
export default Header;
