//1) Elaborar um programa no qual sejam digitadas 4 notas. Deve ser calculada uma média 
//e mostrada na tela. Se a média for maior ou igual a 7, mostrar uma mensagem "Aprovado", 
//se for menor que 7, mostrar uma mensagem "Reprovado". (DESAFIO: Criar uma terceira 
//condição para recuperação. Exemplo: Menor que 5 reprovado, entre 5 e 7 recuperação, 
//maior ou igual aprovado).*

notaUm = document.getElementById ("primeiraNota")

notaDois = document.getElementById ("segundaNota")

notaTres = document.getElementById ("terceiraNota)

notaQuaetro = document.getElementById ("quatroNota")

let somaNota
let mediaNota


    somaNota = ( notaUm.value + notaDois + notaTres + notaQuatro )/4   

    mediaNota = somaNota

  if (mediaNota > 7) 

alert(`aprovado ! mediaNota,: mediaNota`)

   else(mediaNota < 7)

lert(`Reprovado ! mediaNota,: mediaNota`)


 fimif    


