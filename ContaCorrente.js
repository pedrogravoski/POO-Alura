export class contaCorrente {
    agencia;
    cliente;

    _saldo;


    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        } else {
            console.log("ERRO - saldo insuficiente! ");
        }

    }


    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
        return this._saldo;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

}
