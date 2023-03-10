import { Routes, Route } from "react-router-dom";
import React from "react";
import Login from "../Login";
import Dash_admin from "../admin/Dashboard/dash";
import Navbar from "../common/Navbar";
import Product from "../product/Product";
import Profile from "../profile/profile";
import Edit_profile from "../profile/Edit_profile";
import Login_admin from "../admin/Login_admin";
import { Home } from "../homepage/Home";
import Video from "../aboutus/video";
import Order_form from "../order_form/Order_form";
import OrderDetails from "../order_form/Order_history";
import PrivateRoute from "./protectRoutes";
import AdminPrivateRoute from "./adminRoute";
import Add_products from "../add_product/Add_products";
import Cart from "../cart/Cart";
import Search from "../common/search";
import SearchResult from "../search/searchResult";
import Faq from "../FAQ/faq";
import UsersManage from "../admin/Users/users";
import Final from "../search/testing";
import Feedback from "../admin/Feedback/Feedback"
import ProductManage from "../admin/Products/products";
import OrderManage from "../admin/Orders/orders";
import AddCat from "../admin/AddCategory/addcat";
import Category from "../categorize/categorize";
import Dash from "../homepage/Dash";

const Url = () => {
  return (
    <>
      <Routes>
      <Route path="/dash" element={<Dash/>}></Route>
        <Route path="/category" element={<Category/>}></Route>
        <Route path="/add" element={<Final />}></Route>
        <Route path="/searchres" element={<Search />}></Route>
        <Route path="/search" element={<SearchResult />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>}></Route>
        <Route path="/nav" element={<Navbar />}></Route>
        <Route path="/product/:pid" element={<Product />}></Route>
        <Route path="/help" element={<Faq />}></Route>
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>}></Route>
        <Route path="/Edit_profile" element={<PrivateRoute><Edit_profile /></PrivateRoute>}></Route>
        <Route path="/Add_products" element={<PrivateRoute><Add_products /></PrivateRoute>}></Route>
        <Route path="/login_admin" element={<Login_admin />}></Route>
        <Route path="/admin/dashboard" element={<Dash_admin />}></Route>
        <Route path="/about" element={<Video />}></Route>
        <Route path="/users" element={<UsersManage />}></Route>
        <Route path="/productManage" element={<ProductManage />}></Route>
        <Route path="/Order_form" element={<PrivateRoute><Order_form /></PrivateRoute>}></Route>
        <Route path="/admin/Feedback" element={<AdminPrivateRoute><Feedback /></AdminPrivateRoute>}></Route>
        <Route path="/OrderDetails" element={<PrivateRoute><OrderDetails/></PrivateRoute>}></Route>
        <Route path="/manageOrder" element={<AdminPrivateRoute><OrderManage /></AdminPrivateRoute>}></Route>
        <Route path="/addCategory" element={<AdminPrivateRoute><AddCat /></AdminPrivateRoute>}></Route>
      </Routes>
    </>
  );
};

export default Url;
