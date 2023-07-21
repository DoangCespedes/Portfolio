import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Style.css";

export const NavBar = () => {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

  return (
        <header>
            <h3>Logo</h3>
            <nav ref={navRef}>
                <a href="#">Home</a>
                <a href="#">My work</a>
                <a href="#">Blog</a>
                <a href="#">About</a>
                <button onClick={showNavBar} className="nav-btn nav-close-btn">
                    <FaTimes/>
                </button>
                
            </nav>

            <button onClick={showNavBar} className="nav-btn">
                <FaBars/>
            </button>
        </header>
  )
}
