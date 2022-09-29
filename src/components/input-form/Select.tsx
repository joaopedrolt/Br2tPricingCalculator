import { useEffect, useState } from "react";
import { MemorySelect, ServerSelect, CpuSelect } from "../../types/Props";

export const SelectServer = ({ servers, selectedModel, setModel }: ServerSelect) => {

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setModel(e.target.value);
    }

    return (
        <select className='mt-16 select-style input-style vw-95' value={selectedModel} onChange={handleSelect} id="server" name="server">
            <option hidden>Selecione um Servidor</option>
            {
                servers.length > 0 ? (
                    servers.map((item, index) => (
                        <option key={index} value={item.model}>{item.model}</option>
                    ))
                ) : (<option>Carregando Servidores</option>)
            }
        </select>
    );
}

export const SelectMemory = ({ servers, selectedModel }: MemorySelect) => {

    let currentMemoryLimit: number = 0;

    const memoryRange: number[] = [2, 4, 8, 16, 32, 64, 128, 256, 512];

    let [filteredMemoryRange, setMemoryRange] = useState([0]);

    useEffect(() => {

        servers.forEach((serverObj) => {
            if (serverObj.model == selectedModel) {
                currentMemoryLimit = serverObj.memory;
            }
        })

        const filterMemoryRange = memoryRange.filter((size) => size <= currentMemoryLimit);
        setMemoryRange(filterMemoryRange);

    }, [selectedModel]);

    return (
        <select className='mt-16 select-style input-style vw-95' id="server" name="server">
            {
                filteredMemoryRange.length > 0 ? (
                    filteredMemoryRange.map((item, index) => (
                        <option key={index}>{item} GB</option>
                    ))
                ) : (<option>Selecione um Servidor</option>)
            }
        </select>
    );
}

export const SelectCpu = ({ servers, selectedModel }: CpuSelect) => {

    let currentCpuFamily: string[];

    let [cpuFamily, setCpuFamily] = useState<string[]>(['']);

    useEffect(() => {

        servers.forEach((serverObj) => {
            if (serverObj.model == selectedModel) {
                currentCpuFamily = serverObj.cpuFamily;
            }
        })

        /* console.log(currentCpuFamily) */

        setCpuFamily(typeof currentCpuFamily != undefined ? currentCpuFamily : ['']);

        /* console.log(cpuFamily); */

    }, [selectedModel]);

    return (
        <select className='mt-16 select-style input-style vw-95' id="cpu" name="cpu">
            {
                typeof cpuFamily != 'undefined' ? (
                    cpuFamily.map((item, index) => (
                        <option key={index}>{item}</option>
                    ))
                ) : <option>Selecione um Servidor</option>
            }
        </select >
    );
}