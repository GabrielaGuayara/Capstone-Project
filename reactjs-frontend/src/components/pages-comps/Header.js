import React from 'react'
import { useHistory } from "react-router-dom";

export const Header = () => {

    let history = useHistory();

    const handleClick = ()=> {
      history.push("/aboutus");
    }

    return (
<div className="header">
                <div className="main-header-ctn text-center ">
                                <div className=" headertext">
                                    <h1 className="fw-bolder"> De Parfum</h1>
                                    <p>In this place, we offer high-quality products from the best brands such as Yanbal, Avon and L'bel. Here you can find a selection of perfumes elaborated with natural elements that do not damage any type of skin and leave an incredible smell. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna enim ad minim veniam, quis nostrud exercitation.  If interested, our main store is located in Brooklyn, NY. We hope to see you soon!</p>
                                    <div className="ctn py-4 text-center">
                                    <button className="btn btn-secondary btn-rounded" onClick={handleClick}>Read More</button>
                    
                                 </div>
                                 </div>

                </div>
            </div>
    )
}
