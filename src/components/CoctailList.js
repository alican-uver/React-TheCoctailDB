import React, { useContext } from 'react';
import { ContextCoctail } from '../context/ContextCoctail';


const CoctailList = () => {
    const { loading } = useContext(ContextCoctail);

    return (
        <div>
            CoctailList.js
        </div>
    )
}

export default CoctailList
