def media(nota1,nota2,nota3):
    total = (nota1 + nota2 + nota3) / 3
    if(total >= 6 and total <= 10):
        return 'aluno aprovado! média:' , total
    else:
        return 'aluno reprovado! média:', total
        
        

print(media(2,3,3))
print(media(9,7,5))