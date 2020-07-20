import React from "react"
import Bacground from "../../assets/images/part3.png"
import Captain from "../../assets/svg/captain.svg"


export default function Part3() {


    return (
        <div className="part3">

            {/* background */}
            <div className="captain-ship"><img src={Captain}/></div>
            <div className="background-div">
                <img src={Bacground}/>
            </div>

            {/* Populer Limanlar */}
        </div>
    )



}