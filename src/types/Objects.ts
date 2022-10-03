export type Server = {
    model: string,
    brand: string,
    memory: number,
    cpuFamily: string[],
    price: number
}

export type Cpu = {
    series: string[],
    price: number
}

export type Disk = {
    model: string,
    type: number,
    price: number
}

export type Row = {
    id: number,
    disk: Disk,
    amount: number
}

export type OutputServer = {
    model: string,
    brand: string,
    price: number
}

export type OutputCpu = {
    model: string,
    price: number,
    amount: number
}

export type OutputMemory = {
    size: number,
    price: number
}

export type OutputStorage = {
    id: number,
    model: string,
    price: number,
    amount: number
}

export type Receipt = {
    server: OutputServer,
    cpu: OutputCpu,
    memory: OutputMemory,
    storage: OutputStorage[]
}