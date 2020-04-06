import React, { useState } from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [instaOn, setInsta] = useState(false)


    return(
        <Context.Provider value={{ instaOn, setInsta }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }