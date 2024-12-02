export class contaCorrente{
    agencia;
    #saldo;
    
    
    sacar(valor){
        if(this.#saldo >= valor){
            this.#saldo -= valor
            return valor; 
        }else{
            console.log("ERRO - saldo insuficiente! ")
        }

    }


    depositar(valor){
        if (valor <= 0) {
            return;
        }
            this.#saldo += valor; 
            return this.#saldo ;
            
                      
        

    }

}
