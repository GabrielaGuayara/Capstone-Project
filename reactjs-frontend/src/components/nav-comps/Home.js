import React from 'react'
import { Body } from '../pages-comps/Body'
import { Footer } from '../pages-comps/Footer'
import { Header } from '../pages-comps/Header'


import { Navbar } from './Navbar'



export  const Home = () => {

    return (
        <>           
            <Navbar/>
            <Header/>
            <Body/>
            <Footer/>

            
        </>
    )
}
