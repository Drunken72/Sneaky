import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cart.css";

import NavigateBlack from "../common/navblack";
import Footer from "../common/Footer";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

const Cart = () => {

  const [details, setDetails] = useState([]);

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token")
    }
  }

  const removeItem = (pid) => {

    const data = {
      remove_product: pid
    }
    axios.put("http://localhost:4000/cart/remove", data, config)
      .then((response) => {
        console.log(response)
        setTimeout(function () {
          toast.error("Item removed from cart")
          window.location.reload(1);
        }, 1000);
        //asdasd
      })
      .catch((e) => {
        console.log(e)
      })

  }
  useEffect(() => {
    axios.get("http://localhost:4000/cart/show", config)
      .then((response) => {
        console.log(response.data.data.products)
        setDetails(response.data.data.products)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])
  var total = 0;
  var per = 0;

  return (
    <>
      <NavigateBlack />
      <div className="cart-container">
        <div class="cart-container-fluid py-5 ">
          <div class="container d-flex justify-content-center">
            <div class="row ">
              <div class="card py-3 col-md-11 p-2">
                <h3 id="cart" class="mt-0">
                  Cart items
                </h3>
                <hr class="my-2"></hr>
                {details.map((option) => {
                  return (
                    <div class="row">
                      <div id="ml" class="col-md-3 mb-2">
                        <img
                          src={'http://localhost:4000/' + option.added_product.images[0].name}
                          class="w-100"
                          alt="picture"
                        ></img>
                      </div>
                      <div class="col-md-6 mb-2">
                        <p>
                          <strong>{option.added_product.product_name}</strong>
                        </p>
                        <p>
                          {option.added_product.description}
                        </p>
                        <p>Category: {option.added_product.category.name}</p>
                      </div>
                      <div id="mll" class="col-md-2 mb-2">
                        <p>
                          <strong>Price</strong>
                        </p>
                        <p>Rs. {option.added_product.price}</p>
                      </div>
                      <div class="col-md-1 mb-2">
                        <button class="btn-close" onClick={() => { removeItem(option.added_product._id) }}></button>
                      </div>
                    </div>
                  );
                })}


              </div>
              <div class="card py-3 col-md-11 mt-3">
                <div class="card-body">
                  <p>
                    <strong>Expected shipping delivery</strong>
                  </p>
                  <p class="mb-0">10-01-2023  --  17-01-2023</p>
                </div>
              </div>
              <div class="card py-3 col-md-11 mt-3">
                <div class="card-body">
                  <p>
                    <strong>We accept</strong>
                  </p>
                  <img
                    class="me-2"
                    width="100px"
                    src="https://dao578ztqooau.cloudfront.net/static/img/logo1.png"
                    alt="Khalti"
                  />
                  <img
                    class="me-2"
                    width="60px"
                    src="https://static.vecteezy.com/system/resources/previews/002/952/794/original/cash-on-delivery-steacker-free-vector.jpg"
                    alt="Cash on delivery"
                  />

                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4">
                <div class="card-header py-3">
                  <h5 id="cart" class="mb-0">
                    Summary
                  </h5>
                </div>
                <div class="card-body">
                  <ul class="list-group list-group-flush">
                    {/* <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products
                    <span>Rs.53.98</span>
                  </li> */}
                    {details.map((option) => {
                      per = (option.added_product.price) * 0.13
                      total = total + (option.added_product.price) + per;
                      per = 0;

                      return (
                        <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                          {option.added_product.product_name}
                          <span>Rs. {option.added_product.price}</span>
                        </li>
                      );
                    })}
                    <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>Gratis</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                        <strong>
                          <p class="mb-0">(including VAT)</p>
                        </strong>
                      </div>
                      <span>
                        <strong>Rs. {total}</strong>
                      </span>
                    </li>
                  </ul>

                  <button type="button" class="btn btn-danger btn-lg btn-block" >
                    <a href="/Order_form" style={{ color: "white" }}>Go to checkout</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Toaster />
        <Footer />

      </div>

    </>
  );
};

export default Cart;