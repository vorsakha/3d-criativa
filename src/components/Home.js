import React, { useState, useContext, useEffect } from "react"
import { Spring, config } from 'react-spring/renderprops'

import { Context } from "../Context"

var randomColor = require('randomcolor')

export default function Home() {
    const [rColor, setColor] = useState('rgb(70, 150, 148)')

    const { setInsta } = useContext(Context)

    const handleColor = () => {
        setColor( randomColor({ hue: 'green' }) )
    }

    useEffect(() => {
        setInsta(false)
    }, [setInsta])

    return(
        <Spring
        from={{ opacity: 0, marginTop: -50 }}
        to={{ opacity: 1, marginTop: 0 }}
        config={config.stiff}
        >{props => (
            <div style={props}>
                <div id="home-container">
                    <div className="home-title">
                        <h1 
                        onClick={handleColor}  
                        style={{ backgroundColor: rColor }}
                        >3D Criativa</h1><br />
                        <p>Trabalhamos com impressões 3D para o mundo gamer e nerd de São Paulo e todo o Brasil</p>
                    </div>
                    <div className="img-gradient">
                        <div className="home-image"></div>
                    </div>
                </div>
            </div>
        )}
        </Spring>
        
    )
}