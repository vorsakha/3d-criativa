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
            <div className="container" style={props}>
                    <h3>Contato</h3>
                    <form name="contact" id="form" method="POST" action="/">
                        
                        <input placeholder="Nome" type="text" name="name" /><br />
                        
                        <input placeholder="Email" type="email" name="email" /><br />
                        
                        <input type="hidden" name="form-name" value="contact" />

                        <input className="second-row" placeholder="Assunto" type="text" name="subject" /><br />

                        <textarea placeholder="Mensagem" type="text" name="message" /><br />
                        
                        <div data-netlify-recaptcha="true"></div>
                        <button type="submit">Enviar</button>
                    </form>
            </div>
        )}

        </Spring>
        
    )
}