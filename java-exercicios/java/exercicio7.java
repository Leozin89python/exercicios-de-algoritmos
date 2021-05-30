java
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {
        Algebra1 algebra1 = new Algebra1();
        algebra1.calculo(3000.00);
    }
    
   static class Algebra1{
        double percentualDoDistribuidor = (28/100);
        double imposto = (45/100);
        double custoDeProducao = 0;
        
        void calculo(double custoDeProducao){
            this.custoDeProducao =  custoDeProducao;
            
            double imposto = this.imposto;
            double percentualDoDistribuidor = this.percentualDoDistribuidor;
            
            double custoDeFabrica = (imposto  * this.custoDeProducao) + this.custoDeProducao;
            double custoAoConsumidor = custoDeFabrica + (percentualDoDistribuidor  * custoDeFabrica);
            System.out.println(" custo de fabrica:" +  custoDeFabrica + ","+ "custo ao Consumidor:" + custoAoConsumidor);
        }
    }
}