import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Home,
  Profile,
  SignIn,
  SignUp,
  About,
  UpdateListings,
  Listing,
  CreateListing,
} from "./pages";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route
            path="/update-listings/:listingId"
            element={<UpdateListings />}
          />
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/listing/:listingId" element={<Listing />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
