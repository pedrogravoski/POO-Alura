
import {cliente} from "./cliente.js";
import {contaCorrente} from "./ContaCorrente.js";


const cliente1 = new cliente();
cliente1.nome = "Carla";
cliente1.cpf = 51411710052;


const cliente2 = new cliente();
cliente2.nome = "Pedro";
cliente2.cpf = 21751400089;

const contaCorrenteCarla = new contaCorrente();
contaCorrenteCarla.agencia = 102;
contaCorrenteCarla._saldo = 0;
contaCorrenteCarla.cliente = cliente1
contaCorrenteCarla.depositar(500);
contaCorrenteCarla.cliente.cpf = 20202020020;

const contaCorrentePedro = new contaCorrente();
contaCorrentePedro.cliente = cliente2
contaCorrentePedro.agencia = 1001;
contaCorrentePedro._saldo = 0;


contaCorrenteCarla.transferir(500 , contaCorrentePedro);
console.log(contaCorrenteCarla);
console.log(contaCorrentePedro);

// const valorDepositado = contaCorrentePedro.depositar(200);
// console.log(valorDepositado);


// const valorSacado = contaCorrentePedro.sacar(50)
// console.log(valorSacado);

