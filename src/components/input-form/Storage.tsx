import { useState } from "react"
import { StorageType } from "../../types/Server";


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

export const StorageTypeSelect = () => {

    let [active, setActive] = useState(0);

    return (
        <div className='mt-16'>
            <StorageTypeUi setActive={setActive} active={active} type={1} />
            <StorageTypeUi setActive={setActive} active={active} type={2} />
            <StorageTypeUi setActive={setActive} active={active} type={3} />
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