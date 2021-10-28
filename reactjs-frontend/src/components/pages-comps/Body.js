import React from 'react'
import { useHistory } from "react-router-dom";
import brand1 from "../img/brand1.jpg"
import brand2 from "../img/brand2.jpg"
import brand3 from "../img/brand3.jpg"
import video from "../img/video.mp4"

export const Body = () => {
    let history = useHistory();

    const handleClick = ()=> {
      history.push("/products-list");
    }


    return (
        <>
        <div className=" container py-5">
            <div className="brands-ctn py-5 ">
                <h1 className="container text-center fw-bold">Brands</h1>
                    <div className="brand-cards row text-center">
                            <div className=" card col-md-3 mx-10">
                                <h4 className="py-3 mx-2">Yanbal</h4>
                                <img className="card-img-top brands-imag" src= {brand1} alt="perfume"/>
                                <div className="card-body">
                                    <p className="card-text">Yanbal is a cosmetic brand which was established in Peru. This company offers its selection of perfumes for customers from all corners of the world. However, in The Perfume House offers yanbal perfumes made with high quality products.</p>
                                </div>
                            </div>
                            <div className="card col-md-3 mx-10">
                                 <h4 className="py-3">L'bel</h4>
                                <img className="card-img-top brands-imag" src= {brand2} alt="perfume" />
                                <div className="card-body">
                                    <p className="card-text">L'bel is an international brands whose products are distributed in more than 130 Countries. L'bel offers its selection of perfumes elaborated with high quality products. Here, in the Perfume House you can find them. </p>
                                 </div>
                            </div>
                            <div className="card col-md-3 mx-10">
                                <h4 className="py-3">Avon</h4>
                                <img className="card-img-top brands-imag" src= {brand3} alt="perfume"/>
                                <div className="card-body">
                                    <p className="card-text">Avon is the leading social selling beauty company in North America. Avon offers its selection of perfumes for customers from all corners of the world. The Perfume House offers Avon perfumes elaborated with high quality products. </p>
                                </div>
                            </div>
                        </div>
                        <div className="ctn py-4 text-center">
                            <button className="btn btn-secondary btn-rounded"  onClick={handleClick}>View Products</button>
                    
                        </div>
                    </div>
                </div>
                <div className="row py-3 text-center" >
                    <h1>High-Quality Products</h1>
                    <div className="embed-responsive embed-responsive-16by9" > 
                        <video className="container" width="500" height="400" controls loop autoPlay>
                        <source src={video} type="video/mp4"/>
                        </video>
                    </div>
            </div>

        </>
    )
}
