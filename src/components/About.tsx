import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div>
    <div>
    <div className="bg-[#eff5f8] block">
        <ul className="text-center p-5">
        <li className="inline-block"><a className="px-1 py-3 text-lg font-medium text-[#8d979d]" href="/">Home</a></li> 
        <li className="inline-block"><span className="px-1 text-lg font-medium text-[#8d979d] py-3">&gt;</span></li>
        <li className="inline-block"><a className="px-1 text-lg font-medium text-black py-3" href="/about">About</a></li>
        </ul>
    </div>
    <div className="max-w-7xl w-full p-6 m-auto mt-20">
        <div className="grid grid-cols-2 gap-5 items-center">
        <div>
            <img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/about-us_bg.jpg" className="w-11/12" />
        </div>
        <div>
            <h3 className="text-4xl mb-5 font-bold">About Watch Time Zone</h3>
            <p className="text-base text-[#8d979d]">“Along with the continuous development of world fashion, many brands have launched genuine men's watches with a variety of styles, designs, colors, sizes... A high-end men's watch genuine portrays a true value when it comes to luxury men's accessories. Nowadays, watches are essential fashion accessories for today's modern man. On the wrists of successful men there is always a place for a high-end men's watch.”</p>
        </div>
        </div>
    </div>
    <div className="relative mt-20 text-center">
        <img src="https://i.imgur.com/jvob5p5.jpg" className="w-full object-cover h-96" />
        <p className="text-lg font-thin leading-7 tracking-wide text-red-600 absolute top-[48%] left-[43%] -translate-y-40">20% off limited time products<br />
        </p><p className="text-5xl font-bold text-white absolute top-[55%] left-[30%] -translate-y-40">New style trend Time Zone<br />
        <span className="text-base font-thin"> Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna <br />
            aliqua. Quis ipsum suspendisse ultrices gravida.!</span>
        </p>
        <div className=" border-2 rounded-md border-red-500 -translate-y-32 hover:bg-[#ff2020] cursor-pointer delay-150 duration-200 ease-in-out py-4 px-10 text-white font-lg uppercase leading-0 inline-block boder-0 relative tracking-wide">
        <a className="transition-colors delay-300 ease-linear">LOOKING FOR MORE INFORMATION</a>
        </div> 
    </div>
    <div className="max-w-7xl w-full p-6 m-auto mt-16">
        <div className="grid grid-cols-2 gap-5 items-center">
        <div>
            <h3 className="text-4xl mb-5 font-bold">Watch Time Zone Highlights</h3>
            <p className="text-base text-[#8d979d]">A watch is not only a tool to tell the time, it is also a piece of jewelry. Today, the "jewelry" role of the watch is increasingly emphasized. Even the watch is the jewelry that most clearly shows the personality of the wearer. The following young fashion watch collection is an example. ”
            ”</p>
        </div>
        <div>
            <img src="https://cdn.tgdd.vn/Files/2019/08/27/1192123/top-6-thuong-hieu-dong-ho-cua-my-noi-tieng-tren-the-gioi-6.jpg" className="w-11/12" />
        </div>
        </div>
    </div>
    <div className="bg-[#f0f0f2]">
        <div className="max-w-7xl w-full p-6 m-auto mt-10">
        <h2 className="text-3xl font-bold">Time Zone Team</h2>
        <div className="grid grid-cols-3 gap-5 mt-28">
            <div className="text-center">
            <div>
                <img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/customer-2-150x150.png" className="rounded-full border border-gray-200 m-auto w-32 mb-5" />
            </div>
            <div>
                <p className="italic text-base mb-5">Nowadays, watches are essential fashion accessories for today's modern man</p>
                <h3 className="text-xl font-bold">Nguyen Thi A</h3>
            </div>
            </div>
            <div className="text-center">
            <div>
                <img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/customer-4-150x150.png" className="rounded-full border border-gray-200 m-auto w-32 mb-5" />
            </div>
            <div>
                <p className="italic text-base mb-5">Nowadays, watches are essential fashion accessories for today's modern man</p>
                <h3 className="text-xl font-bold">Nguyen Van B</h3>
            </div>
            </div>
            <div className="text-center">
            <div>
                <img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/customer-3-150x150.png" className="rounded-full border border-gray-200 m-auto w-32 mb-5" />
            </div>
            <div>
                <p className="italic text-base mb-5">Nowadays, watches are essential fashion accessories for today's modern man</p>
                <h3 className="text-xl font-bold">Nguyen Thi C</h3>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>

    </div>
  )
}

export default About