import { useState } from 'react';
import * as Select from './Select';
import { SelectFieldType } from "../../../types/Props";

const SelectField = ({ servers }: SelectFieldType) => {

    let [selectedModel, setModel] = useState('');

    return (
        <>
            <div className="server-row input-frame">
                <h3>Server</h3>
                <Select.SelectServer servers={servers} selectedModel={selectedModel} setModel={setModel} />
            </div>
            <div className="ram-row input-frame mt-30">
                <h3>Memória</h3>
                <Select.SelectMemory servers={servers} selectedModel={selectedModel} />
            </div>
            <div className="cpu-row input-frame mt-30">
                <h3>Cpu</h3>
                <Select.SelectCpu servers={servers} selectedModel={selectedModel} />
            </div>
        </>
    )

}

export default SelectField;