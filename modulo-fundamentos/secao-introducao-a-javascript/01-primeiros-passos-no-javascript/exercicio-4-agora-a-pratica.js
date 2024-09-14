// Exercício 4
// Utilize if...else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

// Dica: para os ângulos serem de um triângulo válido, a soma dos três ângulos deve ser 180 graus. Um ângulo será considerado inválido se não tiver um valor positivo.

const angleA = 58;
const angleB = 62;
const angleC = 60;

const sumOfAngles = angleA + angleB + angleC;

const allAnglesAreExists = angleA > 0 && angleB > 0 && angleC > 0;

if (allAnglesAreExists) {
  if (angleA + angleB + angleC === 180) {
    console.log(true);
  } else {
    console.log(false)
  }
} else {
  console.log('ERROR: ângulos inválidos!')
}