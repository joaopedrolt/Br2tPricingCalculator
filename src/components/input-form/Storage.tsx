import { useState } from "react"
import { StorageType } from "../../types/Server";


export const StorageTypeUi = ({ type }: StorageType) => {

    let typeString: string = "";

    let [selected, setSelected] = useState(false);

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
        setSelected;
    }

    return (
        <div className={'select-style input-style d-flex mt-16 al-center'} onClick={handleClick}>
            <div className={"radio"}>
                <div className="inside-radio"></div>
            </div>
            <span className='ml-10 fz-13'>{typeString}</span>
        </div>
    );

}

export const StorageTypeSelect = () => {

    let [diskType, setDiskType] = useState(0);

    return (
        <div className='mt-16'>
            <StorageTypeUi type={1} />
            <StorageTypeUi type={2} />
            <StorageTypeUi type={3} />
        </div>
    )

}

export const StorageSelect = () => {

    return (
        <select className='select-style input-style mt-8' id="storage" name="storage">
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="32" selected>SAS 300GB</option>
            <option value="64">64</option>
            <option value="64">300</option>
        </select>
    )

}