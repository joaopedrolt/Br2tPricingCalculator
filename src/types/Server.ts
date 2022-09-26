import React from "react";

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
}