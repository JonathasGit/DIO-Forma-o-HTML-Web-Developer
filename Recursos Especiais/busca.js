var searchField = document.getElementById('busca');
var descricaobusca = document.getElementById('descricao');
var textDaBusca = descriptionObject.innerHTML;

function realizaBusca(busca){
    const regex = new RegExp('(${busca})(?!(.(?!<mark>))*</mark>)+', 'ig');
    const ocurrences = textDaBusca.match(regex);
    descricaoObjj.innerHTML = textDaBusca.replace(regex, '<mark>${busca}</mark>')

}

searchField.addEventListener('keyup', (e) => realizaBusca(e.target.value));
