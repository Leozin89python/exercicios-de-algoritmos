using System;

namespace exercicio{
    public class Matematica{
        public static void Main(){
            int idade = 22;
			
			Console.WriteLine("https://www.inf.pucrs.br/~pinho/LaproI/Exercicios/SeqDecisao/lista1.htm");
            Console.WriteLine("exercicio 12");
			
            Funcoes idd = new Funcoes();
            idd.idade(idade);
        }
    }
}


interface Calc {
     void idade(int idd);
}

class Funcoes :Calc {
    
	   public Funcoes() {}
    
	   public void idade(int idd){
		   
		   if(idd <= 0 && idd < 5){
			   Console.WriteLine("Opção inválida!");
		   }if(idd >= 5 && idd <= 7){
			   Console.WriteLine("Infantil A!");
		   }if(idd >= 8 && idd <= 10){
			   Console.WriteLine("Infantil B!");
		   }if(idd >= 11 && idd <= 13){
			   Console.WriteLine("Juvenil A!");
		   }if(idd >= 14 && idd <= 17){
			   Console.WriteLine("Juvenil B!");
		   }if(idd >= 18){
			   Console.WriteLine("Adulto!");
		   }
		   
		   
	   }
	   
}