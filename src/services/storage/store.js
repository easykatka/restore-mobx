import { makeAutoObservable } from "mobx";

class Store {
	books = []
	cartItems = [
	]
	constructor() {
		makeAutoObservable(this);
	}
	getBooks(data) {
		this.books = data
	}
	get total() {
		return this.cartItems.reduce((acc, item) => { return acc + item.total }, 0)
	}
	onDelete(id) {
		this.cartItems = this.cartItems.filter(item => item.id !== id)
	}
	onInc(id) {
		this.cartItems = this.cartItems.map(item => item.id === id ? { ...item, count: item.count + 1 } : item)
	}
	onDec(id) {
		this.cartItems = this.cartItems.map(item => item.id === id ? { ...item, count: item.count - 1 } : item)
	}
	onAddedToCart(id) {
		const book = this.books.find(item => item.id === id)
		if (this.cartItems.find(item => item.id === book.id)) {
			console.log(this.cartItems)
			this.cartItems = this.cartItems.map(item => {
				if (item.id === book.id) {
					console.log('find!')
					let finded = { ...item, count: item.count + 1 }
					return finded
				}
			})
		}
		else
			console.log('push')
		this.cartItems.push({ id: book.id, count: 1, name: book.title, total: book.price })
	}
}

export default new Store(); 