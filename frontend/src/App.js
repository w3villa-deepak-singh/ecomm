import './App.css';
import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import axios from "axios";
import Payment from "./component/Cart/Payment";
import PayCard from "./component/Cart/PayCard";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails";
import Dashboard from "./component/Admin/Dashboard.js";
import ProductList from "./component/Admin/ProductList.js";
import NewProduct from "./component/Admin/NewProduct";
import UpdateProduct from "./component/Admin/UpdateProduct";
import OrderList from "./component/Admin/OrderList";
import ProcessOrder from "./component/Admin/ProcessOrder";
import UsersList from "./component/Admin/UsersList";
import UpdateUser from "./component/Admin/UpdateUser";
import ProductReviews from "./component/Admin/ProductReviews";
import Contact from "./component/layout/Contact/Contact";
import About from "./component/layout/About/About";
// import NotFound from "./component/layout/Not Found/NotFound";
import WebFont from "webfontloader";

import { ToastContainer } from "react-toastify";


function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  // const [stripeApiKey, setStripeApiKey] = useState("");
  // const [stripePromise, setStripePromise] = useState(null);

  // async function getStripeApiKey() {
  //   const { data } = await axios.get("/api/v1/stripeapikey");
  //   console.log("Stripe API Key received:", data.stripeApiKey);

  //   setStripeApiKey(data.stripeApiKey);
  // }



  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());
    
    // getStripeApiKey();
  }, []);


  return (
    <Router>
      <ToastContainer position="top-right" autoClose={3000} />
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
         <Route exact path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />

        <Route exact path="/password/forgot" element={<ForgotPassword />} />
        <Route exact path="/password/reset/:token" element={<ResetPassword />} />
        <Route exact path="/login" element={<LoginSignUp />} />
        <Route exact path="/cart" element={<Cart />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/account" element={<Profile />} />
          <Route path="/me/update" element={<UpdateProfile />} />
          <Route path="/password/update" element={<UpdatePassword />} />
          <Route exact path="/shipping" element={<Shipping />} />
          <Route exact path="/order/confirm" element={<ConfirmOrder />} />
          {/* <Route exact path="/process/payment" element={<Payment />} /> */}
          <Route exact path="/process/payment" element={<PayCard />} />
          <Route path="/success" element={<OrderSuccess />} />
          <Route exact path="/orders" element={<MyOrders />} />
          <Route exact path="/order/:id" element={<OrderDetails />} />
          <Route isAdmin={true} exact path="/admin/dashboard" element={<Dashboard />} /> 
          <Route exact path="/admin/products" isAdmin={true} element={<ProductList />} /> 
          <Route exact path="/admin/product" isAdmin={true} element={<NewProduct />} /> 
          <Route exact path="/admin/product/:id" isAdmin={true} element={<UpdateProduct />} /> 
          <Route exact path="/admin/orders" isAdmin={true} element={<OrderList />} /> 
          <Route exact path="/admin/order/:id" isAdmin={true} element={<ProcessOrder />} /> 
          <Route exact path="/admin/users" isAdmin={true} element={<UsersList />} /> 
          <Route exact path="/admin/user/:id" isAdmin={true} element={<UpdateUser />} /> 
          <Route exact path="/admin/reviews" isAdmin={true} element={<ProductReviews />} /> 
        </Route>
  
{/* 
         <Route
           path="/process/payment"
           element={
             <Elements stripe={stripePromise}>
               <ProtectedRoute>
                 <Payment />
               </ProtectedRoute>
             </Elements>
           }
         /> */}




 
       

   

        {/* <Route
          component={
            window.location.pathname === "/process/payment" ? null : NotFound
          }
        /> */}
      </Routes>


      <Footer />
    </Router>
  );
}

export default App;
