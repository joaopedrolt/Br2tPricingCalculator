import { Server, Disk, Row, Receipt, OutputServer, OutputCpu, OutputMemory, OutputStorage } from './Objects'

export type SelectFieldType = {
    servers: Server[],
    setCurrentServer: React.Dispatch<React.SetStateAction<OutputServer>>,
    setCurrentCpu: React.Dispatch<React.SetStateAction<OutputCpu>>,
    setCurrentMemory: React.Dispatch<React.SetStateAction<OutputMemory>>
}

export type StorageFieldType = {
    disks: Disk[],
    setCurrentStorage: React.Dispatch<React.SetStateAction<OutputStorage[]>>,
    currentStorage: OutputStorage[]
}

export type ServerSelect = {
    setModel: React.Dispatch<React.SetStateAction<string>>,
    servers: Server[],
    selectedModel: string,
    setCurrentServer: React.Dispatch<React.SetStateAction<OutputServer>>
}

export type MemorySelect = {
    servers: Server[],
    selectedModel: string,
    setCurrentMemory: React.Dispatch<React.SetStateAction<OutputMemory>>
}

export type CpuSelect = {
    servers: Server[],
    selectedModel: string,
    setCurrentCpu: React.Dispatch<React.SetStateAction<OutputCpu>>,
}

export type StorageType = {
    type: number,
    setActive: React.Dispatch<React.SetStateAction<number>>,
    active: number
}

export type SelectStorageType = {
    setCurrentDiskType: React.Dispatch<React.SetStateAction<number>>,
    added: boolean,
    setAdded: React.Dispatch<React.SetStateAction<boolean>>
}

export type SelectDisk = {
    disks: Disk[],
    currentDiskType: number,
    setCurrentDisk: React.Dispatch<React.SetStateAction<Disk>>,
    added: boolean,
    setAdded: React.Dispatch<React.SetStateAction<boolean>>,
    setCurrentDiskType: React.Dispatch<React.SetStateAction<number>>
}

export type StorageAddType = {
    setDiskAmount: React.Dispatch<React.SetStateAction<number>>,
    setAddTableRow: React.Dispatch<React.SetStateAction<boolean>>
}

export type TableReceiptRow = {
    disk: Disk,
    amount: number,
    addTableRow: boolean,
    setAddTableRow: React.Dispatch<React.SetStateAction<boolean>>,
    setRows: React.Dispatch<React.SetStateAction<Row[]>>,
    rows: Row[],
    setAdded: React.Dispatch<React.SetStateAction<boolean>>,
    setCurrentStorage: React.Dispatch<React.SetStateAction<OutputStorage[]>>,
    currentStorage: OutputStorage[]
}

export type OutputType = {
    receipt: Receipt,
    price: number
}

export type InputFormType = {
    setReceipt: React.Dispatch<React.SetStateAction<Receipt>>,
    setPrice: React.Dispatch<React.SetStateAction<number>>
}

export type TotalPriceType = {
    price: number
}

export type TableRowsType = {
    receipt: Receipt
}