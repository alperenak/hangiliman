import React, { useState, useEffect } from "react"
import FirstPort from "../../assets/images/first.png"
import SecondPort from "../../assets/images/second.png"
import ThirdPort from "../../assets/images/third.png"
import { CardPortLocation } from "../../components/icons/index"

/**its my fake data.**/

// order:sıra,
// location:konum,
// port:liman adı,
// description:açıklama


export const fakeData = [
    { order: 1, location: "Çeşme, İzmir", port: "Kaya Limanı", description: "2020 Yılında en çok tekne kiralanan 1. liman oldu.", image: FirstPort },
    { order: 2, location: "Manavgat, Antalya", port: "Irmak Limanı", description: "2020 Yılında en çok tekne kiralanan 2. liman oldu.", image: SecondPort },
    { order: 3, location: "San Francisco, ABD", port: "SK Limanı", description: "2020 Yılında en çok tekne kiralanan 3. liman oldu.", image: ThirdPort }
]
export default function MobilePortCard({ data = fakeData }) {
    const [count, setCount] = useState(1)
    return (
        <div className="port-cards-container">
            <RenderMobileCard count={count} data={data} />
        </div>
    )


}

function RenderMobileCard({ count, data }) {
    const Data = data
    // const Data = data.sort((a, b) => { return a.order - b.order })
    Data[0] = Data.filter(item => item.order === 2)
    Data[1] = Data.filter(item => item.order === 1)
    Data[2] = Data.filter(item => item.order === 3)
    console.log(Data)
    switch (count) {
        case 1:
            return (
                <div className="first-port flex-dir-col">

                    {/* port filter */}

                    <div className="port-image-filter" />

                    {/* port image */}

                    <div className="port-image"><img src={FirstPort} /></div>

                    {/* port order */}

                    <div className="port-order ml-1 mb-1">#{Data[0].order}</div>

                    {/* port location */}
                    <div className="post-location flex-center ml-1"><CardPortLocation className="port-location-img" />{Data[0].location}</div>

                    {/* port name */}

                    <div className="port-name ml-1">{Data[0].port}</div>

                    {/* port description */}

                    <div className="port-description ml-1 mb-1">{Data[0].description}</div>

                </div>
            )

        case 2:
            return (

                <div className="other-ports flex-dir-col">

                    {/* port filter */}

                    <div className="port-image-filter" />

                    {/* port image */}

                    <div className="port-image"><img src={SecondPort} /></div>

                    {/* port order */}

                    <div className="port-order ml-1 mb-1">#{Data[1].order}</div>

                    {/* port location */}

                    <div className="port-location flex-center ml-1"><CardPortLocation className="port-location-img" />{Data[1].location}</div>

                    {/* port name */}

                    <div className="port-name ml-1">{Data[1].port}</div>

                    {/* port description */}

                    <div className="port-description ml-1 mb-1">{Data[1].description}</div>

                </div>
            )
        case 3:
            return (
                <div className="other-ports flex-dir-col">

                    {/* port filter */}

                    <div className="port-image-filter" />

                    {/* port image */}

                    <div className="port-image"><img src={ThirdPort} /></div>

                    {/* port order */}

                    <div className="port-order ml-1 mb-1">#{Data[2].order}</div>

                    {/* port location */}

                    <div className="post-location flex-center ml-1 "><CardPortLocation className="port-location-img" />{Data[2].location}</div>

                    {/* port name */}

                    <div className="port-name ml-1 ">{Data[2].port}</div>

                    {/* port description */}

                    <div className="port-description ml-1 mb-1">{Data[2].description}</div>

                </div>
            )
        default:
            return (<div>HATALI</div>)
    }


}