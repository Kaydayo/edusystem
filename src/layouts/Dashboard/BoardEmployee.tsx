import React, { useEffect, useState } from 'react'
import EmptyState from './EmptyStates/EmptyState'
import emptStateBio  from '../../Assets/Images/employee.svg'
import Table from '../../components/Table/Table'
import boardEmployeeStyle from '../../styles/Dashboard/Dashboard.module.css'
import { CgSearch } from 'react-icons/cg'
import { FaSortAmountUp } from 'react-icons/fa'
import { companyEmployees } from '../../constants/data'
import { RootState, useAppSelector } from '../../redux/store'

type BoardEmployeeProp = {
  employees?: any[]
}
const BoardEmployee = ({ employees }: BoardEmployeeProp) => {
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [searchResults, setSearchResults] = useState<any[]>([])


  const { loading, error, userInfo, success, userToken, profileInfo } = useAppSelector((state: RootState) => state.user)
  

  useEffect(() => {
    const results =profileInfo.company[0].employees.filter((employee:any)=>
      employee.firstName.toLowerCase().includes(searchTerm)
    )

    setSearchResults(results)
  }, [searchTerm])
  
  
  if (!profileInfo.company[0].employees.length) {
    return (
      <div>
        < EmptyState imag={emptStateBio} text="Looks like you haven't added any employee. Click <a href=# classname='marklink'>here</a> to
          invite your employees and assign them course seats
          " />
      </div>
    )
  } else {
    return (
      <div className={boardEmployeeStyle.employeeMain}>
        <div className={boardEmployeeStyle.findBars}>
          <div className={boardEmployeeStyle.searchBar}>
            <input type="text" placeholder='Search...'
              className={boardEmployeeStyle.searchInput}
              onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setSearchTerm(e.target.value)}
            />
            <CgSearch className={boardEmployeeStyle.icoSearch}/>
          </div>

          <div>
            <FaSortAmountUp/>
          </div>

          <div>
            <p>Sort</p>
          </div>
        </div>
        <div>
          {/* <Table data={employees} rowsPerPage={8} /> */}
          {searchTerm ? <Table data={searchResults} rowsPerPage={6} /> : <Table data={profileInfo.company[0].employees} rowsPerPage={6} />}
       </div>
      </div>
    )
  }
}

export default BoardEmployee

    