import '../css/output.css'

const RightSide = () => {

    let price: number = 3000;
    let receipt: string = "Dell R410";

    return (
        <section className="right">
            <div className='container-xl receipt d-flex column mt-16 al-center'>
                <div className='top-card-receipt d-flex jc-center column'>
                    <h2>{receipt}</h2>
                    <span>PowerEdge</span>
                </div>
                <div className='mt-16 middle-card-receipt d-flex jc-center column'>
                    <h4>Resumo</h4>
                    <table className="receipt-review">
                        <tr className='table-row-r'>
                            <td className='row-amount'>1x</td>
                            <td className='row-product'>R410</td>
                            <td className='row-price'>R$1000</td>
                        </tr>
                        <tr className='table-row-r'>
                            <td className='row-amount'>3x</td>
                            <td className='row-product'>Sas 300GB</td>
                            <td className='row-price'>R$600</td>
                        </tr>
                        <tr className='table-row-r'>
                            <td className='row-amount'>1x</td>
                            <td className='row-product'>64GB</td>
                            <td className='row-price'>R$600</td>
                        </tr>
                    </table>
                </div>
                <span className='mt-16 span-price'>Preço: R${price}</span>
            </div>
        </section>
    )
}

export default RightSide;