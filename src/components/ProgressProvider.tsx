import React, { useEffect, useState } from 'react'


type ProgressProp = {
    valueStart: number,
    valueEnd: number,
    children: any
}
const ProgressProvider = ({valueStart,valueEnd,children}:ProgressProp) => {
    const [value, setValue] = useState<number>(valueStart);
    useEffect(() => {
        setValue(valueEnd);
    }, [valueEnd]);

    return children(value);
}

export default ProgressProvider;




