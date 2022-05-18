// Components

const header = (logo) => {
    return `
    <header class="headerContainer">
        <div class="header">
            <h3>${logo}</h3>
            <nav>
                <span class="material-symbols-outlined">
                menu</span>
            </nav>
        </div>
    </header>
`
};

const bookCardsHolder = (bookCard) => {
    return `
    <section class="cardContainer">
        ${bookCard}
    </section>
    `
};

const bookCards = (id, title, sub, text) => {
    return `
        <div class="card">
            <div class="cardDetails">
                <span>${id}</span>
                <h4>${sub}</h4>
                <h2>${title}</h2>
                <p>${text}</p>
            </div>
            <div class="readMore">
                <button>read more</button>
                <span class="material-symbols-outlined"> arrow_right_alt</span>
            </div>
        </div>
    `
};



window.addEventListener('load', () => {
    const root = document.getElementById('root');
    let content = "";

    books.cards.map((book, index) => {
        content += bookCards(index+1, book.title, book.sub, book.text)
    });

    root.insertAdjacentHTML('beforeend', header(books.logo));
    root.insertAdjacentHTML('beforeend', bookCardsHolder(content));
});