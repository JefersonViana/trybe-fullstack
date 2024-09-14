// Exercício 3
// Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.

const num1 = 30;
const num2 = 40;
const num3 = 50;
const message = 'O maior número é: ';

if (num1 > num2 && num1 > num3) {
  console.log(message + num1);
} else if (num2 > num1 && num2 > num3) {
  console.log(message + num2);
} else if (num3 > num1 && num3 > num2) {
  console.log(message + num3);
} else {
  console.log('Tem números iguais!')
}