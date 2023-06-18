import React,{createContext, PropsWithChildren, useState} from 'react';

type AppContextType = {
    isSpanish : boolean;
    setIsSpanish: (val : boolean) => void;
}

const AppContex = createContext({} as AppContextType);

export const AppContextProvider : React.FC<PropsWithChildren> = ({children}) =>{
    const [isSpanish, setIsSpanish] = useState<boolean>(true);


    return(<AppContex.Provider value={{isSpanish, setIsSpanish}}>
            {children}
        </AppContex.Provider>);
}

export default AppContex;