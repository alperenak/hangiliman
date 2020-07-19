import React, { useState } from "react"
import Location from "../../../assets/svg/location.svg"
import Calendar from "../../../assets/svg/calendar.svg"
import Rudder from "../../../assets/svg/rudder.svg"
import Calendar1 from "../../../assets/svg/calendar1.svg"
import Dropdown from "../../../assets/svg/dropdown.svg"

export default function SelectBoxesBar({ type }) {
    return (
        <TypeButton typeButton={type} />
    )
}

function TypeButton({ typeButton }) {
    if (typeButton === "location") {

        return (
            <div className="select-boxes-bar">
                <div className="box-head"><img className="location-icon" src={Location} />Konum</div>
                <div className="box-main">Manavgat, Antalya</div>
            </div>
        )
    }
    else if (typeButton === "rudder") {
        return (
            <div className="select-boxes-bar">
                <div className="box-head"><img className="location-icon" src={Rudder} />Liman</div>
                <div className="box-main">Side, A. Kent Limanı <img className="calendar-icon" src={Dropdown} /></div>
            </div>
        )
    }

    else if (typeButton === "calendar") {
        return (
            <div className="select-boxes-bar">
                <div className="box-head"><img className="location-icon" src={Calendar} />Tarih</div>
                <div className="box-main">19 Tem - 2 Ağu <img className="calendar-icon" src={Calendar1} /> </div>
            </div>
        )
    }
}