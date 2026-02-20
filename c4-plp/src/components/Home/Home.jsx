import "./Home.css"

import { useEffect } from "react"

export default function Home() {

    useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show")
                }
            })
        })

        const hiddenEls = document.querySelectorAll('.hidden')
        hiddenEls.forEach((el) => observer.observe(el))
    }, [])

    return (
    <section id="homePage">
        <div className="box">
                <div className="hidden">
                    <div className="light">
                        <h1>Hello, Shopper!</h1>
                        <p>All the stuff you need is here!</p>
                        <button className="shop-now">Shop Now</button>
                    </div>
                </div>
        </div>
    </section>
    )
}