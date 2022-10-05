import { useState } from "react";

const TotalPrice = () => {

    let [price, setPrice] = useState('');
    
    return (
        <span className='mt-16 span-price'>Preço: R$ 0000,00</span>
    )

}

export default TotalPrice;