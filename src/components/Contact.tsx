import React from 'react'

type Props = {}

const Contact = (props: Props) => {
  return (
    <div>
        <div>
        <div className="bg-[#eff5f8] block">
            <ul className="text-center p-5">
            <li className="inline-block"><a className="px-1 py-3 text-lg font-medium text-[#8d979d]" href="/">Home</a></li> 
            <li className="inline-block"><span className="px-1 text-lg font-medium text-[#8d979d] py-3">&gt;</span></li>
            <li className="inline-block"><a className="px-1 text-lg font-medium text-black py-3" href="/contact">Contact</a></li>
            </ul>
        </div>
        <div className="max-w-7xl w-full p-6 m-auto mt-20">
            <div className=" grid grid-cols-2 gap-10">
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.863981044336!2d105.74459841473156!3d21.038127785993204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1svi!2s!4v1644994605778!5m2!1svi!2s" width={600} height={550} style={{border: 0}} allowFullScreen loading="lazy" />
            </div>
            <div className="text-center">
                <div>
                <h2 className="text-3xl font-semibold tracking-wider mb-2">CONTACT US</h2>
                <div>
                    <span><i className="bi bi-dash-lg" style={{fontSize: '2rem'}} /></span>
                    <span><i className="bi bi-watch" style={{fontSize: '2rem'}} /></span> 
                    <span><i className="bi bi-dash-lg" style={{fontSize: '2rem'}} /></span>
                </div>
                </div>
                <div className="mt-4">
                <form>
                    <div>
                    <div>
                        <input placeholder="Full name" className="outline-none border border-gray-300 w-[45%] px-3 py-2 mb-3" />
                        <input placeholder="Email" className="outline-none border border-gray-300 w-[45%] px-3 py-2 m-2" />
                    </div>
                    <div>
                        <input placeholder="Phone Number" className="outline-none border border-gray-300 w-[45%] px-3 py-2 mb-3" />
                        <input placeholder="Address" className="outline-none border border-gray-300 w-[45%] px-3 py-2 mb-3 m-2" />
                    </div>
                    </div>
                    <textarea placeholder="Note" rows={5} cols={68} className="outline-none border border-gray-300 px-3 py-2 mb-3 mr-2" defaultValue={""} />
                    <button className="block mx-[25%] px-32 py-2 text-lg bg-red-500 text-white shadow-md">SEND</button>
                </form>
                </div>
            </div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Contact