import { TotalPriceType } from "../../types/Props";

const TotalPrice = ({ price }: TotalPriceType) => {
    return (
        <span className='mt-16 span-price'>Preço: R$ {price}</span>
    )
}

export default TotalPrice;