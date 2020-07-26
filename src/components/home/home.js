import React, { useEffect, useState } from "react"
import SelectBoxesBar from "./header/selectboxes"
import HeaderPNG from "../../assets/images/header1.png"
import Logo from "../../assets/images/logo.png"
import Anchor from "../../assets/svg/anchor.svg"
import "../../App.css"

export default function Home() {


    return (
        <header>
            {/* filter */}

            <div className="header-img-filter" />

            {/* background */}

            <div className="header-img"> <img src={HeaderPNG} /></div>

            {/* logo */}

            <div className="logo"> <img width="200" src={Logo} /></div>

            {/* titles */}

            <div className="hero-title">

                {/* Eşsiz denizler... Titles */}

                <h1>Eşsiz denizlere <a>hangiliman</a>'dan çıkacaksınız?</h1>

                {/* Yat,tekne... Titles */}

                <p>Yat, tekne bizi bekle.</p>
            </div>
            <div className="listing-ships-container">

                {/* select boxes */}

                <div className="select-boxes">
                    <SelectBoxesBar type="location" />
                    <SelectBoxesBar type="rudder" />
                    <SelectBoxesBar type="calendar" />
                </div>

                {/* result button */}

                <div className="result-button flex-center">
                    Sonuçları Listele
            
                </div>


            </div>

            {/* anchor icon */}

            <div className="anchor-icon-div flex-center" >
                <a href="#part2"><img src={Anchor} /></a>
            </div>
        </header>
    )


}