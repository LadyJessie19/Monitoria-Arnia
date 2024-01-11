# Relacionamentos

Os relacionamentos em bancos de dados desempenham um papel crucial na organização e eficiência da manipulação de dados.

- Organização Estruturada de Dados: organizam dados refletindo associações do mundo real.

- Redução de Redundância: evitam repetição, referenciando dados entre entidades para reduzir redundância e manter consistência.

- Integridade Referencial: Chaves estrangeiras garantem integridade, evitando referências a entidades inexistentes.

- Consultas Complexas: viabilizam consultas complexas, essenciais para análises detalhadas e extração de informações específicas.

- Flexibilidade e Escalabilidade: eficientes facilitam adaptação e escalabilidade do banco de dados conforme os requisitos evoluem.

- Manutenção Facilitada: Alterações em uma entidade não afetam diretamente outras, facilitando a manutenção, crucial em ambientes de evolução contínua.

- Representação Precisa do Domínio: Mapear relacionamentos representa de maneira fiel o mundo real no banco de dados, capturando interações entre elementos.

- Eficiência na Recuperação de Dados: Relacionamentos eficientes recuperam dados de várias entidades, otimizando consultas.

---

## Tipos de relacionamentos

Os relacionamentos entre entidades em um banco de dados ajudam a modelar as interações do mundo real de forma organizada. Existem três tipos principais de relacionamentos:

1. Relacionamento Um para Um (One-to-One):

uma entidade com uma entidade

Definição: Cada registro em uma tabela está associado a no máximo um registro em outra tabela, e vice-versa.

Exemplos:

Uma pessoa tem um único passaporte.
Cada passaporte está associado a apenas uma pessoa.

- Pessoa com CPF
- Usuário com foto de perfil

2. Relacionamento Um para Muitos (One-to-Many):

uma entidade com várias entidades

Definição: Cada registro em uma tabela pode estar associado a vários registros em outra tabela, mas cada registro na segunda tabela está associado a no máximo um registro na primeira tabela.

Exemplo:

Um professor pode ter vários alunos.
Cada aluno tem apenas um professor.

- Usuário com uma lista de tarefas

3. Relacionamento Muitos para Muitos (Many-to-Many):

Definição: Vários registros em uma tabela podem estar associados a vários registros em outra tabela. Geralmente, requer uma tabela intermediária para mapear essas associações.

Exemplo:

Muitos estudantes podem se matricular em muitos cursos.
Uma tabela intermediária rastreia essas relações.

- Produtos e categorias

produto: bule de chá
categorias: Artigos de cozinha | Coisas de vidro

produto: Vaso de decoração
categorias: Coisas de vidro | Decoração

produto: garfo de churrasco
categorias: Artigos de cozinha | Artigos para churrasco

---

## Modelagem com Mongoose em MongoDB

O Mongoose é uma biblioteca Node.js para modelar objetos MongoDB de maneira simples e eficaz.

Antes de explorar os relacionamentos, é essencial entender os conceitos básicos de Schemas e Models no Mongoose.

### Schema

- Define a estrutura do documento no MongoDB, especificando os campos e seus tipos.
- Define restrições, validações e configurações para os dados.

Exemplo:

```javascript
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
});
```

### Model

- Representa uma coleção no banco de dados MongoDB.
- Baseia-se em um Schema para definir a estrutura dos documentos.
- Fornece métodos para interagir com o banco de dados.
  Exemplo:

```javascript
const User = mongoose.model("User", userSchema);
```

---

## Relacionamentos com MongoDB - Schemas e Models

Agora, vamos explorar os tipos de relacionamentos.

1. Relacionamento Um para Um (One-to-One):

```javascript
const mongoose = require("mongoose");

// Schema para Address
const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  zipCode: String,
});

// Schema para User
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  address: { type: mongoose.Schema.Types.ObjectId, ref: "Address" },
});

// Model para Address
const Address = mongoose.model("Address", addressSchema);

// Model para User
const User = mongoose.model("User", userSchema);
```

2. Relacionamento Um para Muitos (One-to-Many):

```javascript
const mongoose = require("mongoose");

// Schema para User
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
});

// Schema para Post
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
});

// Model para Post
const Post = mongoose.model("Post", postSchema);

// Model para User
const User = mongoose.model("User", userSchema);
```

3. Relacionamento Muitos para Muitos (Many-to-Many):

```javascript
const mongoose = require("mongoose");

// Schema para Course
const courseSchema = new mongoose.Schema({
  name: String,
});

// Schema para User
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
});

// Model para Course
const Course = mongoose.model("Course", courseSchema);

// Model para User
const User = mongoose.model("User", userSchema);
```

## Exemplo -> entidade User com as entidades Address, Payment e PersonalData

```javascript
// Definindo o esquema para User
const userSchema = new Schema({
  username: String,
  email: String,
  address: { type: mongoose.Schema.Types.ObjectId, ref: "Address" },
  payment: { type: mongoose.Schema.Types.ObjectId, ref: "Payment" },
  personalData: { type: mongoose.Schema.Types.ObjectId, ref: "PersonalData" },
});

// Criando o modelo User usando o esquema
const User = mongoose.model("User", userSchema);
```

```json
{
  "User": {
    "id": "123",
    "username": "usuario123",
    "email": "usuario123@email.com",
    "address": {
      "street": "Rua Principal",
      "city": "Cidade A",
      "zipCode": "12345"
    },
    "payment": {
      "cardNumber": "**** **** **** 1234",
      "expiryDate": "12/25",
      "cvv": "123"
    },
    "personalData": {
      "firstName": "João",
      "lastName": "Silva",
      "birthdate": "01/01/1990"
    }
  }
}
```
