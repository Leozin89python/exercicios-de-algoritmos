
def nadador(idade):
    if idade < 4 or idade >= 60:
        print('opção inválida')
    if idade >= 5 and idade <= 7:
        print('infantil A')
    if idade >= 8 and idade <= 10:
        print('infantil B')
    if idade >= 11 and idade <= 13:
        print('juvenil A')
    if idade >= 14 and idade <= 17:
        print('juvenil B')
    if idade >= 18:
        print('adulto')
        
        
nadador(2)
nadador(7)
nadador(11)
nadador(19)