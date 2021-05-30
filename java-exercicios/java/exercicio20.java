import java.util.*;

public class Main {
    
    interface Items{
        void produtos(int codigo,int qtde);
    }
    
    public static void main(String[] args) throws Exception {
        Loja loja = new Loja();
        loja.produtos(1001,3);
        loja.produtos(101,3);
        loja.produtos(9987,2);
    }
    
    static class Loja implements Items{
        @Override
        public void produtos(int codigo,int qtde){
            double totalAPagar;
            switch(codigo){
                case 1001:
                    totalAPagar = qtde * 5.32;
                    System.out.printf("total a pagar: %.2f \n",totalAPagar);
                    break; 
                  case 1324:
                    totalAPagar = qtde * 6.45;
                    System.out.printf("total a pagar: %.2f \n",totalAPagar);
                    break; 
                case 6548:
                    totalAPagar = qtde * 2.37;
                    System.out.printf("total a pagar: %.2f \n",totalAPagar);
                    break; 
                case 9987:
                    totalAPagar = qtde * 5.32;
                    System.out.printf("total a pagar: %.2f \n",totalAPagar);
                    break; 
                case 7623:
                    totalAPagar = qtde * 6.45;
                    System.out.printf("total a pagar: %.2f \n",totalAPagar);
                    break; 
                default:
                    System.out.println("entrada inválida!");
            }
        }
    }
    
    
}