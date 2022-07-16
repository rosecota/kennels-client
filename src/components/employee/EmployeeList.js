import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getEmployees } from "../../managers/employees"
import { Employee } from "./Employee"
import "./Employees.css"

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getEmployees().then(employeesData => setEmployees(employeesData))
  }, [])

  return (
    <>
      <h1>Employees</h1>

      <button className="btn btn-primary btn-sm" onClick={() => navigate("/employees/create")}>
        Add Employee
      </button>

      <article className="employees">
        {
          employees.map(employee => {
            return <Employee employee={employee} />
          })
        }
      </article>
    </>
  )
}
