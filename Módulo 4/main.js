//AJAX - requisição assíncrona no backend

//var xhr = new XMLHttpRequest();
//xhr.open('GET', 'https://api.github.com/users/amandaalbano');
//xhr.send(null);
//xhr.onreadystatechange = function(){
  //  if(xhr.readyState ===4){
    //    console.log(JSON.parse(xhr.responseText));
    //}
//}

//PROMISES
// var minhaPromise = function(){
//     return new Promise(function(resolve,reject){
//         var xhr = new XMLHttpRequest();
//         xhr.open('GET', 'https://api.github.com/users/amandaalbano');
//         xhr.send(null);

//         xhr.onreadystatechange = function(){
//             if(xhr.readyState ===4){
//                 if(xhr.status ===200){
//                     resolve(JSON.parse(xhr.responseText));
//                 }else{
//                     reject('Erro na requisição.');
//                 }
//             }
//         }
//     })
// }

//Utilizando biblioteca AXIOS
axios.get('https://api.githu.com/users/amandaalbano')
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    })
