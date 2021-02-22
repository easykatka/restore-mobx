import { BookList } from "../book-list/book-list"
import { ShoppingCartTable } from "../shopping-cart-table/shopping-cart-table"
import store from './../../services/storage/store'


export const HomePage = () => {

	return (<>
		<BookList/>
		<ShoppingCartTable/>
		</>
	)
}