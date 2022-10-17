import React from "react"
import illustrationDesktop from "../../assets/images/illustration-editor-desktop.svg"
import illustrationMobile from "../../assets/images/illustration-editor-mobile.svg"
import featureList from "../../featureList"

function Top(){
    return(
        <div className="p-[2em] lg:px-[3em] text-center max-w-[600px] mx-auto relative lg:flex lg:flex-row-reverse lg:max-w-none lg:text-left lg:pr-0">
            <div className="flex relative lg:w-[50%]">
                <img 
                    src={illustrationMobile} 
                    alt="editor" 
                    className="lg:hidden mx-auto"
                    />
                    <div className="hidden absolute lg:flex ml-[80px] w-[120%] h-fit my-auto top-0 bottom-0">
                        <img 
                            src={illustrationDesktop} 
                            alt="editor" 
                            className="my-auto w-full h-full object-center"
                            />
                    </div>
            </div>
            <div className="lg:w-[50%] lg:mr-auto lg:pl-[5em] pt-[1em] pb-[2em]">
                {
                    featureList.top.map((list, index) =>
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

export default Top