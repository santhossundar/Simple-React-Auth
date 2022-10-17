import { createContext, useState } from 'react'

const SampleContext = createContext(null)

export const SampleProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return(
        <SampleContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
            {children}
        </SampleContext.Provider>
    )
}

export default SampleContext