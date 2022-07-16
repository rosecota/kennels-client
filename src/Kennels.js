import { ApplicationViews } from "./views/ApplicationViews"
import { NavBar } from "./components/nav/NavBar"


export const Kennels = () => {
	return (
		<>
			<NavBar />
			<div className="main-wrapper">
				<ApplicationViews />
			</div>
		</>
	)
}
