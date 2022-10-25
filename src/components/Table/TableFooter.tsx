import { number } from 'prop-types'
import React, { useEffect, useState } from 'react'

import tableFootStyle from '../../styles/Table/TableFooter.module.css'

type TableFooterProp = {
    range:any[],
    setPage: (page:number)=> void,
    page: number,
    slice: any[]
}
const TableFooter = ({ range, setPage, page, slice }: TableFooterProp) => {
    const [currPage, setCurrPage] = useState<number>(1)
    useEffect(() => {
        if (slice.length < 1 && page !== 1) {
            setPage(page - 1);
        }
        
    }, [slice,page,setPage])
    return (
        <div className={tableFootStyle.tableFooter}>
           { range.length>1 && <p onClick={() => {
                if (currPage === 1) {
                    setPage(1)
                } else {
                    setPage(currPage - 1)
                }
            }}>Prev</p>}
          {
                range.length > 1 && range.map((el, index) => (
                    <button
                        key={index}
                        className={`${tableFootStyle.button} ${page === el ? tableFootStyle.activeButton : tableFootStyle.inactiveButton}`}
                        onClick={() => {
                            setCurrPage(el)
                            setPage(el)
                        }}
                    >
                        {el}
                    </button>
                ))
            }
           { range.length > 1 && <p onClick={() => {
                if (currPage === range.length) {
                    setPage(currPage)
                } else {
                    setPage(currPage + 1)
                }
                
            }}>Next</p>}
    </div>
  )
}

export default TableFooter