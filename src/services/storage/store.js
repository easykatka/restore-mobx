import { makeAutoObservable } from "mobx";


class Store {
	books = []

	constructor() {
		makeAutoObservable(this);
	}
	getBooks(data) { 
		this.books = data
	}

}

export default new Store();