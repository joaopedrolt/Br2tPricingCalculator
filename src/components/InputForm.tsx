import '../css/inputform.css'
import { XSvg } from '../assets/svg/X-Svg';

const LeftSide = () => {
    return (
        <section className='input-form'>
            <h1 className='title'>Configuração do Servidor</h1>
            <div className='input-field mt-20'>
                <div className="server-row input-frame">
                    <h3>Server</h3>
                    <select className='mt-16 select-style input-style vw-95' id="server" name="server">
                        <option value="r410" selected>R410</option>
                        <option value="r610">R610</option>
                        <option value="r710">R710</option>
                    </select>
                </div>
                <div className="ram-row input-frame mt-30">
                    <h3>Memória</h3>
                    <select className='mt-16 select-style input-style vw-95' id="ram" name="ram">
                        <option value="8">8 GB</option>
                        <option value="16">16 GB</option>
                        <option value="32" selected>32 GB</option>
                        <option value="64">64 GB</option>
                        <option value="64">128 GB</option>
                    </select>
                </div>
                <div className="cpu-row input-frame mt-30">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                    <h3>Cpu</h3>
                    <select className='mt-16 select-style input-style vw-95' id="cpu" name="cpu">
                        <option value="8">E5-2650</option>
                        <option value="16">E5-2650 V2</option>
                        <option value="32" selected>E5-2620</option>
                    </select>
                </div>
                <div className="storage-row vw-95 container-xl mt-30">
                    <h3>Armazenamento</h3>
                    <p className='tips'>- Adicione os discos, respeitando o limite disponível.</p>
                    <div>
                        <div className='mt-16'>
                            <h4>Tipo</h4>
                            <div className='mt-16'>
                                <div className='select-style input-style d-flex al-center'>
                                    <input className='m-0' type="radio" name="type" value="hd" />
                                    <span className='ml-10 fz-13'>HD SATA</span>
                                </div>
                                <div className='select-style input-style mt-16 d-flex al-center'>
                                    <input className='m-0' type="radio" name="type" value="ssd" />
                                    <span className='ml-10 fz-13'>HD SAS</span>
                                </div>
                                <div className='select-style input-style mt-16 d-flex al-center'>
                                    <input className='m-0' type="radio" name="type" value="ssd" />
                                    <span className='ml-10 fz-13'>SSD</span>
                                </div>
                            </div>
                            <div className='d-flex mt-16'>
                                <div className='storage-left'>
                                    <h4>Tamanho</h4>
                                    <select className='select-style input-style mt-8' id="storage" name="storage">
                                        <option value="8">8</option>
                                        <option value="16">16</option>
                                        <option value="32" selected>SAS 300GB</option>
                                        <option value="64">64</option>
                                        <option value="64">300</option>
                                    </select>
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