import React from "react"
import HeaderPNG from "../../assets/images/header1.png"
import Logo from "../../assets/images/logo.png"
export default function Home() {
    return (
        <div className="container">
            <header>
                <div className="header-img-filter"/>
                <div className="header-img"> <img src={HeaderPNG} /></div>
                <div className="logo"> <img width="130" src={Logo}/></div>
            </header>
            <main>
                <div className="fit">Alperen</div>
            </main>
            <footer>

            </footer>
        </div>
    )
}