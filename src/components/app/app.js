import { Route, Switch } from "react-router-dom"
import { Header } from "../header/header"
import { CartPage } from "../pages/cardpage"
import { HomePage } from "../pages/homepage"


export const App = () => {

	return <>
		<main role='main' className='container'>
			<Header numItems={5} total={210}/>
			<Switch >
				<Route path='/' component={HomePage} exact />
				<Route path='/cart' component={CartPage} />
			</Switch>
		</main>
	</>
}