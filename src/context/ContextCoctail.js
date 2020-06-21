import React, { createContext, useState, useEffect } from 'react';

export const ContextCoctail = createContext();

export const CoctailProvider = props => {
    const [coctails, setCoctails] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("mar");

    useEffect(() => {
        setLoading(true);
        async function getDrinks() {
            try {
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
                const data = await response.json();
                const { drinks } = data;
                if (drinks) {
                    const newCoctails = drinks.map(item => {
                        const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
                        return {
                            id: idDrink,
                            name: strDrink,
                            image: strDrinkThumb,
                            info: strAlcoholic,
                            glass: strGlass
                        }
                    })
                    setCoctails(newCoctails);
                }
                else {
                    setCoctails([]);
                }
            }
            catch (error) {
                console.log(error)
            }
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
        getDrinks();
    }, [searchTerm])

    const contextValues = {
        coctails, setCoctails, loading, setLoading,
        searchTerm, setSearchTerm
    }

    return (
        <>
            <ContextCoctail.Provider value={contextValues}>
                {props.children}
            </ContextCoctail.Provider>
        </>
    )

}



