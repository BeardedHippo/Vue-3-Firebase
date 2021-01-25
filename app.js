const app = Vue.createApp({
    data() {
        return {
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: '45',
            showBooks: true,
            x: 0,
            y: 0,
            books: [
                {title: 'Title 1', author: 'Author 1', img: 'assets/1.jpg', isFav: true},
                {title: 'Title 2', author: 'Author 2', img: 'assets/2.jpg', isFav: false},
                {title: 'Title 3', author: 'Author 3', img: 'assets/3.jpg', isFav: true},
            ],
            url: 'https://www.thenetninja.co.uk'
        }
    },
    methods: {
        changeTitle(title) {
        //    this.title = 'Words of Randiance';
        this.title = title;
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },
        handleEvent(event) {
            console.log(event);
        },
        handleMousemove(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        toggleFav(book) {
            book.isFav = !book.isFav;
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
});
app.mount('#app');