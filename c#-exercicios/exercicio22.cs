using System;

namespace exercicio{
    public class Matematica{
        public static void Main(){
              Console.WriteLine("https://www.inf.pucrs.br/~pinho/LaproI/Exercicios/SeqDecisao/lista1.htm");
              Console.WriteLine("exercicio 22");
              
              Calc salarioG = new Geral();
              salarioG.sal("geral",1000);
              
              Calc salarioGG = new Gerente();
              salarioGG.sal("gerente",5000);
              
              Calc salarioT = new Tecnico();
              salarioT.sal("técnico",2000);
              
              Calc salarioE = new Engenheiro();
              salarioE.sal("engenheiro",4000);
        }
    }
}


class Calc{
     
     string cargo;
     double salario;
     
     public Calc() {}
     
     public Calc(string cargo, double salario) {
         this.cargo = cargo;
         this.salario = salario;
     }
     
     
      public virtual void sal(string cargo, double salario)  {
             this.salario = salario + (salario * 0.4);
             Console.WriteLine("Salario:" + salario);
          }
     
}


class Geral :Calc {
    public Geral() {}
    public override void sal(string cargo, double salario)  {
             salario +=  (salario * 0.4);
             Console.WriteLine("Salario:" + salario);
          }
}

class Gerente :Calc {
    public Gerente(){}
    public override void sal(string cargo, double salario){
        salario += (salario * 0.1);
        Console.WriteLine("Salario:" + salario);
    }
}

class Tecnico :Calc {
    public Tecnico(){}
    public override void sal(string cargo, double salario){
        salario += (salario * 0.3);
        Console.WriteLine("Salario:" + salario);
    }
}

class Engenheiro :Calc {
    public Engenheiro(){}
    public override void sal(string cargo, double salario){
        salario += (salario * 0.2);
        Console.WriteLine("Salario:" + salario);
    }
}
