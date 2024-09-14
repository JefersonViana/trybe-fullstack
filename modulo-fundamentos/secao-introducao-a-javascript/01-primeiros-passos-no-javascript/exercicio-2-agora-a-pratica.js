// Exercício 2
// Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados.

const num1 = 10;
const num2 = 20;

if (num1 > num2) {
  console.log(`O número ${num1} é maior que o número ${num2}`);
} else if (num2 > num1) {
  console.log(`O número ${num1} é menor que o número ${num2}`);
} else {
  console.log('Os números são iguais');
}