import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

type Props = {}

const Header = (props: Props) => {
    let cart = []
    if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"))
    }
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem("user")
        navigate("/")
    }
  return (
    <header id="header">
        <div className="px-3">
            <div className="w-full px-3 py-0 m-auto">
            <div className="flex items-center content-center justify-between flex-wrap">
                <div>
                <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/xlogo2_footer.png.pagespeed.ic.WC60eOreUW.webp" />
                </div>
                <div className="block">
                <ul className="list-none m-0 p-0">
                    <li className="inline-block relative z-10"><a className="text-[#141517] text-lg font-semibold block font-['Josefin Sans','sans-serif'] px-5 py-10 capitalize hover:text-red-500 transition-all delay-200 ease-out outline-none cursor-pointer" href="/">Home</a></li>
                    <li className="inline-block relative z-10"><a className="text-[#141517] text-lg font-semibold block font-['Josefin Sans','sans-serif'] px-5 py-10 capitalize hover:text-red-500 transition-all delay-200 ease-out outline-none cursor-pointer" href="/product">Shop</a></li>
                    <li className="inline-block relative z-10"><a className="text-[#141517] text-lg font-semibold block font-['Josefin Sans','sans-serif'] px-5 py-10 capitalize hover:text-red-500 transition-all delay-200 ease-out outline-none cursor-pointer" href="/about">About</a></li>
                    <li className="inline-block relative z-10"><a className="text-[#141517] text-lg font-semibold block font-['Josefin Sans','sans-serif'] px-5 py-10 capitalize hover:text-red-500 transition-all delay-200 ease-out outline-none cursor-pointer" href="/blog">Blog</a></li>
                    <li className="inline-block relative z-10"><a className="text-[#141517] text-lg font-semibold block font-['Josefin Sans','sans-serif'] px-5 py-10 capitalize hover:text-red-500 transition-all delay-200 ease-out outline-none cursor-pointer" href="/contact">Contact</a></li>
                </ul>
                </div>
                <div>
                <ul className="list-none items-center m-0 p-0 flex justify-between">
                    <li>
                    {localStorage.getItem("user") ? 
                        <div className="inline-block">
                        <span className="text-black text-base font-semibol">
                        <i className="fas fa-user px-4" />
                        <Link to="profile">
                                <span>
                                {JSON.parse(localStorage.getItem("user") as string)?.email}</span> 
                        </Link> 
                        <span>/</span> 
                        <div>
                            <div onClick={() => logout()} className="hover:text-red-500 cursor-pointer">Logout</div>
                        </div> 
                        </span>
                        </div> :
                        <div className="inline-block">
                        <span className="text-black text-base font-semibol px-4 py-3">
                        <i className="fas fa-user px-4" /> 
                        <span>
                            <a href="/signin" className="hover:text-red-500 cursor-pointer">Sign in</a></span> 
                        <span>/</span> 
                        <span>
                            <a href="/signup" className="hover:text-red-500 cursor-pointer">Create account</a>
                        </span> 
                        </span>
                        </div>
                    }
                    
                    </li>
                    <li className="list-item"><a href="/cart">
                        <span className="text-black relative text-lg font-semibol px-4 py-3 cursor-pointer">
                        <i className="fas fa-shopping-cart" />
                        <div id="cartID" className="boder absolute border-red-500 bg-red-500 rounded-full px-2 py-1 -top-[2px] right-[5px] text-white text-xs text-center">{cart.length}</div>
                        </span></a>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </div>
        </header>
  )
}

export default Header