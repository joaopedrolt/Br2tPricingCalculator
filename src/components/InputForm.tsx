import '../css/inputform.css'
import SelectField from './input-form/select/SelectField';
import StorageField from './input-form/storage/StorageField';
import { Server, Disk, OutputServer, OutputMemory, OutputCpu, OutputStorage } from '../types/Objects';
import { InputFormType } from '../types/Props';
import { useEffect, useState } from 'react';

const LeftSide = ({ setReceipt }: InputFormType) => {

    const serverList: Server[] = [
        { brand: 'Dell', model: 'R410', memory: 128, cpuFamily: ['5500', '5600'], price: 2000 },
        { brand: 'Dell', model: 'R730', memory: 64, cpuFamily: ['E5-2600 V3'], price: 2000 },
        { brand: 'Dell', model: 'R510', memory: 32, cpuFamily: ['E5-2600'], price: 2000 },
        { brand: 'Dell', model: 'R610', memory: 16, cpuFamily: ['5500', '5600'], price: 2000 }];

    const diskList: Disk[] = [
        { model: 'SSD 300GB', type: 3, price: 300 },
        { model: 'HD 300GB', type: 1, price: 300 },
        { model: 'HD 600GB', type: 2, price: 300 },
        { model: 'SSD 1600GB', type: 3, price: 300 },
        { model: 'HD 900GB', type: 2, price: 300 }
    ]

    let [currentServer, setCurrentServer] = useState<OutputServer>({
        model: 'B',
        brand: '',
        price: 0
    });
    let [currentCpu, setCurrentCpu] = useState<OutputCpu>({
        model: '',
        price: 0,
        amount: 2
    });
    let [currentMemory, setCurrentMemory] = useState<OutputMemory>({
        size: 0,
        price: 0
    });
    
    let [currentStorage, setCurrentStorage] = useState<OutputStorage[]>([{
        model: '',
        price: 0,
        amount: 0
    }]);

    useEffect(() => {
        setReceipt({
            server: currentServer,
            cpu: currentCpu,
            memory: currentMemory,
            storage: currentStorage
        })
    }, [currentServer, currentCpu, currentMemory, currentStorage])

    return (
        <section className='input-form'>
            <h1 className='title'>Configuração do Servidor</h1>
            <div className='input-field mt-20'>
                <SelectField servers={serverList} setCurrentServer={setCurrentServer} setCurrentCpu={setCurrentCpu} setCurrentMemory={setCurrentMemory} />
                <div className="storage-row vw-95 container-xl mt-30">
                    <StorageField disks={diskList} />
                </div>
            </div>
        </section>
    )
}

export default LeftSide;