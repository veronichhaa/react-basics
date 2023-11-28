import {useMemo} from "react";
export const usePages = (totalPages, limit)=>{
    const pages = useMemo(()=>{
        let result = [];
        for(let i=1; i<=totalPages; i++){
            result.push(i);
        }
        return result;
        }, [totalPages, limit])
    return pages;
}