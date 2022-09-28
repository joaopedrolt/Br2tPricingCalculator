import { useState } from "react"
import { SelectDisk, SelectStorageType, StorageType } from "../../types/Server";


export const StorageTypeUi = ({ type, setActive, active }: StorageType) => {

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

    let response = handleActive();

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

export const StorageSelect = ({ disks, currentDiskType }: SelectDisk) => {

    return (
        <select className='select-style input-style mt-8' id="storage" name="storage">
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
                currentDiskType == 0 ? (<option>Selecione um Tipo de Armazenamento</option>) : (<></>)
            }
        </select>
    )

}