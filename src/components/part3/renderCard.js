import React from "react"
import { Location } from "../../components/icons/index"
import { FakeData } from "./fakeData/fakeData"
import { ConverData } from "./convertData"


export default function RenderCard({ data = FakeData }) {

    const result = ConverData(data)

    return (
        <div className="port-cards-container">

            {result.map(item => {
                return (
                    <div className={`${item.className} flex-dir-col`}>

                        {/* port filter */}

                        <div className="port-image-filter" />

                        {/* port image */}

                        <div className="port-image"><img src={item.image} /></div>

                        {/* port order */}

                        <div className="port-order ml-1 mb-1">#{item.order}</div>

                        {/* port location */}

                        <div className="port-location flex-center ml-1"><Location className="port-location-img" />{item.location}</div>

                        {/* port name */}

                        <div className="port-name ml-1">{item.port}</div>

                        {/* port description */}

                        <div className="port-description ml-1 mb-1">{item.description}</div>

                    </div>
                )
            })}
        </div>
    )

}

