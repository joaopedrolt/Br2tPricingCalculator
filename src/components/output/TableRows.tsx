import { TableRowsType } from "../../types/Props";

const TableRows = ({ receipt }: TableRowsType) => {
    return (
        <>
            {receipt.server.model != 'Selecione um Servidor' ? (
                <tr className='table-row-r'>
                    <td className='row-amount'>{receipt.server.model == 'Selecione um Servidor' ? '---' : '1x'}</td>
                    <td className='row-product'>{receipt.server.model == 'Selecione um Servidor' ? '---' : receipt.server.model}</td>
                    <td className='row-price'>{receipt.server.price == 0 ? '---' : ('R$:' + receipt.server.price)}</td>
                </tr>) : (<></>)
            }
            {receipt.cpu.model != '' ? (
                <tr className='table-row-r'>
                    <td className='row-amount'>{receipt.cpu.model == '' ? '---' : (receipt.cpu.amount + 'x')}</td>
                    <td className='row-product'>{receipt.cpu.model == '' ? '---' : receipt.cpu.model}</td>
                    <td className='row-price'>{receipt.cpu.price == 0 ? '---' : ('R$:' + receipt.cpu.price)}</td>
                </tr>) : (<></>)
            }
            {receipt.memory.size != 0 ? (
                <tr className='table-row-r'>
                    <td className='row-amount'>{receipt.memory.size == 0 ? '---' : '1x'}</td>
                    <td className='row-product'>{receipt.memory.size == 0 ? '---' : (receipt.memory.size + 'GB')}</td>
                    <td className='row-price'>{receipt.memory.price == 0 ? '---' : ('R$:' + receipt.memory.price)}</td>
                </tr>) : (<></>)
            }
            {
                receipt.storage.map((item) => item.model != '' ? (
                    <tr className='table-row-r'>
                        <td className='row-amount'>{item.amount == 0 ? '---' : (item.amount + 'x')}</td>
                        <td className='row-product'>{item.model == '' ? '---' : item.model}</td>
                        <td className='row-price'>{item.price == 0 ? '---' : ('R$:' + item.price * item.amount)}</td>
                    </tr>
                ) : (<></>))
            }
        </>
    )
}

export default TableRows;