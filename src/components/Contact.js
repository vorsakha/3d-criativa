import React, { useEffect, useContext } from "react"
import { Spring, config } from 'react-spring/renderprops'

import { Context } from '../Context'


export default function Contact() {

    const { setInsta } = useContext(Context)

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
                <div className="container">
                    <h3>Contato</h3><br />
                    <form name="contact" id="form" method="POST" data-netlify="true" action="">
                        <input placeholder="Nome" type="text" id="fname" name="name" /><br />
                        
                        <input placeholder="Email" type="email" id="fname" name="email" /><br />

                        <input className="second-row" placeholder="Assunto" type="text" id="fname" name="fname" /><br />

                        <textarea placeholder="Mensagem" type="text" id="fname" name="fname" /><br />

                        <div data-netlify-recaptcha="true"></div>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        )}

        </Spring>
        
    )
}