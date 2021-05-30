import java.util.*;

public class Main {
    
    interface PesoIdeal{
        void peso(double altura);
    }
    
    public static void main(String[] args) throws Exception {
        Mulher mulher = new Mulher();
        mulher.peso(1.55);
        
        Homen homen = new Homen();
        homen.peso(1.55);
    }
    
    
   static class Homen implements PesoIdeal{
       @Override
       public  void peso(double altura){
          double pi = (72.7 * altura) - 58;
          System.out.printf("peso ideal: %.2f \n",pi);
       }
    }
    
   static class Mulher implements PesoIdeal{
       @Override
       public  void peso(double altura){
           double pi = (62.1 * altura) - 44.7;
           System.out.printf("peso ideal: %.2f \n",pi);
       }
    }
    
    
}
