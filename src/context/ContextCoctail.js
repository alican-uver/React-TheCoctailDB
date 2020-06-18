import React, { createContext, useState } from 'react';

export const ContextCoctail = createContext();

export const CoctailProvider = props => {
    const [coctail, setCoctail] = useState(['margarita', 'sex on the beach']);

    const contextValues = {
        coctail, setCoctail
    }

    return (
        <>
            <ContextCoctail.Provider value = {contextValues}>
                {props.children}
            </ContextCoctail.Provider>
        </>
    )

}



