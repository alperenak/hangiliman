import React from "react"
import Home from "./home/home"
import Part2 from "./part2/part2"
import Part3 from "./part3/part3"
import Part4 from "./part4/part4"
import Footer from "./footer/footer"

export default function Index() {
    return (
        <div id="container" className="container">

            {/* Home rendered */}

            <Home />

            {/* Part 2 rendered */}

            <Part2 />

            {/* Part3 rendered */}

            <Part3 />

            {/* Part 4 rendered */}

            <Part4 />

            {/* Footer rendered */}

            <Footer />
        </div>
    )
}