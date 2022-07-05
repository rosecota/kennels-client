import { Route, Routes } from "react-router-dom"
import { LocationList } from '../components/location/LocationList'
import { LocationDetail } from '../components/location/LocationDetail'
import { AnimalList } from '../components/animal/AnimalList'
import { AnimalForm } from '../components/animal/AnimalForm'
import { AnimalDetails } from '../components/animal/AnimalDetail'
import { CustomerList } from '../components/customer/CustomerList'
import { EmployeeList } from '../components/employee/EmployeeList'
import { EmployeeForm } from '../components/employee/EmployeeForm'
import { EmployeeDetail } from '../components/employee/EmployeeDetail'
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"

export const ApplicationViews = () => {
	return (
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/">
				<Route index element={< LocationList />} />
				<Route path="locations/:locationId" element={<LocationDetail />} />
				<Route path="customers" element={<CustomerList />} />
			</Route>

			<Route path="/animals">
				<Route index element={<AnimalList />} />
				<Route path=":animalId" element={<AnimalDetails />} />
				<Route path="create" element={<AnimalForm />} />
				<Route path="edit/:animalId" element={<AnimalForm />} />
			</Route>

			<Route path="/employees">
				<Route index element={<EmployeeList />} />
				<Route path="create" element={<EmployeeForm />} />
				<Route path="edit/:employeeId" element={<EmployeeForm />} />
				<Route path=":employeeId" element={<EmployeeDetail />} />
			</Route>
		</Routes>
	)
}

