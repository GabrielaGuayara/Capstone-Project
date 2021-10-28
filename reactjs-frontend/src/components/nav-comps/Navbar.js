import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import '../CSS/home.css'
import { GiDelicatePerfume, GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle} from "react-icons/ai";

export  const Navbar= () => {

    const[click, setClick] = useState(false);
    const handleClick =()=>setClick(!click);

    return (
        <nav className="navbar ">
        <div className="nav-container">
            <NavLink exact to="/" className="nav-logo">
            DE PARFUM <span><GiDelicatePerfume  className="nav-perfume-icon"/></span>
            </NavLink>
            <ul  className={click ? "nav-menu active":"nav-menu"}>
                {/* <li className="nav-item">
                    <NavLink exact to="/home" className="nav-links">
                        Home
                    </NavLink>
                </li> */}
                <li  className="nav-item">
                    <NavLink exact to="/products-list" className="nav-links">
                        Products
                    </NavLink>
                </li>
                <li  className="nav-item">
                    <NavLink exact to='/aboutus' className="nav-links" >
                       AboutUs
                    </NavLink>
                </li>
                <li  className="nav-item">
                    <NavLink exact to='/contact' className="nav-links" >
                       ContactUs
                    </NavLink>
                </li>
                <li  className="nav-item">
                    <NavLink exact to='/admi-login' className="nav-links" >
                       ADMI
                    </NavLink>
                </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
                { click ? <AiFillCloseCircle/>  : <GiHamburgerMenu/>}  
            </div>

        </div>
        </nav>


  )
}

  

