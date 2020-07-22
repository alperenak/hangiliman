import React from "react"
import Phone from "../../assets/svg/phone.svg"
export default function Part4() {
    return (
        <div className="part4 flex-center flex-dir-col">
            <div className="contact-title"> <h1>Yüzdün yüzdün kuyruğuna geldin.</h1> </div>
            <div className="contact-paragraph"><p>Sana ulaşabilmemiz için alta bir numara bırak.</p></div>
            <div className="contact-phone-input"><img src={Phone} /><input /></div>
            <div>Gönder</div>
        </div>
    )
}