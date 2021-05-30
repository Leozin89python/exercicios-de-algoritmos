import java.util.*;

public class Main {
    
    
    
    interface Media{
        double ponderada(double a, double b, double c);
    }
    
    public static void main(String[] args) throws Exception {
        try{
            
                Aritmetica3 media = new Aritmetica3();
                System.out.println("media:" + media.ponderada(4,3,5));
				System.out.println("media:" + media.ponderada(2,7,5));
                System.out.println("media:" + media.ponderada(0,6,9));
            
        }catch(Exception e){
                System.out.println("Erro:" + e.getMessage());
            }
    }
    
    static class Aritmetica3 implements Media{
        @Override
        public double ponderada(double a, double b, double c){
            double calculo = ((a * 2) + (b * 3)  + (c * 5)) / 10;
            return calculo;
        }
    }
    
    
}