import React, { useState } from "react"
import Phone from "../../assets/svg/phone.svg"
export default function Part4() {
    const [value, setValue] = useState("")
    function onSubmit() {
        alert("çalışıpr")
    }
    return (
        <div className="part4 flex-center flex-dir-col">
            <div className="contact-title"> <h1>Yüzdün yüzdün kuyruğuna geldin.</h1> </div>
            <div className="contact-paragraph"><p>Sana ulaşabilmemiz için alta bir numara bırak.</p></div>
            <div className="contact-phone-input"><img src={Phone} />
                <input placeholder="+90" pattern="[A-Za-z]{3}" value={value} onChange={(e) => setValue(e.target.value)} />
                <div onClick={() => onSubmit()} className="contact-form-submit flex-center">
                    Gönder
                </div>
            </div>

        </div>
    )
}