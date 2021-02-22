import './header.scss'

export const Header = ({ numItems, total }) => {
	return (
		<header className='shop-header row'>
			<a className='logo text-dark' href='#'>Restore</a>
			<a className='shopping-cart'><i className='cart-icon fa fa-shopping-cart' />
				{numItems} items (${total})
			</a>
		</header>
	)
}