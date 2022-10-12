import React from 'react'

type ProgressProvider = {
    valueStart: number,
    valueEnd: number,
    children: any
}
const useProgressProvider = ({ valueStart, valueEnd, children }:ProgressProvider) => {

    const [value, setValue] = React.useState(valueStart);
    React.useEffect(() => {
        setValue(valueEnd);
    }, [valueEnd]);

    return children(value);
}

export default useProgressProvider