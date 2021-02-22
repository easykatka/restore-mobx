import { Route, Switch } from "react-router-dom"
import { CartPage } from "../pages/cardpage"
import { HomePage } from "../pages/homepage"


export const App = () => {

	return <>
		<Switch >
			<Route path='/' component={HomePage} exact />
			<Route path='/cart' component={CartPage} />
		</Switch>
	</>
}