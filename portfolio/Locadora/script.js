function validationForm() {
    let validationCod = document.forms['register']['cod'].value;
    let validationTitle = document.forms['register']['title'].value;
    let validationActor = document.forms['register']['actor'].value;
    let validationScore = document.forms['register']['score'].value;
    let validationDirector = document.forms['register']['director'].value;
    let validationDate = document.forms['register']['date'].value;
    let validationRadio = document.forms['register']['radio'].value;

    if (validationCod === "") {
        alert("O Código deve ser preenchido");
        return false;
    }
    if (validationTitle === "") {
        alert("O Título deve ser preenchido");
        return false;
    }
    if (validationActor === "") {
        alert("O Ator(a) deve ser preenchido");
        return false;
    }
    if (validationScore === "") {
        alert("O Score deve ser preenchido");
        return false;
    }
    if (validationDirector === "") {
        alert("O Diretor deve ser preenchido");
        return false;
    }
    if (validationDate === "") {
        alert("O título deve ser preenchido");
        return false;
    }
    if (validationRadio === "") {
        alert("O Gênero deve ser preenchido");
        return false;
    } else {
        alert("A validação ocorreu de forma correta");
    }

    
}

function insert() {
    let cod = document.forms['register']['cod'].value;
    let title = document.forms['register']['title'].value;
    let actor = document.forms['register']['actor'].value;
    let score = document.forms['register']['score'].value;
    let director = document.forms['register']['director'].value;
    let date = document.forms['register']['date'].value;
    let radio = document.forms['register']['radio'].value;

    let insert = window.document.getElementById("insertRow");

    insert.innerHTML = `
    <th scope="row">${cod}</th>
    <td>${title}</td>
    <td>${director}</td>
    <td>${date}</td>
    <td>${radio}</td>
    <td>${actor}</td>
    <td>${score}</td>
    `;
}