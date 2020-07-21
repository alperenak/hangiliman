import React from "react"
import Bacground from "../../assets/images/part3.png"
import Captain from "../../assets/images/captain.png"


export default function Part3() {


    return (
        <div className="part3">

            {/* background */}
            <div className="captain-ship"><img src={Captain}/></div>
            <div className="background-div">
                <img src={Bacground}/>
            </div>

            {/* Populer Limanlar */}
            <div className="part3-main flex-center">
            <div className="popular-ports"><h1>Popüler Limanlar</h1></div>
            </div>
        </div>
    )



}