import { Component } from "react";
import { BookListItem } from './../boot-list-item/book-list-item'
import store from '../../services/storage/store'
import { observer } from "mobx-react";
import './book-list.scss'


const data = [
	{ id: 1, name: 'Становление Силы', author: 'Дейв Волвертон ' },
	{ id: 2, name: 'Знак короны ', author: 'Джуд Уотсон' },
]

export const BookList = observer(class extends Component {
	componentDidMount() {
		store.getBooks(data)
	}

	render() {
		console.log(store.books)
		return (
			<ul className='book-list'>
				{
					store.books.map(item => {
						return (
							<li key={item.id}>
								<BookListItem book={item} />
							</li>
						)
					})
				}
			</ul>
		)
	}
}
)