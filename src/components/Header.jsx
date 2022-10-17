import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock"
import React, { useEffect, useState } from "react"
import arrowMenu from "../assets/images/icon-arrow-dark.svg"
import arrow from "../assets/images/icon-arrow-light.svg"
import close from "../assets/images/icon-close.svg"
import hamburger from "../assets/images/icon-hamburger.svg"
import logo from "../assets/images/logo.svg"
import navList from "../navList"

function Header(){
    const [navs, setNavs] = useState([])
    const [openMenu, setOpenMenu] = useState(false)

    useEffect(() => {
        setNavs(navList.map(list => ({...list, isOpen: false})))
    }, [])

    function toggleNav(id){
        setNavs(navs.map((list, ind) => ind === id ? ({...list, isOpen: !list.isOpen}) : ({...list, isOpen: false})))
    }

    openMenu ? disableBodyScroll(document) : enableBodyScroll(document)

    return(
        <header className="flex justify-between p-[2em] md:px-[3em] font-ubuntu font-[500] text-white/80">
            <div className="mr-[3em]">
                <img src={logo} alt="Blogr"/>
            </div>
            <div className={`flex justify-between w-full md:flex ${openMenu ? 'flex-col bg-white absolute w-[80%] right-0 left-0 mx-auto text-veryDarkGrayishBlue h-fit rounded-md flex-col p-[2em] text-[18px] font-overpass font-[600] mt-[3em]' : 'hidden'}`}>
                <nav className={`mr-auto ${openMenu && 'mr-0'}`}>
                    <ul className={`flex h-full items-center ${openMenu && 'flex-col mx-auto'}`}>
                        {
                            navs.map((list, index) => 
                                <div key={index} className={`even:mx-[2em] ${openMenu && 'w-full'}`}>
                                    <li className={`flex relative justify-center ${openMenu && 'leading-[2.5]'}`}>
                                        <p className={`hover:underline hover:text-white cursor-default ${openMenu && 'hover:text-lightRed'}`}>
                                            {list.title}
                                        </p>
                                        <div 
                                            className="flex items-center ml-[5px] cursor-pointer"
                                            onClick={() => toggleNav(index)}>
                                            <img 
                                                src={openMenu ? arrowMenu : arrow} 
                                                alt="arrow" 
                                                />
                                        </div>
                                    </li>
                                    <ul className={`absolute bg-white text-veryDarkGrayishBlue font-overpass p-[1em] w-[125px] rounded-lg ${list.isOpen ? 'block' : 'hidden'} ${openMenu && 'relative bg-grayishBlue/50 w-[100%] inline-block text-center font-overpass font-[400]'}`}>
                                        {
                                            list.sub.map((subs, index) =>
                                                <li key={index} className="leading-[2] hover:font-[600]">
                                                    <a href="#">
                                                        {subs}
                                                    </a>
                                                </li>    
                                            )
                                        }
                                    </ul>
                                </div>
                            )
                        }
                    </ul>
                </nav>
                {openMenu && <hr className="w-full my-[1em]"/>}
                <div className={`flex items-center ${openMenu && 'flex-col'}`}>
                    <button className={`hover:text-white hover:underline ${openMenu && 'mb-[1em] hover:text-lightRed'}`}>
                        Login
                    </button>
                    <button className={`bg-white text-lightRed rounded-3xl h-full px-[2em] ml-[2em] hover:text-white hover:bg-white/30 ${openMenu && 'ml-0 bg-gradient-to-l from-bgLightRed to-bgVeryLightRed text-white/100 py-[.5em] hover:bg-gradient-to-r'}`}>
                        Sign Up
                    </button>
                </div>
            </div>
            <div className="flex items-center md:hidden cursor-pointer">
                <img 
                    src={openMenu ? close : hamburger} 
                    alt="menu" 
                    onClick={() => setOpenMenu(!openMenu)}/>
            </div>
        </header>
    )
}

export default Header