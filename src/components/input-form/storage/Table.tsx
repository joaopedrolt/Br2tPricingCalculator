import { XSvg } from "../../../assets/svg/X-Svg";
import { OutputStorage, Row } from "../../../types/Objects";
import { TableReceiptRow } from "../../../types/Props";

export const TableReceipt = ({ disk, amount, addTableRow, setAddTableRow, setRows, rows, setAdded, setCurrentStorage, currentStorage }: TableReceiptRow) => {

    const activeRows = rows;
    let id = activeRows.length;
    const newRow: Row = { id, disk, amount };

    let idDisk = currentStorage.length;
    const receiptDisks = currentStorage;
    const newDisk: OutputStorage = { id: idDisk, model: disk.model, amount, price: disk.price };

    function receiptUpdate(receiptStorage: OutputStorage[], newDisk: OutputStorage) {
        const newArray = [...receiptStorage, newDisk];
        return newArray.filter(disk => disk.model != '');
    }

    function rowsUpdate(activeRows: Row[], newRow: Row) {
        if (newRow.disk.model != '' && newRow.amount != 0) {
            const newArray = [...activeRows, newRow];
            setAdded(true);
            setCurrentStorage(receiptUpdate(receiptDisks, newDisk));
            return newArray.filter(row => row.disk.model != '');
        }
        return activeRows;
    }

    if (addTableRow) {
        setRows(rowsUpdate(activeRows, newRow));
        setAddTableRow(false);
    }

    const handleClick = (id: number) => {
        const newRows = rows.filter((item) => item.id !== id);
        const updateDisks = currentStorage.filter((item) => item.id !== id);
        setCurrentStorage(updateDisks);
        setRows(newRows);
    }

    return (
        <table className="storage-cart mt-16">
            <tr className='table-header'>
                <th>Quantidade</th>
                <th>Armazenamento</th>
                <th className='remove'>Remover</th>
            </tr>
            {
                rows.map((item) => (
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