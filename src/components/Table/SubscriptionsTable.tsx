import React, { useState } from 'react'
import useTable from '../../hooks/useTable'
import TableFooter from './TableFooter'
import tableStyles from '../../styles/Table/Table.module.css'
import avatarIcon from '../../Assets/Images/employeeAvatar3.svg'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import Moment from 'react-moment'
import { capitalizeFirstLetter } from '../../utils/helper'


type TableProp = {
    data: any[],
    rowsPerPage: number,
    showMore?: () => void
}

const SubscriptionsTable = ({ data, rowsPerPage, showMore }: TableProp) => {
    const [page, setPage] = useState(1);
    const { slice, range } = useTable({ data, page, rowsPerPage });

    return (
        <div style={{
            "margin": "0 auto"
        }}>
            <table className={tableStyles.table}>
                <thead className={tableStyles.tableRowHeader}>
                    <tr>
                        <th className={tableStyles.tableHeader}>Date</th>
                        <th className={tableStyles.tableHeader}>Details</th>
                        <th className={tableStyles.tableHeader}>Amount</th>
                        <th className={tableStyles.tableHeader}>Download</th>
                    </tr>
                </thead>
                <tbody>
                    {slice.map((el) => (
                        <tr className={tableStyles.tableRowItems} key={el.id}>
                            <td className={tableStyles.tableCell}>
                                <div className={tableStyles.nameData}>
                                    {/* <div>
                                        <img src={el.profilePicture ? el.profilePicture : avatarIcon} alt="" className={tableStyles.nameImage} />
                                    </div> */}
                                    <div>
                                        <p style={{
                                            "color": 'black',
                                            "fontSize": '14px',
                                            "fontWeight":'500'
                                        }}><Moment format="DD/MM/YYYY">{el.datePurchased}</Moment></p>
                                        {/* <p>{el.email}</p> */}
                                    </div>
                                </div>
                            </td>
                            <td className={tableStyles.tableCell}>{capitalizeFirstLetter(el.subscriptionName)} Plan</td>
                            <td className={tableStyles.tableCell}>
                                <p>${el.amount}.00</p>
                            </td>
                            <td className={tableStyles.tableCell}>
                                <div className={tableStyles.gradeCellSub}>
                                    <p style={{
                                        "color": "#5C00DD",
                                        "fontWeight": "600",
                                        "fontSize": "14px"
                                    }}
                                    >
                                       Invoice <Moment format="D MMM YYYY">{el.datePurchased}</Moment> 
                                    </p>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* <div>
                <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
            </div> */}
        </div>
    )
}

export default SubscriptionsTable