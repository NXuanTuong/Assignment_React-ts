import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

type Props = {}

const Header = (props: Props) => {
    let cart = []
    if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart") as string)
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
                    <li className="inline-block relative z-10"><Link className="text-[#141517] text-lg font-semibold block font-['Josefin Sans','sans-serif'] px-5 py-10 capitalize hover:text-red-500 transition-all delay-200 ease-out outline-none cursor-pointer" to="/">Home</Link></li>
                    <li className="inline-block relative z-10"><Link className="text-[#141517] text-lg font-semibold block font-['Josefin Sans','sans-serif'] px-5 py-10 capitalize hover:text-red-500 transition-all delay-200 ease-out outline-none cursor-pointer" to="/product">Shop</Link></li>
                    <li className="inline-block relative z-10"><Link className="text-[#141517] text-lg font-semibold block font-['Josefin Sans','sans-serif'] px-5 py-10 capitalize hover:text-red-500 transition-all delay-200 ease-out outline-none cursor-pointer" to="/about">About</Link></li>
                    <li className="inline-block relative z-10"><Link className="text-[#141517] text-lg font-semibold block font-['Josefin Sans','sans-serif'] px-5 py-10 capitalize hover:text-red-500 transition-all delay-200 ease-out outline-none cursor-pointer" to="/blog">Blog</Link></li>
                    <li className="inline-block relative z-10"><Link className="text-[#141517] text-lg font-semibold block font-['Josefin Sans','sans-serif'] px-5 py-10 capitalize hover:text-red-500 transition-all delay-200 ease-out outline-none cursor-pointer" to="/contact">Contact</Link></li>
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
                            <Link to="/signin" className="hover:text-red-500 cursor-pointer">Sign in</Link></span> 
                        <span>/</span> 
                        <span>
                            <Link to="/signup" className="hover:text-red-500 cursor-pointer">Create account</Link>
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