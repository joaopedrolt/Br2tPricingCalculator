import { useEffect, useState } from "react";
import { MemorySelect, ServerSelect, CpuSelect } from "../../../types/Props";

export const SelectServer = ({ servers, selectedModel, setModel, setCurrentServer }: ServerSelect) => {

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setModel(e.target.value);
        servers.forEach((serverObj) => {
            if (serverObj.model == e.target.value) {
                setCurrentServer({
                    model: serverObj.model,
                    brand: serverObj.brand,
                    price: serverObj.price
                });
            }
        })
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

export const SelectMemory = ({ servers, selectedModel, setCurrentMemory }: MemorySelect) => {

    let currentMemoryLimit: number = 0;

    const memoryRange: number[] = [2, 4, 8, 16, 32, 64, 128, 256, 512];

    let [filteredMemoryRange, setMemoryRange] = useState([0]);

    let [memoryValue, setValue] = useState('');

    let [justSelected, setSelected] = useState(false);

    useEffect(() => {

        servers.forEach((serverObj) => {
            if (serverObj.model == selectedModel) {
                currentMemoryLimit = serverObj.memory;
            }
        })

        if(selectedModel != ""){
            setSelected(true);
        } else {
            setSelected(false);
        }

        const filterMemoryRange = memoryRange.filter((size) => size <= currentMemoryLimit);
        setMemoryRange(filterMemoryRange);

    }, [selectedModel]);

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value);
        setCurrentMemory({
            size: parseInt(e.target.value),
            price: 10
        });
    }

    return (
        <select className='mt-16 select-style input-style vw-95' value={memoryValue} onChange={handleSelect} id="server" name="server">
            {
               justSelected ? (<option hidden selected value={0}>Selecione o Tamanho</option>) :
               (<></>)
            }
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

export const SelectCpu = ({ servers, selectedModel, setCurrentCpu }: CpuSelect) => {

    let currentCpuFamily: string[];

    let [cpuFamily, setCpuFamily] = useState<string[]>(['']);

    let [cpuValue, setValue] = useState('');

    let [justSelected, setSelected] = useState(false);

    useEffect(() => {

        servers.forEach((serverObj) => {
            if (serverObj.model == selectedModel) {
                currentCpuFamily = serverObj.cpuFamily;
            }
        })

        if(selectedModel != ""){
            setSelected(true);
        } else {
            setSelected(false);
        }

        setCpuFamily(typeof currentCpuFamily != undefined ? currentCpuFamily : ['']);

    }, [selectedModel]);

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value);
        setCurrentCpu({
            model: e.target.value,
            price: 100,
            amount: 2
        });
    }

    return (
        <select className='mt-16 select-style input-style vw-95' value={cpuValue} onChange={handleSelect} id="cpu" name="cpu">
            {
               justSelected ? (<option hidden selected value={0}>Selecione um Processador</option>) :
               (<></>)
            }
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