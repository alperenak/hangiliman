import React, { useState, Component } from "react"
import { Location } from "../../../components/icons/index"
import { Calendar } from "../../../components/icons/index"
import { Calendar1 } from "../../../components/icons/index"
import { Rudder } from "../../../components/icons/index"
import { Dropdown } from "../../../components/icons/index"

export default function SelectBoxesBar({ type }) {
    return (

        // get type homejs and I give prop of TypeButton Component

        <TypeButton typeButton={type} />
    )
}

function TypeButton({ typeButton }) {

    // if type button Location render some

    if (typeButton === "location") {

        return (
            <div id="location-box" className="select-boxes-bar">
                <div className="box-head"><Location className="location-icon" />Konum</div>
                <div className="box-main">Manavgat, Antalya</div>
            </div>
        )
    }

    // if type button Rudder  render some

    else if (typeButton === "rudder") {
        return (
            <div id="rudder-box" className="select-boxes-bar">
                <div className="box-head"><Rudder className="location-icon" />Liman</div>
                <div className="box-main">Side, A. Kent Limanı <Dropdown className="calendar-icon" /></div>
            </div>
        )
    }

    // if type button Calendar render some

    else if (typeButton === "calendar") {
        return (
            <div id="calendar-box" className="select-boxes-bar">
                <div className="box-head"><Calendar className="location-icon" />Tarih</div>
                <div className="box-main">19 Tem - 2 Ağu <Calendar1 className="calendar-icon" /> </div>
            </div>
        )
    }
}