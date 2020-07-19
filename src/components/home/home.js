import React from "react"
import HeaderPNG from "../../assets/images/header1.png"
import Logo from "../../assets/images/logo.png"
import Anchor from "../../assets/svg/anchor.svg"
import SelectBoxesBar from "./header/selectboxes"
export default function Home() {
    return (
        <div className="container">
            <header>
                {/* filter */}

                <div className="header-img-filter" />

                {/* background */}

                <div className="header-img"> <img src={HeaderPNG} /></div>

                {/* logo */}

                <div className="logo"> <img width="200" src={Logo} /></div>

                {/* titles */}

                <div className="hero-title">
                    <h1>Eşsiz denizlere <a>hangiliman</a>'dan çıkacaksınız?</h1>
                    <p>Yat, tekne bizi bekle.</p>
                </div>
                <div className="listing-ships-container">

                    {/* select boxes */}

                    <div className="select-boxes">
                        <SelectBoxesBar type="location" />
                        <SelectBoxesBar type="rudder" />
                        <SelectBoxesBar type="calendar" />
                    </div>

                    {/* result button */}

                    <div className="result-button flex-center">
                        Sonuçları Listele
                    </div>


                </div>

                {/* anchor icon */}

                <div className="anchor-icon-div flex-center" >
                    <img src={Anchor} />
                </div>
            </header>
            <main>
                <div className="fit">Alperen</div>
            </main>
            <footer>

            </footer>
        </div>
    )
}