import { XSvg } from "../../assets/svg/X-Svg";
import { Row } from "../../types/Objects";
import { TableReceiptRow } from "../../types/Props";

export const TableReceipt = ({ disk, amount, addTableRow, setAddTableRow, setRows, rows }: TableReceiptRow) => {

    const activeRows = rows;
    const id = activeRows.length;
    const newRow: Row = { id, disk, amount };

    function rowsUpdate(activeRows: Row[], newRow: Row) {
        if (newRow.disk.model != '' || newRow.amount == 0) {
            const newArray = [...activeRows, newRow];
            return newArray.filter(row => row.disk.model != '');
        }
        return activeRows;
    }

    if (addTableRow) {
        setRows(rowsUpdate(activeRows, newRow));
        setAddTableRow(false);
    }

    const handleClick = (id: number) => {
        console.log(rows)
        const newRows = rows.filter((item) => item.id !== id);
        setRows(newRows);
        console.log(rows)
    }

    return (
        <table className="storage-cart mt-16">
            <tr className='table-header'>
                <th>Quantidade</th>
                <th>Armazenamento</th>
                <th className='remove'>Remover</th>
            </tr>
            {
                rows.map((item, index) => (
                    <tr className='table-row'>
                        <td>{item.amount}x</td>
                        <td>{item.disk.model}</td>
                        <td onClick={() => { handleClick(item.id) }}><XSvg /></td>
                    </tr>
                ))
            }
        </table>
    );
}