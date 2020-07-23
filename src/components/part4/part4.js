import React, { useState } from "react"
import Phone from "../../assets/svg/phone.svg"
export default function Part4() {
    const [value, setValue] = useState("")

    function onSubmit() {
        alert("its work")
    }

    return (
        <div className="part4 flex-center flex-dir-col">

            {/* Yüzdün yüzdün...  titles*/}

            <div className="contact-title"> <h1>Yüzdün yüzdün kuyruğuna geldin.</h1> </div>

            {/* Sana ulaşabilmemiz için... titles */}

            <div className="contact-paragraph"><p>Sana ulaşabilmemiz için alta bir numara bırak.</p></div>

            {/* Contact Form */}

            <div className="contact-phone-input">
                
                {/* Phone icon */}

                <img src={Phone} />

                {/* Input for Number */}

                <input placeholder="+90" pattern="[A-Za-z]{3}" value={value} onChange={(e) => setValue(e.target.value)} />

                {/* Submit button  */}

                <div onClick={() => onSubmit()} className="contact-form-submit flex-center">
                    Gönder
                </div>
                
            </div>

        </div>
    )
}