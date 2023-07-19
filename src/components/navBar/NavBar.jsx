import "./Style.css";
import { useEffect, useRef, useState } from "react";

export const NavBar = () => {

    const lastScrollTop = useRef(0);
    const [isNavbarVisible , setNavbarVisible] = useState(true);

    const handleScroll =() => {
        const {pageYOffset} = window;
        if (pageYOffset > lastScrollTop.current){
            //downward scroll

            setNavbarVisible(false);
        }else if(
            pageYOffset < lastScrollTop.current
        ) {
            //upward scroll
            setNavbarVisible(true);
            //else was horizontal scroll
            lastScrollTop.current = pageYOffset;
        }
    }

    useEffect(() => {
      window.addEventListener('scroll', handleScroll, {passive: true});
      return window.removeEventListener("scroll", handleScroll)
    
    }, []);
    
  return (
    <>
        <nav className={`${isNavbarVisible ? "visible" : ""}`}>
        {/* <img src={logo}/> */}
        <div className="nav-items">
            <a>Portafolio</a>
            <a>Portafolio</a>
            <a>Portafolio</a>
        </div>
        </nav>
    </>
  )
}
