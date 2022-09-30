import '../css/inputform.css'
import SelectField from './input-form/select/SelectField';
import StorageField from './input-form/storage/StorageField';
import { Server, Cpu, Disk } from '../types/Objects';

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

    return (
        <section className='input-form'>
            <h1 className='title'>Configuração do Servidor</h1>
            <div className='input-field mt-20'>
                <SelectField servers={serverList}/>
                <div className="storage-row vw-95 container-xl mt-30">
                    <StorageField  disks={diskList}/>
                </div>
            </div>
        </section>
    )
}

export default LeftSide;