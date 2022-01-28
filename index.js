let totalAlunos = 20;

for (let i = 0; i < totalAlunos; i++){
    if (i == 0){
        console.log('O número é ZERO');
    } else if (i % 2 == 0){
        console.log(`O número ${i} é PAR`);
    } else if (i % 2 == 1){
        console.log(`O número ${i} é IMPAR`);
    }
}