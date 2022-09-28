import '../css/inputform.css'
import * as Select from './input-form/Select'
import * as Storage from './input-form/Storage'
import { Server, Cpu, Disk, Row } from '../types/Objects';
import { useState } from 'react';
import { TableReceipt } from './input-form/Table';

const LeftSide = () => {

    const serverList: Server[] = [
        { model: 'R410', memory: 128, cpuFamily: ['5500', '5600'] },
        { model: 'R730', memory: 64, cpuFamily: ['E5-2600 V3'] },
        { model: 'R510', memory: 32, cpuFamily: ['E5-2600'] },
        { model: 'R610', memory: 16, cpuFamily: ['5500', '5600'] }];

    const cpuList: Cpu[] = [
        { series: ['5500', '5600']/* , cpus: []  */ },
        { series: ['5600']/* , cpus: []  */ },
        { series: ['E5-2600 V3']/* , cpus: []  */ },
        { series: ['E5-2600']/* , cpus: []  */ },
        { series: ['5500']/* , cpus: []  */ },
    ]

    const diskList: Disk[] = [
        { model: 'SSD 300GB', type: 3 },
        { model: 'HD 300GB', type: 1 },
        { model: 'HD 600GB', type: 2 },
        { model: 'SSD 1600GB', type: 3 },
        { model: 'HD 900GB', type: 2 }
    ]

    let [selectedModel, setModel] = useState('');
    let [currentDiskType, setCurrentDiskType] = useState(0);

    let [currentDisk, setCurrentDisk] = useState<Disk>({ model: '', type: 0 });
    let [diskAmount, setDiskAmount] = useState(0);
    let [addTableRow, setAddTableRow] = useState(false);

    let [rows, setRows] = useState<Row[]>([])

    return (
        <section className='input-form'>
            <h1 className='title'>Configuração do Servidor</h1>
            <div className='input-field mt-20'>
                <div className="server-row input-frame">
                    <h3>Server</h3>
                    <Select.SelectServer servers={serverList} selectedModel={selectedModel} setModel={setModel} />
                </div>
                <div className="ram-row input-frame mt-30">
                    <h3>Memória</h3>
                    <Select.SelectMemory servers={serverList} selectedModel={selectedModel} />
                </div>
                <div className="cpu-row input-frame mt-30">
                    <h3>Cpu</h3>
                    <Select.SelectCpu servers={serverList} selectedModel={selectedModel} />
                </div>
                <div className="storage-row vw-95 container-xl mt-30">
                    <h3>Armazenamento</h3>
                    <p className='tips'>- Adicione os discos, respeitando o limite disponível.</p>
                    <div>
                        <div className='mt-16'>
                            <h4>Tipo</h4>
                            <Storage.StorageTypeSelect setCurrentDiskType={setCurrentDiskType} />
                            <div className='d-flex mt-16'>
                                <div className='storage-left'>
                                    <h4>Tamanho</h4>
                                    <Storage.StorageSelect disks={diskList} currentDiskType={currentDiskType}
                                        setCurrentDisk={setCurrentDisk} />
                                </div>
                                <div className='storage-right'>
                                    <h4 className='translate-h4'>Quantidade</h4>
                                    <Storage.StorageAdd setDiskAmount={setDiskAmount} setAddTableRow={setAddTableRow} />
                                </div>
                            </div>
                            <TableReceipt disk={currentDisk} amount={diskAmount} addTableRow={addTableRow} setAddTableRow={setAddTableRow} rows={rows} setRows={setRows} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LeftSide;