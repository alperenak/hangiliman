import React, { useState } from "react"
import Bacground from "../../assets/images/part3.png"
import Captain from "../../assets/images/captain.png"
import PortCard from "./portCard"


export default function Part3() {
    const portData = useState([])

    return (
        <div className="part3">

            {/* background */}
            <div className="captain-ship"><img src={Captain} /></div>
            <div className="background-div">
                <img src={Bacground} />
            </div>

            {/* Populer Limanlar */}
            <div className="part3-main flex-center">
                <div className="popular-ports flex-dir-col"><h1>Popüler Limanlar</h1>
                    {/* Liman cards */}
                    <PortCard />
                    <div className="more-ports-button flex-center">Daha fazla</div>
                </div>
            </div>
        </div>
    )



}