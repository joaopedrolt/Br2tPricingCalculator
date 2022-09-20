import '../css/left.css'

const LeftSide = () => {
    return (
        <section className='left'>
            <h1 className='title'>Configuração do Servidor</h1>
            <div className='input-field mt-20'>
                <div className="server-row input-frame">
                    <h3>Server</h3>
                    <select className='mt-16' id="server" name="server">
                        <option value="r410" selected>R410</option>
                        <option value="r610">R610</option>
                        <option value="r710">R710</option>
                    </select>
                </div>
                <div className="ram-row input-frame mt-30">
                    <h3>Memória</h3>
                    <select className='mt-16' id="ram" name="ram">
                        <option value="8">8</option>
                        <option value="16">16</option>
                        <option value="32" selected>32</option>
                        <option value="64">64</option>
                        <option value="64">128</option>
                    </select>
                </div>
                <div className="storage-row input-frame mt-30">
                    <h3>Armazenamento</h3>
                    <div className='mt-16'>
                        <h4>Tipo</h4>
                        <select id="type" name="type">
                            <option value="hd">HD</option>
                            <option value="ssd">SSD</option>
                        </select>
                        <h4>Tamanho</h4>
                        <select id="storage" name="storage">
                            <option value="8">8</option>
                            <option value="16">16</option>
                            <option value="32" selected>300</option>
                            <option value="64">64</option>
                            <option value="64">300</option>
                        </select>
                        <h4>Quantidade</h4>
                        <input type="number" />
                        <button>+</button>
                        <table className="storage-cart">
                            <tr>
                                <th>Tipo</th>
                                <th>Armazenamento</th>
                                <th>Quantidade</th>
                            </tr>
                            <tr>
                                <td>HD</td>
                                <td>300Gb</td>
                                <td>3x</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LeftSide;