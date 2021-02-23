import { autorun, makeAutoObservable } from "mobx";

class Store {
	books = []
	cartItems = [
	]
	constructor() {
		makeAutoObservable(this)

	}
	getBooks(data) {
		this.books = data
	}

	get totalCount() {
		return this.cartItems.reduce((acc, item) => { return acc + item.count }, 0)
	}
	get total() {
		return this.cartItems.reduce((acc, item) => { return acc + item.total }, 0)
	}
	onDelete(id) {
		this.cartItems = this.cartItems.filter(item => item.id !== id)
	}
	onInc(id) {
		const book = this.books.find(item => item.id === id)
		this.cartItems = this.cartItems.map(item => item.id === id ? { ...item, count: item.count + 1, total: item.total + book.price } : item)
	}
	onDec(id) {
		const book = this.books.find(item => item.id === id)
		this.cartItems = this.cartItems.map(item => {
			if (item.id === id) return { ...item, count: item.count - 1, total: item.total - book.price }
			else return item
		})
			.filter(item => item.count !== 0)
	}
	onAddedToCart(id) {
		const book = this.books.find(item => item.id === id)
		if (this.cartItems.find(item => item.id === book.id)) {
			this.cartItems = this.cartItems.map(item => {
				if (item.id === book.id) {
					let finded = { ...item, count: item.count + 1, total: item.total + book.price }
					return finded
				}
				else return item
			})
		}
		else
			this.cartItems.push({ id: book.id, count: 1, name: book.title, total: book.price })
	}
}

export default new Store(); 