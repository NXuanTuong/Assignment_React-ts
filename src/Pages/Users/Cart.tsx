import React, { useState } from "react";

type Props = {};

const Cart = (props: Props) => {
  const [number, setNumber] = useState("");
  let cart = [];
  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart") || "[]");
  }

  const increase = () => {
    setNumber(number + 1);
  };
  return (
    <div>
      <div className="bg-[#eff5f8] block">
        <ul className="text-center p-5">
          <li className="inline-block">
            <a
              className="px-1 py-3 text-lg font-medium text-[#8d979d]"
              href="/"
            >
              Home
            </a>
          </li>
          <li className="inline-block">
            <span className="px-1 text-lg font-medium text-[#8d979d] py-3">
              &gt;
            </span>
          </li>
          <li className="inline-block">
            <a
              className="px-1 text-lg font-medium text-black py-3"
              href="/cart"
            >
              Shopping Cart
            </a>
          </li>
        </ul>
      </div>
      $
      {cart.length == [] ? (
        <div>
          <img
            className="m-auto"
            src="https://img.pikbest.com/png-images/20191028/little-boy-pushing-a-shopping-cart-to-buy-things-gif_2515305.png!bw700"
          />
        </div>
      ) : (
        <div className="max-w-7xl w-full p-6 m-auto mt-20">
          <div className="content-cart">
            <div className="content-cart-columns">
              <div className="flex justify-between items-center mb-5">
                <div>
                  <p className="text-lg font-semibold">Shopping Cart</p>
                </div>
                <div>
                  <p className="text-lg font-semibold"> Items</p>
                </div>
              </div>
              <div style={{ borderTop: "2px solid #dee2e6" }} />
              <div style={{ width: "100%", height: 635, overflow: "scroll" }}>
                <table>
                  <thead>
                    <tr>
                      <th>Image product</th>
                      <th>Name product</th>
                      <th>Quantity</th>
                      <th>Price product</th>
                      <th>Total</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item: any) => {
                      return (
                        <tr>
                          <td>
                            <img
                              src={`${item.img}`}
                              className="w-full object-cover max-w-full h-40"
                            />
                          </td>
                          <td className="text-sm w-52">{item.name}</td>
                          <td>
                            <button className="btn btn-decrease font-semibold border bg-orange-500 text-white">
                              <i className="bi bi-dash-lg" />
                            </button>
                            <input
                              className="w-16 text-center px-5 border boder-gray-500 outline-none"
                              type="number"
                              value={`${item.quantity}`}
                            />
                            <button
                              onClick={() => increase()}
                              className="btn btn-increase font-semibold border bg-green-500 text-white"
                            >
                              <i className="bi bi-plus-lg" />
                            </button>
                          </td>
                          <td>$ {item.price}</td>
                          <td>$ {item.total}</td>
                          <td>
                            <button
                              data-id="${item.id}"
                              className="btn btn-remove"
                            >
                              <i className="bi bi-trash-fill" />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <button className="btn-continue">
                <a>
                  <i className="fas fa-long-arrow-alt-left" /> Tiếp tục xem sản
                  phẩm
                </a>
              </button>
            </div>
            <div className="content-cart-pay h-[700px]">
              <div className="mb-5">
                <p className="text-lg font-semibold">Oder Summary</p>
              </div>
              <div style={{ borderTop: "2px solid #ccc" }} className="w-full" />
              <div className="mt-10 mb-10">
                <p className="text-base font-semibold mb-2 uppercase">
                  Shipping
                </p>
                <select className="border boder-gray-300 px-2 py-3 w-72 outline-none">
                  <option value="Inner city - $ 3,00">
                    Inner city - $ 3,00
                  </option>
                  <option value="Suburban - $ 5,00">Inner city - $ 5,00</option>
                  <option value="Whole Country - $ 10,00">
                    Whole Country - $ 10,00
                  </option>
                </select>
              </div>
              <div className="mt-10 mb-10">
                <p className="text-base font-semibold mb-2 uppercase">
                  Promo Code
                </p>
                <input
                  className="px-2 py-3 w-72 rounded-lg border border-gray-300 outline-none"
                  type="text"
                  placeholder="Enter your code"
                />
                <button className="block mt-5 text-lg font-semibold border boder-gray-300 px-2 py-2 bg-red-500 w-28 text-white rounded">
                  Apply
                </button>
              </div>
              <div style={{ borderTop: "2px solid #ccc" }} className="w-full" />
              <div className="flex justify-between items-center mt-10 mb-10">
                <div>
                  <p className="text-lg font-semibold uppercase">Total Cost</p>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-lg font-semibold text-red-500 px-3">
                    $
                  </span>
                  <p
                    id="total_cart"
                    className="text-lg font-semibold text-red-500"
                  >
                    null
                  </p>
                </div>
              </div>
              <div>
                <button className="text-center px-2 py-3 text-lg font-semibold rounded bg-green-600 text-white w-full">
                  <a href="/#/checkout">Check Out</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
