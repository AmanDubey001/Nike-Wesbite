import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { BiArrowBack } from "react-icons/bi";
import Product from "./Product";

const Hero = () => {
    return (
        <div className="relative text-white text-[20px] w-full max-w-[1000px] mx-auto">
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showIndicators={false}
                showStatus={false}
                renderArrowPrev={(clickHandler, hasPrev) => (
                    <div
                        onClick={clickHandler}
                        className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                    >
                        <BiArrowBack className="text-sm md:text-lg" />
                    </div>
                )}
                renderArrowNext={(clickHandler, hasNext) => (
                    <div
                        onClick={clickHandler}
                        className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                    >
                        <BiArrowBack className="rotate-180 text-sm md:text-lg" />
                    </div>
                )}
            >
                <div>
                    <img
                        src="/slide-1.png"
                        className="aspect-[16/10] md:aspect-auto object-cover"
                    />
                    <div className="px-[15px] md:px-[20px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-2 md:bottom-2 left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
                        Shop now
                    </div>
                </div>

                <div>
                    <img
                        src="/slide-2.png"
                        className="aspect-[16/10] md:aspect-auto object-cover"
                    />
                    <div className="px-[15px] md:px-[20px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-2 md:bottom-2 left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
                        Shop now
                    </div>
                </div>

                <div>
                    <img
                        src="/slide-3.png"
                        className="aspect-[16/10] md:aspect-auto object-cover"
                    />
                    <div className="px-[15px] md:px-[20px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-2 md:bottom-2 left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
                        Shop now
                    </div>
                </div>
            </Carousel>
            <h1 className="text-start text-[30px] px-2 text-black font-oswal mt-[100px] leading-10 font-[500] md:text-center text-[40px] font-[850]">Cushioning For Your Miles</h1>
            <h3 className="text-start text-sm px-2 text-black font-oswal mt-14 leading-8 font-normal md:text-center text-[25px] font-normal">A lightweight Nike ZoomX midsole is combined with increased stack heights to help provide Cushioning during extended streches of running</h3>

            <div className="grid grid-cols-1 my-20 gap-5 md:grid-cols-2 lg:grid-cols-3" >
             <Product/>
             <Product/>
             <Product/>
             <Product/>
             <Product/>
             <Product/>
            </div>

        </div>
    );
};

export default Hero;