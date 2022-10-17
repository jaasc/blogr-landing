import React from "react"
import illustrationDesktop from "../../assets/images/illustration-laptop-desktop.svg"
import illustrationMobile from "../../assets/images/illustration-laptop-mobile.svg"
import featureList from "../../featureList"

function Bottom(){
    return(
        <div className="px-[2em] pt-[2em] lg:py-[4em] lg:px-[3em] text-center max-w-[600px] mx-auto relative lg:flex lg:flex-row lg:max-w-none lg:text-left lg:pl-0">
            <div className="flex relative lg:w-[50%]">
                <img 
                    src={illustrationMobile} 
                    alt="editor" 
                    className="lg:hidden mx-auto"
                    />
                    <div className="hidden absolute lg:flex mr-[90px] w-[120%] h-fit my-auto right-0 top-0 bottom-0">
                        <img 
                            src={illustrationDesktop} 
                            alt="editor" 
                            className="my-auto w-full h-full object-center"
                            />
                    </div>
            </div>
            <div className="lg:w-[50%] lg:mr-auto lg:pr-[5em] pt-[1em] pb-[2em]">
                {
                    featureList.bottom.map((list, index) =>
                        <div key={index} className="pt-[1em]">
                            <h3 className="text-veryDarkBlue text-3xl font-ubuntu font-[500] odd:mt-[1em]">
                                {list.title}
                            </h3>
                            <p className="mt-[1em] font-overpass leading-[1.8]">
                                {list.description}
                            </p>
                        </div>    
                    )
                }
            </div>
        </div>
    )
}

export default Bottom