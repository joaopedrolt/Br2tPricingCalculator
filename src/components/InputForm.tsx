import '../css/inputform.css'
import * as Select from './input-form/Select'
import * as Storage from './input-form/Storage'
import { XSvg } from '../assets/svg/X-Svg';
import { Server, Cpu } from '../types/Server';
import { useState } from 'react';

const LeftSide = () => {

    const serverList: Server[] = [
        { model: 'R410', memory: 128, cpuFamily: ['5500', '5600'] },
        { model: 'R730', memory: 64, cpuFamily: ['E5-2600 V3'] },
        { model: 'R510', memory: 32, cpuFamily: ['E5-2600'] },
        { model: 'R610', memory: 16, cpuFamily: ['5500', '5600'] }];

    const cpuList: Cpu[] = [
        { series: ['5500', '5600']/* , cpus: []  */},
        { series: ['5600']/* , cpus: []  */},
        { series: ['E5-2600 V3']/* , cpus: []  */},
        { series: ['E5-2600']/* , cpus: []  */},
        { series: ['5500']/* , cpus: []  */},
    ]

    let [selectedModel, setModel] = useState('');

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
                            <Storage.StorageTypeSelect />
                            <div className='d-flex mt-16'>
                                <div className='storage-left'>
                                    <h4>Tamanho</h4>
                                    <Storage.StorageSelect />
                                </div>
                                <div className='storage-right'>
                                    <h4 className='translate-h4'>Quantidade</h4>
                                    <div className='d-flex al-center'>
                                        <input className='select-style input-style mt-8 disk-amount' type="number" />
                                        <button className='storage-add'>+</button>
                                    </div>
                                </div>
                            </div>
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LeftSide;