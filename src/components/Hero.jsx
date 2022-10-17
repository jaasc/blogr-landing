import React from "react"
import Header from "./Header"

function Hero() {
    return (
        <div className="bg-gradient-to-t from-bgLightRed to-bgVeryLightRed h-screen overflow-hidden rounded-bl-[25%] md:rounded-bl-[20%] md:max-h-[700px]">
            <div className="h-full bg-intro-pattern bg-pos-intro-mobile bg-size-intro-mobile md:bg-pos-intro-desktop md:bg-size-intro-desktop flex flex-col">
                <Header/>
                <div className="text-white text-center h-full flex flex-col">
                    <div className="my-auto">
                        <h1 className="text-5xl font-ubuntu leading-[1.3] px-[1em] font-[500]">
                            A modern publishing platform
                        </h1>
                        <p className="font-overpass text-2xl mt-[1em] px-[1.5em]">
                            Grow your audience and build your online brand
                        </p>
                        <div className="mt-[3em]">
                            <button className="bg-white text-lightRed rounded-3xl px-[1em] py-[.5em] mr-[1em] font-[700] font-ubuntu text-xl hover:text-white hover:bg-white/30">
                                Start for Free
                            </button>
                            <button className="border-[1px] border-white rounded-3xl  px-[1em] py-[.5em] font-[700] font-ubuntu text-xl hover:bg-white hover:text-lightRed/80">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero