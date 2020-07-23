import React from "react"
import FirstPort from "../../assets/images/first.png"
import SecondPort from "../../assets/images/second.png"
import ThirdPort from "../../assets/images/third.png"
import LocationIcon from "../../assets/svg/cardPortLocation.svg"
import Part3 from "./part3"

/**its my fake data.**/ 

// order:sıra,
// location:konum,
// port:liman adı,
// description:açıklama


export const fakeData = [
    { order: 1, location: "Çeşme, İzmir", port: "Kaya Limanı", description: "2020 Yılında en çok tekne kiralanan 1. liman oldu." },
    { order: 2, location: "Manavgat, Antalya", port: "Irmak Limanı", description: "2020 Yılında en çok tekne kiralanan 2. liman oldu." },
    { order: 3, location: "San Francisco, ABD", port: "SK Limanı", description: "2020 Yılında en çok tekne kiralanan 3. liman oldu." }
]

// we have data prop from Part3.js

export default function PortCard({ data = fakeData }) {

    return (
        <RenderCards data={data} />
    )



}
function RenderCards({ data }) {

    // i gonna sort data by data.order

    const Data = data.sort((a, b) => { return a.order - b.order })


    return (
        <div className="port-cards-container">

            {/* second card */}

            <div className="other-ports flex-dir-col">

                {/* port filter */}

                <div className="port-image-filter" />

                {/* port image */}

                <div className="port-image"><img src={SecondPort} /></div>

                {/* port order */}

                <div className="port-order ml-1 mb-1">#{Data[1].order}</div>

                {/* port location */}

                <div className="post-location flex-center ml-1"><img src={LocationIcon} />{Data[1].location}</div>

                {/* port name */}

                <div className="port-name ml-1">{Data[1].port}</div>

                {/* port description */}

                <div className="port-description ml-1 mb-1">{Data[1].description}</div>

            </div>

            {/* first card */}

            <div className="first-port flex-dir-col">

                {/* port filter */}

                <div className="port-image-filter" />

                {/* port image */}

                <div className="port-image"><img src={FirstPort} /></div>

                {/* port order */}

                <div className="port-order ml-1 mb-1">#{Data[0].order}</div>

                {/* port location */}
                <div className="post-location flex-center ml-1"><img src={LocationIcon} />{Data[0].location}</div>

                {/* port name */}

                <div className="port-name ml-1">{Data[0].port}</div>

                {/* port description */}

                <div className="port-description ml-1 mb-1">{Data[0].description}</div>

            </div>

            {/* Third card */}

            <div className="other-ports flex-dir-col">

                {/* port filter */}

                <div className="port-image-filter" />

                {/* port image */}

                <div className="port-image"><img src={ThirdPort} /></div>

                {/* port order */}

                <div className="port-order ml-1 mb-1">#{Data[2].order}</div>

                {/* port location */}

                <div className="post-location flex-center ml-1 "><img src={LocationIcon} />{Data[2].location}</div>

                {/* port name */}

                <div className="port-name ml-1 ">{Data[2].port}</div>

                {/* port description */}

                <div className="port-description ml-1 mb-1">{Data[2].description}</div>

            </div>

        </div>
    )
}
