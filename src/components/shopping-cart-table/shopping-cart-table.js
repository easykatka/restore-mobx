import './shopping-cart-table.scss'
import store from '../../services/store'
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'
export const ShoppingCartTable = observer(() => {
	console.log(store.cartItems)

	const renderRow = (item, idx) => {
		const { id, name, count, total } = item;
		return (
			<tr key={id}>
				<td>{idx + 1}</td>
				<td>{name}</td>
				<td>{count}</td>
				<td>{total}</td>
				<td>
					<button className='btn btn-danger' onClick={() => store.onDelete(id)}>
						<i className='fa fa-trash-o' />
					</button>
					<button className='btn btn-success' onClick={() => store.onInc(id)}>
						<i className='fa fa-plus-circle' />
					</button>
					<button className='btn btn-dark' onClick={() => store.onDec(id)}>
						<i className='fa fa-minus-circle' />
					</button>
				</td>
			</tr>)
	}
	return (
		<div className='shopping-cart-table'>
			<h2>Your order </h2>
			<table className='table'>
				<thead>
					<tr>
						<th>#</th>
						<th>Item</th>
						<th>Count</th>
						<th>Price</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{
						store.cartItems && store.cartItems.map(renderRow)
					}
				</tbody>
			</table>
			<div className='total'>
				total: ${store.total}
			</div>
			<Link to='/'>back to shop</Link>
		</div>
	)
})