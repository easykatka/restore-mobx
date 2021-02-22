import './shopping-cart-table.scss'

export const ShoppingCartTable = () => {
	return (
		<div className='shopping-cart-table'>
			<h2>Your order </h2>

			<table className='table'>
				<thead>
					<th>#</th>
					<th>Item</th>
					<th>Count</th>
					<th>Price</th>
					<th>Action</th>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Site Reliability Enginenering</td>
						<td>2</td>
						<td>40$</td>
						<td>
							<button className='btn btn-danger'>
								<i className='fa fa-trash-o' />
							</button>
							<button className='btn btn-success'>
								<i className='fa fa-plus-circle' />
							</button>
							<button className='btn btn-dark'>
								<i className='fa fa-minus-circle' />
							</button>
						</td>
					</tr>
				</tbody>
			</table>
			<div className='total'>
				total: $201

			</div>
		</div>
	)
}