import React, { useEffect, useState } from 'react'


const calculateRange = (data: string | any[], rowsPerPage: number) => {
    const range = [];
    const num = Math.ceil(data.length / rowsPerPage);
    let i = 1;
    for (let i = 1; i <= num; i++) {
        range.push(i);
    }
    return range;
};



const sliceData = (data: string | any[], page: number, rowsPerPage: number):any => {
    return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};

type TableProp = {
    data: string | any[],
    page: number,
    rowsPerPage:number
}

const useTable = ({ data, page, rowsPerPage }: TableProp) => {
    const [tableRange, setTableRange] = useState<any[]>([]);
    const [slice, setSlice] = useState<any[]>([]);


    useEffect(() => {
      const range = calculateRange(data, rowsPerPage);
        setTableRange([...range]);

        const slice = sliceData(data, page, rowsPerPage);
        setSlice([...slice]);
    }, [data, setTableRange, page, setSlice])
    
    
    return { slice, range: tableRange };
}

export default useTable