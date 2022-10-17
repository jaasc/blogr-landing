import React from "react"
import Bottom from "./featured/Bottom"
import Highlight from "./featured/Highlight"
import Top from "./featured/Top"

function Features(){
    return(
        <div className="text-veryDarkGrayishBlue py-[4em] overflow-hidden">
            <h2 className="text-veryDarkBlue text-4xl font-[500] font-ubuntu text-center mb-[1em]">
                Designed for the future
            </h2>
            <Top/>
            <Highlight/>
            <Bottom/>
        </div>
    )
}

export default Features