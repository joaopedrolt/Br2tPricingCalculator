export type Server = {
    model: string;
    memory: number;
    cpuFamily: string[];
    bays?: number;
}

export type Cpu = {
    series: string[];
    /* cpus: string[]; */
}

export type Disk = {
    model: string;
    type: number;
}

export type Row = {
    id: number;
    disk: Disk;
    amount: number;
}

export type Receipt = {
    
}