import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.page";
import Contact from "./pages/Contact.page";
import AboutPage from "./pages/About.page";
import ProductPage from "./pages/Product.page";
import { NavBar } from "./components/navbar/navbar";
import LabelBottomNavigation from "./components/BottomNavigation";
import ProfilePage from "./pages/ProfilePage";
import { Footer } from "./components/Footer/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getcartitems } from "./features/cart/cartSlice";
import { useAuth0 } from "@auth0/auth0-react";
import { ProductDetails } from "./components/productDetails/product.details";
import { loadScript } from "./utils/loadScprit";
import { CartPage } from "./components/cart/cart.component";
import { LoginRedirect } from "./utils/loginRedirect";
import Chekcoutpage from "./checkoutpage/Chekcoutpage";

function App() {
  const { isAuthenticated, user } = useAuth0();
  const dispatch = useDispatch();

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
    if (user) dispatch(getcartitems({ user: user.email }));
  }, [isAuthenticated, user, dispatch]);
  return (
    <>
      <br></br>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/About" element={<AboutPage />}></Route>
        <Route path="/Prodcut" element={<ProductPage />}></Route>
        <Route path="/Profile" element={<ProfilePage />}></Route>
        <Route path="/Product/:id" element={<ProductDetails />}></Route>
        <Route
          path="/cart"
          element={
            isAuthenticated ? <CartPage /> : <LoginRedirect></LoginRedirect>
          }
        ></Route>
        <Route
          path="/checkout"
          element={
            isAuthenticated ? (
              <Chekcoutpage></Chekcoutpage>
            ) : (
              <LoginRedirect></LoginRedirect>
            )
          }
        ></Route>
      </Routes>
      <div></div>
      <Footer />
      <LabelBottomNavigation />
    </>
  );
}

export default App;
