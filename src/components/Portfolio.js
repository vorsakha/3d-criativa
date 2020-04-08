import React, { useEffect, useContext } from "react"
import { Spring, config } from 'react-spring/renderprops'

import SimpleSlider from "./slideshow.portfolio"
import { Context } from '../Context'

export default function Portfolio() {


    const { setInsta } = useContext(Context)

    useEffect(() => {
        setInsta(false)
    }, [setInsta])


    return(
        <Spring
        from={{ opacity: 0, marginTop: -50  }}
        to={{ opacity: 1, marginTop: 0  }}
        config={config.stiff}
        >{props => (
            <div style={props}>
                <div className="container">
                    <div>
                        <h3>Portfolio</h3>
                        <p>Somos a 3D Criativa! Aqui você encontra tudo em impressões 3D!
                        Fazemos impressões para o mundo gamer, nerd e geek!!
                        Confira!</p>
                    </div>
                    <SimpleSlider /> 
                </div>
            </div>
        )}
        </Spring>
    )
}