import { Component } from "react";
import { BookListItem } from './../boot-list-item/book-list-item'
import store from '../../services/store'
import { observer } from "mobx-react";
import './book-list.scss'
import { uid } from 'uid';

const data = [
	{
		id: uid(4), title: 'Становление Силы', author: 'Дейв Волвертон ', price: 22,
		coverImage: 'https://wallpapercave.com/wp/wp2316531.jpg'
	},
	{
		id: uid(4), title: 'Знак короны ', author: 'Джуд Уотсон', price: 44,
		coverImage: 'https://on-desktop.com/wps/2020Movies_Characters_in_the_popular_Star_Wars_movie_140605_.jpg'
	},
	{
		id: uid(4), title: 'Звездолеты и транспорт', author: 'Билл Смит', price: 31,
		coverImage: 'https://s1.1zoom.ru/b5050/254/Starship_Star_Wars_Battlefront_II_2017_533154_2560x1440.jpg'
	},
	{
		id: uid(4), title: 'Скрытая угроза', author: 'Тэрри Брукс', price: 55,
		coverImage: 'https://avatars.mds.yandex.net/get-zen_doc/1538903/pub_5ca4391ae0c47900b252ab11_5ca43e01c604dc021df34122/scale_1200'
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
								<BookListItem book={item} onAddedToCart={() => store.onAddedToCart(item.id)} />
							</li>
						)
					})
				}
			</ul>
		)
	}
}
)