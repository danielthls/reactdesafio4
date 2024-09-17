import { createContext } from "react";

export type ContextProducttCountType = {
    contextProductCount: number;
    setContextProductCount: (contextProductCount: number) => void;
}

export const ContextProductCount = createContext<ContextProducttCountType>({
    contextProductCount: 0,
    setContextProductCount: () => { }
})