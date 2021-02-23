import './header.scss'
import store from '../../services/store'
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'

export const Header = observer(() => {
	return (
		<header className='shop-header row'>

			<Link to="/" className='logo text-dark'>Restore</Link>
			<Link to="/cart" className='logo text-dark'><i className='cart-icon fa fa-shopping-cart shopping-cart' />{store.totalCount} items (${store.total})</Link>
			
			
		</header>
	)
})