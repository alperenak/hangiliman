import React from "react";

// title contains String subtitles contains Array

export default function FooterTitle({ title, subtitles }) {
    return (

        // footer titles card 

        <div className="footer-titles-card flex-center flex-dir-col">

        {/* footer titles map  */}

            <div className="footer-titles">{title}</div>
            {
                // subtitles Arrays mapping

                subtitles.map((item, index) => {
                    return <div className="footer-subtitles" key={index}>{item}</div>
                })

            }
        </div >
    )
}