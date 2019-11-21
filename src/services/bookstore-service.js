export default class BookstoreService {

    data = [
        {
            id: 1,
            title: 'Мятная сказка. Специальное издание',
            author: 'Полярный А.',
            price: 27,
            img: 'https://img-gorod.ru/26/031/2603103_detail.jpg'
        },
        {
            id: 2,
            title: 'Тонкое искусство пофигизма: Парадоксальный способ жить счастливо',
            author: 'Мэнсон М.',
            price: 50,
            img: 'https://img-gorod.ru/27/404/2740488_detail.jpg'
        }
    ]


    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.data)
            }, 700)
        })
    }
}