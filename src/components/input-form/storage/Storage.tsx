import { useState } from "react"
import { SelectDisk, SelectStorageType, StorageAddType, StorageType } from "../../../types/Props";

const StorageTypeUi = ({ type, setActive, active }: StorageType) => {

    let typeString: string = "";

    switch (type) {
        case 1:
            typeString = "HD SATA";
            break;
        case 2:
            typeString = "HD SAS";
            break;
        case 3:
            typeString = "SSD";
            break;
    }

    const handleClick = () => {
        setActive(type);
    }

    function handleActive() {
        return active == type ? true : false;
    }

    const response = handleActive();

    return (
        <>
            <div className={'select-style input-style d-flex mt-16 al-center' + (response == true ? ' radio-selected-div' : '')} onClick={handleClick}>
                <div className={"radio" + (response == true ? ' radio-selected' : '')}>
                    <div className="inside-radio"></div>
                </div>
                <span className='ml-10 fz-13'>{typeString}</span>
            </div>
        </>
    );

}

export const StorageTypeSelect = ({ setCurrentDiskType }: SelectStorageType) => {

    let [active, setActive] = useState(0);

    setCurrentDiskType(active);

    return (
        <div className='mt-16'>
            <StorageTypeUi setActive={setActive} active={active} type={1} />
            <StorageTypeUi setActive={setActive} active={active} type={2} />
            <StorageTypeUi setActive={setActive} active={active} type={3} />
        </div>
    );

}

export const StorageSelect = ({ disks, currentDiskType, setCurrentDisk }: SelectDisk) => {

    let [selected, setSelected] = useState('');

    if (selected == '') {
        setSelected('Selecione um Tipo de Armazenamento');
    }

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let model = e.target.value;
        setSelected(model);
        if (model != 'Selecione um Tipo de Armazenamento') {
            setCurrentDisk({ model: model, type: 0 });
        } else {
            setCurrentDisk({ model: '', type: 0 });
        }
    }

    return (
        <select className='select-style input-style mt-8' id="storage" name="storage" value={selected} onChange={handleSelect}>
            {
                currentDiskType != 0 ? (<option value={''} hidden>Selecione um Disco</option>) : (<></>)
            }
            {
                disks.map((item, index) => (
                    <>
                        {
                            currentDiskType == item.type ? (<option key={index}>{item.model}</option>) :
                                (<option disabled hidden></option>)
                        }

                    </>
                ))
            }
            {
                currentDiskType == 0 ? (<option value={''}>Selecione um Tipo de Armazenamento</option>) : (<></>)
            }
        </select>
    )

}

export const StorageAdd = ({ setDiskAmount, setAddTableRow }: StorageAddType) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            let input = parseInt(e.target.value)
            setDiskAmount(input);
        }
    }

    const handleClick = () => {
        setAddTableRow(true);
    }

    return (
        <div className='d-flex al-center'>
            <input className='select-style input-style mt-8 disk-amount' onChange={handleChange} type="number" />
            <button className='storage-add' onClick={handleClick}>+</button>
        </div>
    )

}