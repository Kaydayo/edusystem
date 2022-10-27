import React, { useState } from 'react'
import useTable from '../../hooks/useTable'
import TableFooter from './TableFooter'
import tableStyles from '../../styles/Table/Table.module.css'
import avatarIcon from '../../Assets/Images/employeeAvatar3.svg'
import { BiDotsVerticalRounded } from 'react-icons/bi'


type TableProp = {
    data: any[],
    rowsPerPage: number,
    showMore?:()=>void
}
const Table = ({ data, rowsPerPage, showMore }: TableProp) => {
    const [page, setPage] = useState(1);
    const { slice, range } = useTable({ data, page, rowsPerPage });

  return (
      <>
          <table className={tableStyles.table}>
              <thead className={tableStyles.tableRowHeader}>
                  <tr>
                      <th className={tableStyles.tableHeader}>Name</th>
                      <th className={tableStyles.tableHeader}>Job Role</th>
                      <th className={tableStyles.tableHeader}>Status</th>
                      <th className={tableStyles.tableHeader}>Grade</th>
                  </tr>
              </thead>
              <tbody>
                  {slice.map((el) => (
                      <tr className={tableStyles.tableRowItems} key={el.id}>
                          <td className={tableStyles.tableCell}>
                              <div className={tableStyles.nameData}>
                                  <div>
                                      <img src={el.profilePicture? el.profilePicture:avatarIcon} alt="" className={tableStyles.nameImage} />
                                  </div>
                                  <div>
                                      <p> {el.firstName}</p>
                                      <p>{el.email}</p>
                                 </div>
                              </div>
                          </td>
                          <td className={tableStyles.tableCell}>{el.role}</td>
                          <td>
                              <p style={{
                                  "backgroundColor": "rgba(92, 0, 221, 0.2)",
                                  "textAlign": "center",
                                  "width": "48px",
                                  "padding": "5px 17px",
                                  "borderRadius": "4px",
                                //   "height": "24px",
                                  "fontWeight": "600",
                                  "fontSize": "12px",
                                  "margin":"0 auto"
                              }}>Pending</p>
                          </td>
                          <td className={tableStyles.tableCell}>
                              <div className={tableStyles.gradeCell}>
                                  <p style={{
                                      "color": "#5C00DD",
                                      "fontWeight": "600",
                                      "fontSize": "14px"
                                  }}
                                  >A+</p>
                                  <div>
                                      <BiDotsVerticalRounded />
                                  </div>
                              </div>
                          </td>
                      </tr>
                  ))}
              </tbody>
          </table>
          <div>
              <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
          </div>
      </>
  )
}

export default Table