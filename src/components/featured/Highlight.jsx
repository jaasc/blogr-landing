import React from "react"
import illustration from "../../assets/images/illustration-phones.svg"
import featureList from "../../featureList"

function Highlight(){
    return(
        <div className="text-white pt-[15em] md:py-[2em] lg:mt-[5em]">
            <div className="bg-gradient-to-t from-bgVeryDarkSaturatedBlue relative to-bgVeryDarkGrayBlue relative min-h-[500px] md:min-h-0 md:h-[300px] flex rounded-bl-[15%] rounded-tr-[15%]">
                <div className="h-[75%] md:h-full md:w-[50%] w-full bg-circles bg-bottom bg-cover absolute z-0">
                </div>
                <div className="z-[100] md:flex">
                    <div className="mt-[-230px] md:mt-[-35px] w-fit mx-auto md:w-[50%]">
                        <img src={illustration} alt="phone" className="h-[120%] mx-auto"/>
                    </div>
                    <div className="px-[1em] mb-[3em] md:h-full md:w-[50%] md:flex md:items-center md:pr-[3em] lg:pr-[5em]">
                        {
                            featureList.highlight.map((list, index) =>
                                <div key={index} className="text-center md:text-left sm:px-[2em] md:px-0">
                                    <h3 className="text-3xl font-ubuntu font-[500]">
                                        {list.title}
                                    </h3>
                                    <p className="mt-[1em] font-overpass leading-[1.8] ">
                                        {list.description}
                                    </p>
                                </div>
                            )
                        }
                    </div> 
                </div>   
            </div>  
        </div>
    )
}

export default Highlight