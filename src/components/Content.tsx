import React from 'react'

type Props = {}

const Content = (props: Props) => {
  return (
    <div>
  <section className="pt-20 pb-16">
    <div className="max-w-7xl w-full p-6 m-auto">
      <div className="flex flex-wrap m-auto">
        <div className="relative w-full p-4 leading-5">
          <div className="mb-16">
            <h2 className="text-4xl font-bold">New Arrivals</h2>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="relative p-4 leading-5">
          <div className="mb-20">
            <div className="post_img">
              <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/xnew_product1.png.pagespeed.ic.GC30TWVUh9.webp" className="middle max-w-full w-full"/>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#444] mb-4"><a>Thermo Ball Etip Gloves</a></h3>
              <span className="text-lg text-red-500 font-medium">$ 145,743</span>
            </div>
          </div>
        </div>
        <div className="relative p-4 leading-5">
          <div className="mb-20">
            <div className="post_img">
              <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/xnew_product2.png.pagespeed.ic.TisB6MUmE3.webp" className="middle max-w-full w-full object-cover" />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#444] mb-4"><a>Thermo Ball Etip Gloves</a></h3>
              <span className="text-lg text-red-500 font-medium">$ 145,743</span>
            </div>
          </div>
        </div>
        <div className="relative p-4 leading-5">
          <div className="mb-20">
            <div className="post_img">
              <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/xnew_product3.png.pagespeed.ic.xG1joZNkeV.webp" className="middle max-w-full w-full" />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#444] mb-4"><a>Thermo Ball Etip Gloves</a></h3>
              <span className="text-lg text-red-500 font-medium">$ 145,743</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="gallery-area">
    <div className="overflow-hidden">
      <div className="grid row-span-2 grid-cols-2 gap-6">
        <div className="list_img">
          <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/gallery1.png.webp" className="middle w-full h-full object-cover"/>
        </div>
        <div className="grid grid-cols-2 gap-6 overflow-hidden">
          <div className="list_img-cols-2">
            <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/gallery2.png.webp" className="middle w-full object-cover"/>
          </div>
          <div className="list_img-cols-3">
            <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/gallery3.png.webp" className="w-full object-cover"/>
            <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/gallery4.png.webp" className="w-full mt-4 object-cover"/>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="pt-20 p-4">
    <div className="max-w-7xl w-full p-6 m-auto">
      <div className="text-center">
        <h2 className="font-bold text-4xl mb-5">Popular Items</h2>
        <p className="text-[#777] text-base mb-4 font-normal leading-7">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna <br /> aliqua. Quis ipsum suspendisse ultrices gravida.</p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="mb-10 product_item h-[524px] hover:shadow-lg shadow-md">
          <div className="relative overflow-hidden">
            <a href="#">
              <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular1.png.webp" className="w-full object-cover mb-5" />
            </a>
            <span className="absolute top-[5%] px-5 rounded-2xl text-white bg-green-300 py-1 border -left-[3%]"><p>New</p></span>
            <span className="text-black icon_heart cursor-pointer absolute text-2xl invisible top-[20px] right-[20px]"><i className="bi bi-heart-fill" /></span>
            <div className="absolute top-[65%] mx-5 feedback_item">
              <ul>
                <li className="text-yellow-300 cursor-pointer"><i className="bi bi-star-fill" /></li>
                <li className="text-yellow-300 cursor-pointer"><i className="bi bi-star-fill" /></li>
                <li className="text-yellow-300 cursor-pointer"><i className="bi bi-star-fill" /></li>
                <li className="text-yellow-300 cursor-pointer"><i className="bi bi-star-fill" /></li>
                <li><i className="bi bi-star" /></li>
              </ul>
            </div>
            <div className="hover:bg-red-500 btn_add_cart cursor-pointer top-[83%] left-[28%] delay-150 duration-200 ease-in-out py-2 px-6 rounded-md text-red-500 hover:text-white border border-red-400 font-semibold uppercase absolute">
              <a>Add to Cart <span><i className="fas fa-shopping-cart" /></span></a>
            </div>
          </div> 
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#444] mb-3"><a href="#">Thermo Ball Etip Gloves</a></h3>
            <span className="text-lg text-red-500 font-medium block">$ 145,743</span>    
          </div>
        </div>
        <div className="mb-10 product_item h-[524px] hover:shadow-lg shadow-md">
          <div className="relative overflow-hidden">
            <a href="#">
              <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular2.png.webp" className="w-full object-cover mb-5" /></a>
            <span className="absolute top-[5%] px-5 rounded-2xl text-white bg-red-300 py-1 border -left-[3%]"><p>30%</p></span>
            <span className="text-black icon_heart cursor-pointer absolute text-2xl invisible top-[20px] right-[20px]"><i className="bi bi-heart-fill" /></span>
            <div className="absolute top-[65%] mx-5 feedback_item">
              <ul>
                <li className="text-yellow-300 cursor-pointer"><i className="bi bi-star-fill" /></li>
                <li className="text-yellow-300 cursor-pointer"><i className="bi bi-star-fill" /></li>
                <li className="text-yellow-300 cursor-pointer"><i className="bi bi-star-fill" /></li>
                <li className="text-yellow-300 cursor-pointer"><i className="bi bi-star-fill" /></li>
                <li><i className="bi bi-star" /></li>
              </ul>
            </div>
            <div className="hover:bg-red-500 btn_add_cart cursor-pointer top-[83%] left-[28%] delay-150 duration-200 ease-in-out py-2 px-6 rounded-md text-red-500 hover:text-white border border-red-400 font-semibold uppercase absolute">
              <a>Add to Cart <span><i className="fas fa-shopping-cart" /></span></a>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#444] mb-3"><a href="#">Thermo Ball Etip Gloves</a></h3>
            <div className="flex justify-center items-center">
              <del>
                <span className="text-base text-red-500 mb-5 block">$ 145,743</span>
              </del>
              <span className="text-lg px-2 font-semibold mb-5 block">$ 145,743</span>
            </div>
          </div>
        </div>
        <div className="mb-10 product_item h-[524px] hover:shadow-lg shadow-md">
          <div className="relative overflow-hidden">
            <a href="#"><img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular3.png.webp" className="w-full object-cover mb-5" /></a>
            <span className="text-black icon_heart cursor-pointer absolute text-2xl invisible top-[20px] right-[20px]"><i className="bi bi-heart-fill" /></span>
            <div className="absolute top-[65%] mx-5 feedback_item">
              <ul>
                <li className="text-yellow-300 cursor-pointer"><i className="bi bi-star-fill" /></li>
                <li className="text-yellow-300 cursor-pointer"><i className="bi bi-star-fill" /></li>
                <li className="text-yellow-300 cursor-pointer"><i className="bi bi-star-fill" /></li>
                <li className="text-yellow-300 cursor-pointer"><i className="bi bi-star-fill" /></li>
                <li><i className="bi bi-star" /></li>
              </ul>
            </div>
            <div className="hover:bg-red-500 btn_add_cart cursor-pointer top-[83%] left-[28%] delay-150 duration-200 ease-in-out py-2 px-6 rounded-md text-red-500 hover:text-white border border-red-400 font-semibold uppercase absolute">
              <a>Add to Cart <span><i className="fas fa-shopping-cart" /></span></a>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#444] mb-3"><a href="#">Thermo Ball Etip Gloves</a></h3>
            <span className="text-lg text-red-500 font-medium mb-5 block">$ 145,743</span>
          </div>
        </div>
        <div className="mb-10 product_item h-[524px] hover:shadow-lg shadow-md">
          <div className="relative overflow-hidden">
            <a href="#">
              <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular4.png.webp" className="w-full object-cover mb-5" />
            </a>
            <span className="absolute top-[5%] px-5 rounded-2xl text-white bg-green-300 py-1 border -left-[3%]"><p>New</p></span>
            <span className="text-black icon_heart cursor-pointer absolute text-2xl invisible top-[20px] right-[20px]"><i className="bi bi-heart-fill" /></span>
            <div className="absolute top-[65%] mx-5 feedback_item">
              <ul>
                <li className="text-yellow-300 cursor-pointer"><i className="bi bi-star-fill" /></li>
                <li className="text-yellow-300 cursor-pointer"><i className="bi bi-star-fill" /></li>
                <li className="text-yellow-300 cursor-pointer"><i className="bi bi-star-fill" /></li>
                <li className="text-yellow-300 cursor-pointer"><i className="bi bi-star-fill" /></li>
                <li><i className="bi bi-star" /></li>
              </ul>
            </div>
            <div className="hover:bg-red-500 btn_add_cart cursor-pointer top-[83%] left-[28%] delay-150 duration-200 ease-in-out py-2 px-6 rounded-md text-red-500 hover:text-white border border-red-400 font-semibold uppercase absolute">
              <a>Add to Cart <span><i className="fas fa-shopping-cart" /></span></a>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#444] mb-3"><a href="#">Thermo Ball Etip Gloves</a></h3>
            <span className="text-lg text-red-500 font-medium mb-5 block">$ 145,743</span>   
          </div>
        </div>
        <div className="mb-10 product_item h-[524px] hover:shadow-lg shadow-md">
          <div className="relative overflow-hidden">
            <a href="#">
              <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular5.png.webp" className="w-full object-cover mb-5" />
            </a>
            <span className="absolute top-[5%] px-5 rounded-2xl text-white bg-green-300 py-1 border -left-[3%]"><p>New</p></span>
            <span className="text-black icon_heart cursor-pointer absolute text-2xl invisible top-[20px] right-[20px]"><i className="bi bi-heart-fill" /></span>
            <div className="absolute top-[65%] mx-5 feedback_item">
              <ul>
                <li className="text-yellow-300 cursor-pointer"><i className="bi bi-star-fill" /></li>
                <li className="text-yellow-300 cursor-pointer"><i className="bi bi-star-fill" /></li>
                <li className="text-yellow-300 cursor-pointer"><i className="bi bi-star-fill" /></li>
                <li className="text-yellow-300 cursor-pointer"><i className="bi bi-star-fill" /></li>
                <li><i className="bi bi-star" /></li>
              </ul>
            </div>
            <div className="hover:bg-red-500 btn_add_cart cursor-pointer top-[83%] left-[28%] delay-150 duration-200 ease-in-out py-2 px-6 rounded-md text-red-500 hover:text-white border border-red-400 font-semibold uppercase absolute">
              <a>Add to Cart <span><i className="fas fa-shopping-cart" /></span></a>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#444] mb-3"><a href="#">Thermo Ball Etip Gloves</a></h3>
            <span className="text-lg text-red-500 font-medium mb-5 block">$ 145,743</span>
          </div>
        </div>
        <div className="mb-10 product_item h-[524px] hover:shadow-lg shadow-md">
          <div className="relative overflow-hidden">
            <a href="#">
              <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular6.png.webp" className="w-full object-cover mb-5" />
            </a>
            <span className="text-black icon_heart cursor-pointer absolute text-2xl invisible top-[20px] right-[20px]"><i className="bi bi-heart-fill" /></span>
            <div className="absolute top-[65%] mx-5 feedback_item">
              <ul>
                <li className="text-yellow-300 cursor-pointer"><i className="bi bi-star-fill" /></li>
                <li className="text-yellow-300 cursor-pointer"><i className="bi bi-star-fill" /></li>
                <li className="text-yellow-300 cursor-pointer"><i className="bi bi-star-fill" /></li>
                <li className="text-yellow-300 cursor-pointer"><i className="bi bi-star-fill" /></li>
                <li><i className="bi bi-star" /></li>
              </ul>
            </div>
            <div className="hover:bg-red-500 btn_add_cart cursor-pointer top-[83%] left-[28%] delay-150 duration-200 ease-in-out py-2 px-6 rounded-md text-red-500 hover:text-white border border-red-400 font-semibold uppercase absolute">
              <a>Add to Cart <span><i className="fas fa-shopping-cart" /></span></a>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#444] mb-3"><a href="#">Thermo Ball Etip Gloves</a></h3>
            <span className="text-lg text-red-500 font-medium mb-5 block">$ 145,743</span>
          </div>
        </div>
        <div className="mb-10 product_item h-[524px] hover:shadow-lg shadow-md">
          <div className="relative overflow-hidden">
            <a href="#">
              <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular1.png.webp" className="w-full object-cover mb-5" />
            </a>
            <span className="text-black icon_heart cursor-pointer absolute text-2xl invisible top-[20px] right-[20px]"><i className="bi bi-heart-fill" /></span>
            <div className="absolute top-[65%] mx-5 feedback_item">
              <ul>
                <li className="text-yellow-300 cursor-pointer"><i className="bi bi-star-fill" /></li>
                <li className="text-yellow-300 cursor-pointer"><i className="bi bi-star-fill" /></li>
                <li className="text-yellow-300 cursor-pointer"><i className="bi bi-star-fill" /></li>
                <li className="text-yellow-300 cursor-pointer"><i className="bi bi-star-fill" /></li>
                <li><i className="bi bi-star" /></li>
              </ul>
            </div>
            <div className="hover:bg-red-500 btn_add_cart cursor-pointer top-[83%] left-[28%] delay-150 duration-200 ease-in-out py-2 px-6 rounded-md text-red-500 hover:text-white border border-red-400 font-semibold uppercase absolute">
              <a>Add to Cart <span><i className="fas fa-shopping-cart" /></span></a>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#444] mb-3"><a href="#">Thermo Ball Etip Gloves</a></h3>
            <span className="text-lg text-red-500 font-medium mb-5 block">$ 145,743</span>
          </div>
        </div>
        <div className="mb-10 product_item h-[524px] hover:shadow-lg shadow-md">
          <div className="relative overflow-hidden">
            <a href="#">
              <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular3.png.webp" className="w-full object-cover mb-5" />
            </a>
            <span className="absolute top-[5%] px-5 rounded-2xl text-white bg-green-300 py-1 border -left-[3%]"><p>New</p></span>
            <span className="text-black icon_heart cursor-pointer absolute text-2xl invisible top-[20px] right-[20px]"><i className="bi bi-heart-fill" /></span>
            <div className="absolute top-[65%] mx-5 feedback_item">
              <ul>
                <li className="text-yellow-300 cursor-pointer"><i className="bi bi-star-fill" /></li>
                <li className="text-yellow-300 cursor-pointer"><i className="bi bi-star-fill" /></li>
                <li className="text-yellow-300 cursor-pointer"><i className="bi bi-star-fill" /></li>
                <li className="text-yellow-300 cursor-pointer"><i className="bi bi-star-fill" /></li>
                <li><i className="bi bi-star" /></li>
              </ul>
            </div>
            <div className="hover:bg-red-500 btn_add_cart cursor-pointer top-[83%] left-[28%] delay-150 duration-200 ease-in-out py-2 px-6 rounded-md text-red-500 hover:text-white border border-red-400 font-semibold uppercase absolute">
              <a>Add to Cart <span><i className="fas fa-shopping-cart" /></span></a>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#444] mb-3"><a href="#">Thermo Ball Etip Gloves</a></h3>
            <span className="text-lg text-red-500 font-medium mb-5 block">$ 145,743</span>
          </div>
        </div>
        <div className="mb-10 product_item h-[524px] hover:shadow-lg shadow-md">
          <div className="relative overflow-hidden">
            <a href="#">
              <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular5.png.webp" className="w-full object-cover mb-5" />
            </a>
            <span className="absolute top-[5%] px-5 rounded-2xl text-white bg-red-300 py-1 border -left-[3%]"><p>20%</p></span>
            <span className="text-black icon_heart cursor-pointer absolute text-2xl invisible top-[20px] right-[20px]"><i className="bi bi-heart-fill" /></span>
            <div className="absolute top-[65%] mx-5 feedback_item">
              <ul>
                <li className="text-yellow-300 cursor-pointer"><i className="bi bi-star-fill" /></li>
                <li className="text-yellow-300 cursor-pointer"><i className="bi bi-star-fill" /></li>
                <li className="text-yellow-300 cursor-pointer"><i className="bi bi-star-fill" /></li>
                <li className="text-yellow-300 cursor-pointer"><i className="bi bi-star-fill" /></li>
                <li><i className="bi bi-star" /></li>
              </ul>
            </div>
            <div className="hover:bg-red-500 btn_add_cart cursor-pointer top-[83%] left-[28%] delay-150 duration-200 ease-in-out py-2 px-6 rounded-md text-red-500 hover:text-white border border-red-400 font-semibold uppercase absolute">
              <a>Add to Cart <span><i className="fas fa-shopping-cart" /></span></a>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#444] mb-3"><a href="#">Thermo Ball Etip Gloves</a></h3>
            <div className="flex justify-center items-center">
              <del>
                <span className="text-base text-red-500 mb-5 block">$ 145,743</span>
              </del>
              <span className="text-lg px-2 font-semibold mb-5 block">$ 145,743</span>
            </div>
            <div className="hover:bg-red-500 cursor-pointer delay-150 duration-200 ease-in-out py-3 px-7 text-white bg-[#4a4a4b] font-lg uppercase leading-0 inline-block boder-0 relative tracking-wide">
              <a className="transition-colors delay-300 ease-linear">Add to Cart</a>
            </div>     
          </div>
        </div>
      </div>
    </div> 
  </div>
  <div className="max-w-7xl w-full p-6 m-auto"> 
    <div className="text-center">
      <div className="hover:bg-[#4a4a4b] cursor-pointer delay-150 duration-200 ease-in-out py-3 px-7 text-white bg-[#ff2020] font-lg uppercase leading-0 inline-block boder-0 relative tracking-wide">
        <a className="transition-colors delay-300 ease-linear">View More Products</a>
      </div>   
    </div>
  </div>
  <div className="relative mb-32 mt-20">
    <img src="https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-quartz-watch-promotion-season-atmospheric-black-banner-image_184423.jpg" className="w-full object-cover h-96" />
    <p className="text-4xl font-bold text-white absolute top-1/2 left-[100px] -translate-y-40">Genuine Time Zone Watch. <br />
      <span className="text-base font-thin"> Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna <br />
        aliqua. Quis ipsum suspendisse ultrices gravida.!</span>
    </p>
    <div className="absolute top-1/2 left-[100px] border-2 rounded-md border-red-500 -translate-y-40 hover:bg-[#ff2020] cursor-pointer delay-150 duration-200 ease-in-out py-3 px-7 text-white font-lg uppercase leading-0 inline-block boder-0 relative tracking-wide">
      <a className="transition-colors delay-300 ease-linear">View Details</a>
    </div> 
  </div>
  <div className="max-w-7xl w-full p-6 m-auto">
    <div className="grid grid-cols-2 gap-6 justify-center items-center">  
      <div>
        <h1 className="text-6xl font-bold mb-10">Watch of Choice</h1>
        <p className="text-base font-normal leading-7 mb-10">Enim ad minim veniam, quis nostrud exercitation ullamco laboris <br /> 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <br /> reprehenderit in voluptate velit esse.</p>
        <div className="hover:bg-[#4a4a4b] font-bold cursor-pointer delay-150 duration-200 ease-in-out py-5 px-7 text-white bg-[#ff2020] font-lg uppercase leading-0 inline-block boder-0 relative tracking-wide">
          <a className="transition-colors delay-300 ease-linear">Show Watcher</a>
        </div>   
      </div>
      <div>
        <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/xchoce_watch1.png.pagespeed.ic.JqdVtLwPVf.webp" />
      </div>
    </div>
    <div className="max-w-7xl w-full p-6 m-auto mt-40">
      <div className="grid grid-cols-2 gap-6 justify-center items-center">
        <div>
          <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/xchoce_watch2.png.pagespeed.ic.GaOMVE1NLY.webp" />
        </div>  
        <div>
          <h1 className="text-6xl font-bold mb-10">Watch of Choice</h1>
          <p className="text-base font-normal leading-7 mb-10">Enim ad minim veniam, quis nostrud exercitation ullamco laboris <br /> 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <br /> reprehenderit in voluptate velit esse.</p>
          <div className="hover:bg-[#4a4a4b] font-bold cursor-pointer delay-150 duration-200 ease-in-out py-5 px-7 text-white bg-[#ff2020] font-lg uppercase leading-0 inline-block boder-0 relative tracking-wide">
            <a className="transition-colors delay-300 ease-linear">Show Watcher</a>
          </div>   
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Content