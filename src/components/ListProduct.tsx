import React from 'react'

type Props = {}

const ListProduct = (props: Props) => {
  return (
    <div>
  <div className="flex justify-between px-[123px] bg-[#eff5f8] items-center">
    <div className="block">
      <ul className="text-center p-5">
        <li className="inline-block"><a className="px-1 py-3 text-lg font-medium text-[#8d979d]" href="/">Home</a></li> 
        <li className="inline-block"><span className="px-1 text-lg font-medium text-[#8d979d] py-3">&gt;</span></li>
        <li className="inline-block"><a className="px-1 text-lg font-medium text-black py-3" href="/product">Shop</a></li>
      </ul>
    </div>
    <div className="flex items-center">
      <div>
        <p>Showing a single result</p>
      </div>
      <div className="mx-5">
        <select className="px-3 py-2 shadow-md">
          <option value="Thứ tự mặc định">Default order</option>
          <option value="Thứ tự mặc định">Order by popularity</option>
          <option value="Thứ tự mặc định">Order by rating score</option>
          <option value="Thứ tự mặc định">Latest</option>
          <option value="Thứ tự mặc định">Order by price: low to high</option>
          <option value="Thứ tự mặc định">Order by price: high to low</option>
        </select>
      </div>
    </div>
  </div>
  <div className="max-w-7xl w-full p-6 m-auto mt-16">
    <div style={{gridTemplateColumns: '1fr 3fr'}} className="grid grid-cols-2 gap-16">
      <div>
        <div className="mb-16">
          <h3 className="uppercase text-lg font-medium mb-5">PRODUCT PORTFOLIO</h3>
          <ul>
            <form id="search" className="bg-gray-300 border list-item px-5 rounded-md py-[8px] px-[7px] duration-1000 my-2">
              <button><i className="bi bi-search" /></button>
              <input id="productSeach" placeholder="Men's watch..." className="border-none bg-transparent w-[250px] px-2 outline-none"/>
            </form>
          </ul>
          <div className="border p-5 bg-[#fbf9ff] shadow-md">
            <ul>
              <li className="mb-2 border-b py-2"><a className="text-base cursor-pointer hover:text-red-500 font-semibold leading-4">Sam Sung</a></li> 
            </ul>
          </div>
        </div>
        <div className="mb-16">
          <div>
            <h3 className="uppercase text-lg font-medium mb-5">Filter by price</h3>
            <input type="range" className="w-full mb-4" />
            <div className="grid grid-cols-2 gap-16">
              <div>
                <button className="border px-4 text-lg font-semibold py-1 rounded-full bg-red-400 hover:bg-red-500 text-white" >Filter</button>
              </div>
              <div>
                <div className="flex">
                  <h4>Price:</h4>
                  <p className="mx-1 font-semibold"><span>$</span> 154.75</p>
                </div>
                <div className="flex">
                  <span className="mx-3"><i className="fas fa-arrows-alt-h" /></span>
                  <p className="font-semibold"><span>$</span> 200.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-16">
          <div>
            <h3 className="uppercase text-lg font-medium mb-5">Most interested</h3>
          </div>
          <div className="border p-5 bg-[#fbf9ff] shadow-md">
            <div style={{gridTemplateColumns: '1fr 2fr'}} className="grid grid-cols-2 gap-3 mb-4 border-b py-4">
              <div>
                <img src="http://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/product-11_large-100x100.jpg" className="w-full" />
              </div>
              <div>
                <p className="text-sm">BULOVA CORPORATION </p><p className="text-sm overflow-ellipsis w-40 whitespace-nowrap overflow-hidden">AUTOMATIC MEN'S WATCH 49MM</p><p />
                <del className="block"><span>$</span>
                  <span className="text-red-300 text-sm">130.00
                  </span></del><span>$</span>
                <span className="font-semibold">100.00
                </span>
              </div> 
            </div>
            <div style={{gridTemplateColumns: '1fr 2fr'}} className="grid grid-cols-2 gap-3 mb-4 border-b py-2">
              <div>
                <img src="http://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/product6_20a32b81-5765-41f0-96da-606bb1ce5ed8_large-100x100.jpg" className="w-full" />
              </div>
              <div>
                <p className="text-sm">MICHAEL KORS BRECKEN </p><p className="text-sm overflow-ellipsis w-40 whitespace-nowrap overflow-hidden">CHRONOGRAPH WATCH 44MM </p><p />
                <del className="block"><span>$</span>
                  <span className="text-red-300 text-sm">150.000
                  </span></del>
                <span>$</span>
                <span className="font-semibold">142.300
                </span>
              </div> 
            </div>
            <div style={{gridTemplateColumns: '1fr 2fr'}} className="grid grid-cols-2 gap-3 mb-4 border-b py-2">
              <div>
                <img src="http://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/product-23_large-100x100.jpg" className="w-full" />
              </div>
              <div>
                <p className="text-sm">OMEGA SEAMASTER 39MM</p>
                <del className="block"><span>$</span>
                  <span className="text-red-300 text-sm">180.000
                  </span></del>
                <span>$</span>
                <span className="font-semibold">155.500
                </span>
              </div> 
            </div>
            <div style={{gridTemplateColumns: '1fr 2fr'}} className="grid grid-cols-2 gap-3 mb-4 py-2">
              <div>
                <img src="http://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/product-23_large-100x100.jpg" className="w-full" />
              </div>
              <div>
                <p className="text-sm">TISSOT LE LOCLE T006 </p><p className="text-sm overflow-ellipsis w-40 whitespace-nowrap overflow-hidden">AUTO WATCH 39MM</p><p />
                <del className="block"><span>$</span>
                  <span className="text-red-300 text-sm">280.000
                  </span></del>
                <span>$</span>
                <span className="font-semibold">275.500
                </span>
              </div> 
            </div>
          </div>
        </div>
        <div className="mb-16">
          <h3 className="uppercase text-lg font-medium mb-5">Product photo gallery</h3>
          <div className="border p-5 bg-[#fbf9ff] shadow-md">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <img src="http://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/product-23_large-100x100.jpg" className="mb-4 w-full" />
                <img src="http://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/product6_20a32b81-5765-41f0-96da-606bb1ce5ed8_large-100x100.jpg" className="mb-4 w-full" />
              </div>
              <div>
                <img src="http://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/15-100x100.jpg" className="mb-4 w-full" />
                <img src="http://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/product-11_large-100x100.jpg" className="mb-4 w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* The End Grid-1 */}
      {/* Start Grid-2 */}
      <div>
        <div>
          <div className="grid grid-cols-3 mb-5 gap-10" id="product">
            <div className="px-3 py-7 shadow hover:shadow-lg product_item">
              <div className="relative overflow-hidden">
                <img src="https://picsum.photos/200" className="object-cover w-full h-64" />
                <span className="absolute top-[5%] px-5 rounded-2xl text-white bg-red-300 py-1 border -left-[5%]"><p>20%</p></span>
                <span className="text-black icon_heart cursor-pointer absolute text-2xl -top-[2%] right-[9px] hover:text-red-500"><i className="bi bi-heart" /></span>
                <div className="absolute top-[47%] -left-[5%] mx-5 feedback_item_product">
                  <ul>
                    <li className="text-yellow-300 cursor-pointer"><i className="bi bi-star-fill" /></li>
                    <li className="text-yellow-300 cursor-pointer"><i className="bi bi-star-fill" /></li>
                    <li className="text-yellow-300 cursor-pointer"><i className="bi bi-star-fill" /></li>
                    <li className="text-yellow-300 cursor-pointer"><i className="bi bi-star-fill" /></li>
                    <li className="cursor-pointer"><i className="bi bi-star" /></li>
                  </ul>
                </div>
                <div className="hover:bg-red-500 btn_add_cart cursor-pointer top-[80%] left-[20%] delay-150 duration-200 ease-in-out py-1 px-3 rounded-md text-red-500 hover:text-white border border-red-400 font-semibold uppercase absolute">
                  <a>Add to Cart <span><i className="fas fa-shopping-cart" /></span></a>
                </div>
              </div>
              <div>
                <div>
                <h3 className="text-base mb-2 font-semibold text-center overflow-ellipsis w-75 whitespace-nowrap overflow-hidden"><a href="/#/details_product/" /></h3>
                <div className="flex justify-center items-center">
                    <del className="text-red-300"><span>$</span>200.000</del>
                    <p className="px-2 font-semibold text-lg"><span>$</span>300.000</p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <ul className="block">
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default ListProduct