import { useState } from 'react';
import * as Storage from './Storage';
import { TableReceipt } from './Table';
import { Row, Disk } from '../../../types/Objects';
import { StorageFieldType } from '../../../types/Props';

const StorageField = ({ disks, setCurrentStorage, currentStorage }: StorageFieldType) => {

    let [currentDiskType, setCurrentDiskType] = useState(0);

    let [currentDisk, setCurrentDisk] = useState<Disk>({ model: '', type: 0, price: 0 });
    let [diskAmount, setDiskAmount] = useState(0);
    let [addTableRow, setAddTableRow] = useState(false);

    let [rows, setRows] = useState<Row[]>([]);

    let [added, setAdded] = useState(false);

    return (
        <>
            <h3>Armazenamento</h3>
            <p className='tips'>- Adicione os discos, respeitando o limite disponível.</p>
            <div>
                <div className='mt-16'>
                    <h4>Tipo</h4>
                    <Storage.StorageTypeSelect setCurrentDiskType={setCurrentDiskType} added={added} setAdded={setAdded} />
                    <div className='d-flex mt-16'>
                        <div className='storage-left'>
                            <h4>Tamanho</h4>
                            <Storage.StorageSelect disks={disks} currentDiskType={currentDiskType} setCurrentDiskType={setCurrentDiskType}
                                setCurrentDisk={setCurrentDisk} added={added} setAdded={setAdded} />
                        </div>
                        <div className='storage-right'>
                            <h4 className='translate-h4'>Quantidade</h4>
                            <Storage.StorageAdd setDiskAmount={setDiskAmount} setAddTableRow={setAddTableRow} />
                        </div>
                    </div>
                    <TableReceipt disk={currentDisk} amount={diskAmount} addTableRow={addTableRow}
                        setAddTableRow={setAddTableRow} rows={rows} setRows={setRows}
                        setAdded={setAdded} setCurrentStorage={setCurrentStorage} currentStorage={currentStorage} />
                </div>
            </div>
        </>
    )

}

export default StorageField;