import React from "react";

export default function FooterTitle({ title, subtitles }) {
    return (
        <div className="footer-titles-card flex-center flex-dir-col">
            <div className="footer-titles">{title}</div>
            {
                subtitles.map((item, index) => {
                    return <div className="footer-subtitles" key={index}>{item}</div>
                })

            }
        </div >
    )
}