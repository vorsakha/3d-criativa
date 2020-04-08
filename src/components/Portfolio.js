import React, { useState, useEffect, useContext } from "react"
import { Spring, config } from 'react-spring/renderprops'

import { BombaSlider } from "./slide.portfolio"
import { images } from "../img/img-data"
import { Context } from '../Context'

export default function Portfolio() {
    // const [dotArr, setDot] = useState([])


    const { setInsta } = useContext(Context)

    useEffect(() => {
        setInsta(false)
    }, [setInsta])

    
    // for(let i = 0; i < images.length; i++) {
    //     setDot(...dotArr, i)
    // }

    // const dot = dotArr.map((num) => (
    //     <div 
    //     className="dot" 
    //     id={num} 
    //     key={num} 
    //     style={imgIdx === num ? { backgroundColor: '#333' } : { backgroundColor: 'rgba(0, 0, 0, 0.4)' }} 
    //     />
    //   ))

    return(
        <Spring
        from={{ opacity: 0, marginTop: -50  }}
        to={{ opacity: 1, marginTop: 0  }}
        config={config.stiff}
        >{props => (
            <div className="container portfolio" style={props}>
                <div>
                    <h3>Portfolio</h3>
                    <p>Somos a 3D Criativa! Aqui você encontra tudo em impressões 3D!
                    Fazemos impressões para o mundo gamer, nerd e geek!!
                    Confira!</p>
                    <div className="touch" >Toque para passar as imagens</div>
                </div>
                <BombaSlider />
                {/* dot */}
            </div>
        )}
        </Spring>
    )
}