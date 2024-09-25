// Imagine que você seja responsável por cuidar do sistema de entrega de um restaurante e que precise enviar mensagens com as informações da compra. Para isso, use o seguinte código:

const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

// Complete a função customerInfo() para que seu retorno seja: 'Olá, Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, Rua das Flores, Número: 389, AP: 701.'.
const customerInfo = (fullOrder) => {
  return `Olá, ${fullOrder.order.delivery.deliveryPerson}, entrega para: ${fullOrder.name}, Telefone: ${fullOrder.phoneNumber}, ${fullOrder.address.street}, Número: ${fullOrder.address.number}, AP: ${fullOrder.address.apartment}.`
}

console.log(customerInfo(order));

// Complete a função orderModifier() para que seu retorno seja: 'Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.'.
// Modifique o nome da pessoa compradora para Luiz Silva;
order.name = 'Luiz Silva'
// Modifique o valor total da compra para R$ 50,00.
order.payment.total = 50;

const orderModifier = (fullOrder) => {
  return `Olá, ${fullOrder.name}, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ ${fullOrder.payment.total},00.`
}

console.log(orderModifier(order));


