# O que é Typescript?

- É uma linguagem de programação?

- É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.

- TypeScript é JavaScript, mas com tipos.

# Por que usamos Typescript?

- **Controle sobre as variáveis**: TypeScript permite definir o tipo de dados de variáveis, o que pode ajudar a prevenir erros e melhorar a eficiência do desenvolvimento.

- **Aumento da legibilidade do código**: A tipagem estática e os recursos avançados do TypeScript podem tornar o código mais fácil de entender.

- **Auxílio no desenvolvimento**: TypeScript suporta recursos mais recentes do JavaScript que podem não ser suportados em todos os ambientes de execução de JavaScript.

- **Compatibilidade com JavaScript**: Como um superconjunto de JavaScript, qualquer código JavaScript válido também é código TypeScript válido.

- **Recursos Avançados**: TypeScript adiciona alguns recursos extras, como interfaces e tipos genéricos, que podem ajudar a melhorar a qualidade do código.

- **Detecção de Erros em Tempo de Compilação**: O compilador TypeScript pode verificar o código em tempo de compilação, identificando erros antes mesmo de serem executados.

- **Desenvolvimento de Aplicações Complexas**: O TypeScript eleva o nível de produtividade e ainda garante o desenvolvimento de aplicações complexas, eficazes e seguras.

- **Código Mais Fácil de Manter**: A tipagem estática e os recursos avançados do TypeScript podem tornar o código mais fácil de manter, especialmente em projetos de grande escala.

# Tipos

- string
- number
- boolean

- object

- bigint
- symbol

- undefined
- null

representam a ausência de valor
undefined -> variável foi declarada, mas ainda não teve um valor atribuído a ela.
null -> valor que representa a ausência intencional de qualquer valor ou objeto.

- any
- unknown
- never

- Classe (tipo do objeto)

- criação de tipo - alias - union - literal

# Onde usamos o TypeScript?

- Variáveis: Usamos TypeScript para adicionar tipos estáticos às nossas variáveis. Isso nos ajuda a evitar erros comuns em JavaScript relacionados a tipos inesperados.

- Funções: Usamos TypeScript para adicionar tipos aos parâmetros e ao retorno da função. Isso nos ajuda a garantir que estamos usando a função corretamente.

- Classes: TypeScript é frequentemente usado para adicionar tipos a classes em JavaScript, tornando mais fácil trabalhar com programação orientada a objetos.

- Interfaces: As interfaces em TypeScript são uma maneira poderosa de definir contratos para estruturas de dados complexas.

- Módulos
- Generics
- Enums

# Exemplo

function showData(login:string, password, isActive){
const obj = {
login,
password,
isActive
}
return obj;
}
