import { useEffect, useState } from "react";
import { MemorySelect, ServerSelect } from "../../types/Server";

export const SelectServer = ({ servers, selectedModel, setModel }: ServerSelect) => {

    let [firstUse, setFirstUse] = useState(false);

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setModel(e.target.value);
        setFirstUse(true);
    }

    return (
        <select className='mt-16 select-style input-style vw-95' value={selectedModel} onChange={handleSelect} id="server" name="server">

            {!firstUse &&
                <option hidden>Selecione um Servidor</option>
            }

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

        console.log('a')

        servers.forEach((serverObj) => {
            if (serverObj.model == selectedModel) {
                currentMemoryLimit = serverObj.memory;
            }
        })

        let filterMemoryRange = memoryRange.filter((size) => size <= currentMemoryLimit);
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

export const SelectCpu = () => {
    return (
        <select className='mt-16 select-style input-style vw-95' id="cpu" name="cpu">
            <option>Em Desenvolvimento</option>
        </select>
    );
}