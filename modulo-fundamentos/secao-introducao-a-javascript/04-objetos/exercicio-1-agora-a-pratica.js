const reader = {
  name: 'Julia',
  lastName: 'Pessoa',
  age: 21,
  favoriteBooks: [
    {
      title: 'O Senhor dos Anéis - a Sociedade do Anel',
      author: 'J. R. R. Tolkien',
      publisher: 'Martins Fontes',
    },
  ],
};

// 1 - Acesse as chaves name, lastName e title e exiba informações em um console.log() no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Senhor dos Anéis - a Sociedade do Anel’.”.

console.log(`O livro favorito de ${reader.name} ${reader.lastName} se chama ${reader.favoriteBooks[0].title}.`)

// 2 - Adicione um novo livro favorito na chave favoriteBooks, que é um array de objetos. Atribua a essa chave um objeto que contenha as seguintes informações:

const book = {
  title: 'Harry Potter e o Prisioneiro de Azkaban',
  author: 'JK Rowling',
  publisher: 'Rocco',
}

reader.favoriteBooks.push(book);

console.log(reader.favoriteBooks);

// 3 - Acesse as chaves name e favoriteBooks e faça um console.log() no seguinte formato:
// “Julia tem {quantidade} livros favoritos.”

const qtdBook = reader.favoriteBooks.length;

console.log(`${reader.name} tem ${qtdBook} livros favoritos.`)
