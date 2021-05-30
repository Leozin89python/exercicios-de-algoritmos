def media(nota1, nota2, nota3):
     if nota1 > nota2 and nota1 > nota3:
        ponderada = ((nota1 * 4) + (nota2 * 3) + (nota3 * 3)) / 10
        if ponderada >= 6 and ponderada <= 10:
            return 'aluno aprovado! média:', ponderada
        else:
            return 'aluno reprovado! média:', ponderada
     if nota2 > nota1 and nota2 > nota3:
        ponderada = ((nota1 * 3) + (nota2 * 4) + (nota3 * 3)) / 10
        if ponderada >= 6 and ponderada <= 10:
            return 'aluno aprovado! média:', ponderada
        else:
            return 'aluno reprovado! média:', ponderada
     if nota3 > nota2 and nota3 > nota1:
        ponderada = ((nota1 * 3) + (nota2 * 3) + (nota3 * 4)) / 10
        if ponderada >= 6 and ponderada <= 10:
            return 'aluno aprovado! média:', ponderada
        else:
            return 'aluno reprovado! média:', ponderada
            
            
print(media(7,8,9))
print(media(0,5,3))        
print(media(6,5,7))  