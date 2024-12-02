
import {cliente} from "c:/Users/PICHAU/Desktop/ALURA/JS-POO/cliente";
import {contaCorrente} from "c:/Users/PICHAU/Desktop/ALURA/JS-POO/ContaCorrente";


const contaCorrentePedro = new contaCorrente(); 


const cliente1 = new cliente();
const cliente2 = new cliente();

cliente1.nome = "Carla";
cliente1.cpf = 51411710052;


cliente2.nome = "Pedro";
cliente2.cpf = 21751400089;
contaCorrentePedro.agencia = 1001;
contaCorrentePedro.saldo = 0;

// contaCorrentePedro.saldo += 100;
// contaCorrentePedro.saldo += 100;

// console.log(cliente1);
console.log(cliente2, contaCorrentePedro);

const valorDepositado = contaCorrentePedro.depositar(200);

console.log(valorDepositado);


const valorSacado = contaCorrentePedro.sacar(50)

console.log(valorSacado);

