import React from "react"
import logo from "../assets/images/logo.svg"
import navList from "../navList"

function Footer(){
    return(
        <div className="bg-veryDarkBlackBlue text-white text-center p-[4em] rounded-tr-[25%] sm:flex">
            <div className="mb-[2em] sm:w-[25%]">
                <img src={logo} alt="Blogr" className="mx-auto"/>
            </div>
            <nav className="sm:w-[75%]">
                <ul className="flex flex-col sm:flex-row sm:justify-around">
                    {
                        navList.map((list, index) => 
                            <li 
                                key={index}
                                className="mb-[1.5em]"
                                >
                                <p className="mb-[1em] font-[500] font-ubuntu cursor-default">
                                    {list.title}
                                </p>
                                <ul className="">
                                    {
                                        list.sub.map((subs, index) =>
                                            <li key={index}>
                                                <a 
                                                    href="#" 
                                                    className="font-overpass text-white/80 leading-[2] hover:underline hover:text-white"
                                                    >
                                                    {subs}
                                                </a>
                                            </li>    
                                        )
                                    }
                                </ul>
                            </li>
                        )
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Footer