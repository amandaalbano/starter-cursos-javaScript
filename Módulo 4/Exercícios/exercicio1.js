
function checaIdade(idade) {
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(idade >=18){
                resolve(); 
            }else{
                reject();
            }
        },2000)
    })
}
   checaIdade(20)
    .then(function() {
    console.log("Maior ou igual a 18 anos");
    })
    .catch(function() {
    console.log("Menor que 18 anos");
    });

    