# Estrutura de um Projeto Node.js

## server.ts

Este é o ponto de entrada do aplicativo. Ele é responsável por iniciar o servidor e se conectar ao banco de dados.

## AuthorRouter

Esta camada é responsável por receber as solicitações HTTP e encaminhá-las para o `AuthorController`.

## AuthorController

O `AuthorController` recebe os dados do `AuthorRouter`, realiza qualquer processamento necessário e os encaminha para o `AuthorService`.

Esta camada também é responsável por enviar a resposta ao cliente (quem está fazendo a requisição).

## AuthorService

Esta é a camada da lógica de negócios. Ela recebe os dados do `AuthorController`, realiza as operações necessárias e os encaminha para o `AuthorRepository`.

Normalmente, é a camada responsável pelas validações dos dados recebidos do controller.

## AuthorRepository

O `AuthorRepository` é responsável por interagir com o banco de dados. Ele recebe os dados do `AuthorService`, executa as consultas necessárias e retorna os resultados.

## Author (Model, Domain)

Esta é a representação da entidade autor no banco de dados. Ele define a estrutura dos dados do autor.

Com o banco de dados MongoDB, usamos o Mongoose para fazer a modelagem dessas entidades através de `mongoose.Schema`.

## AuthorModule

O `AuthorModule` é responsável por inicializar e unir todas as camadas acima em uma única unidade funcional.

Ele:

- Importa todas as outras camadas;
- Injeta as dependências necessárias;
- Exporta um módulo completo que pode ser usado pelo restante do aplicativo; 😁
