import { Server, Disk, Row } from './Objects'

export type ServerSelect = {
    setModel: React.Dispatch<React.SetStateAction<string>>;
    servers: Server[];
    selectedModel: string;
}

export type MemorySelect = {
    servers: Server[];
    selectedModel: string;
}

export type CpuSelect = {
    servers: Server[];
    selectedModel: string;
    /* cpuList: string[]; */
}

export type StorageType = {
    type: number;
    setActive: React.Dispatch<React.SetStateAction<number>>;
    active: number;
}

export type SelectStorageType = {
    setCurrentDiskType: React.Dispatch<React.SetStateAction<number>>;
}

export type SelectDisk = {
    disks: Disk[];
    currentDiskType: number;
    setCurrentDisk: React.Dispatch<React.SetStateAction<Disk>>;
}

export type StorageAddType = {
    setDiskAmount: React.Dispatch<React.SetStateAction<number>>;
    setAddTableRow: React.Dispatch<React.SetStateAction<boolean>>;
}

export type TableReceiptRow = {
    disk: Disk;
    amount: number;
    addTableRow: boolean;
    setAddTableRow: React.Dispatch<React.SetStateAction<boolean>>;
    setRows: React.Dispatch<React.SetStateAction<Row[]>>;
    rows: Row[];
}