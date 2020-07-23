import React, { useState, useEffect } from "react"
import Bacground from "../../assets/images/part3.png"
import Captain from "../../assets/images/captain.png"
import PortCard from "./portCard"


export default function Part3() {
    const portData = useState([])

    useEffect(() => {

        // TODO
        // ---> onscroll olduğunda kaptanlı gemi hareket edecek


        // const container = document.getElementById("container")
        // container.addEventListener("scroll", () => {

        // });
    }, [])


    return (
        <div id="part3" className="part3">

            {/* captain with ship */}

            <div id="captain-ship" className="captain-ship"><img src={Captain} /></div>

            {/* background */}

            <div className="background-div">
                <img src={Bacground} />
            </div>

            {/* Populer Limanlar */}

            <div className="part3-main flex-center">
                <div className="popular-ports flex-dir-col"><h1><a>Popüler</a> Limanlar</h1>

                    {/* Liman cards */}

                    <PortCard />

                    <div className="more-ports-button flex-center">Daha fazla</div>
                </div>
            </div>
        </div>
    )



}