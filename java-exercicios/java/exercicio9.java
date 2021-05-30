import java.util.*;

public class Main {
    
    
    
    interface Media{
        void aritmetica(double a, double b, double c);
    }
    
    public static void main(String[] args) throws Exception {
        try{
            
                Aritmetica4 media = new Aritmetica4();
                media.aritmetica(4,3,5);
                media.aritmetica(7,7,5);
                media.aritmetica(0,6,9);
            
        }catch(Exception e){
                System.out.println("Erro:" + e.getMessage());
            }
    }
    
    static class Aritmetica4 implements Media{
        @Override
        public void aritmetica(double a, double b, double c){
            double media = (a + b + c ) / 3;
            if(media < 6){
               System.out.printf("reprovado" + ",média: %.2f\n",  media);
            }
              else{
                   System.out.printf("aprovado" + ",média: %.2f\n" , media);
            }
        }
    }
    
    
}