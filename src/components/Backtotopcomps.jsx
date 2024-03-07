import React from "react"
import { useEffect, useState } from "react"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import '../css/back.css'

const Backtotopcomps = () => {
    const [backToTopButton, setBackToTopButton] = useState(false)

    useEffect(() =>{
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top : 0,
            behavior :"smooth"
        })
    }

    return(
        <section className="section-backToTopBtn"> 
            {backToTopButton && (
                <button style={{
                }}
                onClick={scrollUp              }
                ><i class="fa-solid fa-angle-up"></i></button>
            )}
        </section>
    )
}

export default Backtotopcomps;