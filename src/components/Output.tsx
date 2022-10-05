import '../css/output.css'
import { OutputType } from '../types/Props';
import TableRows from './output/TableRows';
import TotalPrice from './output/TotalPrice';

const RightSide = ({ receipt, price }: OutputType) => {

    return (
        <section className="right">
            <div className='container-xl receipt d-flex column mt-16 al-center'>
                <div className='top-card-receipt d-flex jc-center column'>
                    <h2>{receipt.server.model}</h2>
                    <span>{receipt.server.brand}</span>
                </div>
                <div className='mt-16 middle-card-receipt d-flex jc-center column'>
                    <h4>Resumo</h4>
                    <table className="receipt-review">
                        <TableRows receipt={receipt} />
                    </table>
                </div>
                <TotalPrice price={price}/>
            </div>
        </section>
    )
}

export default RightSide;