import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);

  const { username, email, avatar } = currentUser;
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>

      <form className="flex flex-col gap-4">
        <img
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2 "
          src={avatar}
          alt="profile image"
        />

        <input
          className="border p-3 rounded-lg"
          type="text"
          placeholder={username}
          id="text"
          // onChange={handleChange}
        />

        <input
          type="email"
          placeholder={email}
          className="border p-3 rounded-lg"
          id="email"
          // onChange={handleChange}
        />

        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
          // onChange={handleChange}
        />
        <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">
          update
        </button>
        <button>create listing</button>
      </form>

      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete account</span>
        <span className="text-red-700 cursor-pointer">Sign out</span>
      </div>
      <Link>Show Listing</Link>
    </div>
  );
};
export default Profile;
