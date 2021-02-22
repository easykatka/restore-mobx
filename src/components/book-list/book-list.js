import { Component } from "react";
import { BookListItem } from './../boot-list-item/book-list-item'
import store from '../../services/storage/store'
import { observer } from "mobx-react";
import './book-list.scss'
const data = [
	{
		id: 1, title: 'Становление Силы', author: 'Дейв Волвертон ', price: 22,
		coverImage: 'https://wallpapercave.com/wp/wp2316531.jpg'
	},
	{
		id: 2, title: 'Знак короны ', author: 'Джуд Уотсон', price: 44,
		coverImage: 'https://on-desktop.com/wps/2020Movies_Characters_in_the_popular_Star_Wars_movie_140605_.jpg'
	},
]

export const BookList = observer(class extends Component {
	componentDidMount() {
		store.getBooks(data)
	}

	render() {
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