import React from "react"
import Home from "./home/home"
import Part2 from "./part2/part2"
import Part3 from "./part3/part3"
import Part4 from "./part4/part4"

export default function Index() {
    return (
        <div className="container">
            <Home />
            <Part2 />
            <Part3 />
            <Part4 />
            <footer>

            </footer>
        </div>
    )
}