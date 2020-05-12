var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input');

function renderRepositories(repositories){
    listElement.innerHTML = '';
    for(repositorio of repositories){
        var textElement = document.createTextNode(repositorio.name);
        var liElement = document.createElement('li');

        liElement.appendChild(textElement);
        listElement.appendChild(liElement);

    }
}

function renderLoading(){
    listElement.innerHTML = '';
    var loadingElement = document.createTextNode('Carregando...');
    listElement.appendChild(loadingElement);
}

function renderError(){
    listElement.innerHTML = '';
    var erroElement = document.createTextNode('Erro! Usuário não existe.');
    listElement.style.color = "#F00";
    listElement.appendChild(erroElement);
    

}

function listRepositories(){
    var user = inputElement.value;
    inputElement.value = '';
    if(!user){
        return;
    }
    renderLoading();
    axios.get('https://api.github.com/users/' + user + '/repos')
    
    .then(function(response){
        renderRepositories(response.data);
    })
    .catch(function(){
        renderError();
    })
}


