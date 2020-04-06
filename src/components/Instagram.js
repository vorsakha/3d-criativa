import React, { useEffect, useContext } from "react"
import { Spring, config } from "react-spring/renderprops"

import { Context } from '../Context'


export default function Instagram() {

    const { setHome, setPort, setContact, setInsta } = useContext(Context)

    useEffect(() => {
        setHome(false)
        setPort(false)
        setContact(false)
        setInsta(true)
    }, [setHome, setPort, setContact, setInsta])

    return(
        <Spring
        from={{ opacity: 0, marginTop: -50 }}
        to={{ opacity: 1, marginTop: 0 }}
        config={config.stiff}
        >{props => (
            <div style={props}>
                <div><h3>Instagram imgs</h3></div>
            </div>
        )}
        </Spring>
    )
}