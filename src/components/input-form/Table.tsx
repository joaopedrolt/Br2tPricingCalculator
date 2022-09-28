import { XSvg } from "../../assets/svg/X-Svg"; 

export const TableReceipt = () => {


    return (
        <table className="storage-cart mt-16">
            <tr className='table-header'>
                <th>Tipo</th>
                <th>Armazenamento</th>
                <th className='remove'>Remover</th>
            </tr>
            <tr className='table-row'>
                <td>SAS HD</td>
                <td>300GB</td>
                <td><XSvg /></td>
            </tr>
            <tr className='table-row'>
                <td>SAS HD</td>
                <td>300GB</td>
                <td><XSvg /></td>
            </tr>
            <tr className='table-row'>
                <td>SAS HD</td>
                <td>300GB</td>
                <td><XSvg /></td>
            </tr>
        </table>
    );


}