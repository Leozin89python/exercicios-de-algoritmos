using System;

namespace exercicio{
    public class Matematica{
        public static void Main(){
            
            double A, B, C;
            A = 1.0;
            B = 1.0;
            C = 1.0;
            
            Console.WriteLine("https://www.inf.pucrs.br/~pinho/LaproI/Exercicios/SeqDecisao/lista1.htm");
            Console.WriteLine("exercicio 2");
            
            
            Console.WriteLine("D = R + S / 2  | R = (A + B)² | S = (B + C)²   ");
            
            Funcoes funcao = new Funcoes();
            funcao.equacao(A, B, C);
            
        }
    }
}


interface Calc {
     void equacao(double A, double B, double C);
}

class Funcoes :Calc {
    double D, R, S;
    
    public Funcoes() {}
    
    public Funcoes(double D, double R, double S) {
        this.D = D;
        this.R = R;
        this.S = S;
    }
    
    public void equacao(double A, double B, double C) {
        R = Math.Pow((A + B),2);
        S = Math.Pow((B + C),2);
        D = R + S / 2;
        Console.WriteLine("D = " + D);
    }
}









