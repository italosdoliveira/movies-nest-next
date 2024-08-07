# movies-nest-next

Este projeto foi criado utilizando a versão 18.17.1 do nodejs

Para executar API vá até a pasta movie-api e rode o comando pnpm run start, caso deseje executar os teste unitários rode o comando pnpm run test

A API vai ficar disponível na porta 3000, o playgroundo do Graphql está habilitado basta acessar a rota http://localhost:3000/graphql

Para buscar todos os filmes utilize a query:
```
query {
  searchAll {
    genres
    movies {
      id
      title
      poster
      relasedOn
      genres
      overview
    }
  }
}
```

Para buscar filmes por um título utilize a query:
```
query searchByTitle($title: String!) {
  searchByTitle(title: $title) {
    movies {
      id
      title
      poster
      relasedOn
      genres
      overview
    }
  }
}
```

Para executar o frontend vá para a pasta movie-frontend e rode o comando pnpm run dev

A interface ficará disponível na porta 3001 sendo possível acessar ela pela url http://localhost:3001
