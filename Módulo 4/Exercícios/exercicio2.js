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

function listRepositories(){
    var user = inputElement.value;
    inputElement.value = '';
    axios.get('https://api.github.com/users/' + user + '/repos')
    .then(function(response){
        renderRepositories(response.data);
    })
}


