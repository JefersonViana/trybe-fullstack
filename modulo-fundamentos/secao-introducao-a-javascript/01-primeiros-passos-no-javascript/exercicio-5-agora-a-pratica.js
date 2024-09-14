// Exercício 5
// Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.

// Atenção ⚠️: não sabe o que é switch/case? Reveja a aula pois pode ter passado despercebido ☺️. Caso queira se aventurar na aprendizagem do switch/case através da documentação, tem um link muito bom te esperando na lição de Recursos Adicionais. Por fim, você terá mais oportunidades de sedimentar o conhecimento sobre a estrutura condicional switch/case ao longo da formação! Agora, só queremos dar visibilidade que existem outras ferramentas para fazer operações condicionais, ok?

// Se a peça passada for inválida, o código deve retornar uma mensagem de erro.
// ⭐️ Desafio extra, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais. Uma dica é pesquisar uma função que faça uma string ficar com todas as letras minúsculas (lower case).

// Exemplo: Bispo -> Diagonais.

const peca = 'Dama';

switch (peca.toLowerCase()) {
  case "peao":
    console.log("frente")
    break;
  case "cavalo":
    console.log("L")
    break;
  case "bispo":
    console.log("diagonais")
    break;
  case "torre":
    console.log("horizontal ou vertical")
    break;
  case "dama":
    console.log("vertical, horizontal e diagonal")
    break;
  case "rei":
    console.log("vertical ou horizontal, somente uma casa por vez")
    break;
  default:
    console.log('ERROR!')
    break;
}