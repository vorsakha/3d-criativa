import React from "react"
import { NavLink } from "react-router-dom"
import { faHome, faFolder, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


// Contact page / netlify
export default function Navbar() {


    const home = <FontAwesomeIcon icon={faHome} />
    const portfolio = <FontAwesomeIcon icon={faFolder} />
    const contact = <FontAwesomeIcon icon={faEnvelope} />
    const instagram = <FontAwesomeIcon icon={faInstagram} />


    return (
        <nav>
            <ul>
                <li>
                    <NavLink
                    id="home"
                    title="Home"
                    style={{ color: 'rgba(0, 0, 0, 0.6)' }}
                    activeStyle={{ color: '#333' }}        
                    exact      
                    to="/"
                    >{home}
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    title="Portfolio"
                    to="/portfolio" 
                    style={{ color: 'rgba(0, 0, 0, 0.6)' }}
                    activeStyle={{ color: '#333' }}
                    >{portfolio}
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    title="Contato"
                    to="/contact" 
                    style={{ color: 'rgba(0, 0, 0, 0.6)' }}
                    activeStyle={{ color: '#333' }}
                    >{contact}
                    </NavLink>
                </li>
                <li>
                    <a  
                    title="Instagram"
                    id="socials" 
                    href="https://www.instagram.com/3d.criativa/" 
                    rel="noopener noreferrer"
                    target="_blank"
                    >{instagram}
                    </a>
                </li>
            </ul>
        </nav>
    )
}