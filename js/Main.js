let tagNome = document.getElementById("tagNome");
let esito = document.getElementById("esito");
let formElenco = document.getElementById("elenco");
let invitati = [];
function aggiungi() {
    if(tagNome.value.indexOf("  ") == -1){
        invitati.push(tagNome.value.toLocaleLowerCase());
        esito.innerHTML = "Nome aggiunto alla lista";
        elenco()
    } else {
        esito.innerHTML = "Inserire nome";
    }
}

function cerca() {
    if (invitati.indexOf(tagNome.value.toLocaleLowerCase()) != -1)
        esito.innerHTML = tagNome.value + " presente in lista";
    else esito.innerHTML = "Nome non presente in lista";
}

function elimina() {
    if (invitati.indexOf(tagNome.value.toLocaleLowerCase()) != -1) {
        invitati.splice(invitati.indexOf(tagNome.value.toLocaleLowerCase()),1);
        esito.innerHTML = tagNome.value + " eliminato dalla lista";
    }
    else esito.innerHTML = "Nome non presente in lista";
    elenco()
}

function elenco(){
    if (invitati.length == 0) {
        formElenco.innerHTML = "Elenco vuoto";
    } else {
        formElenco.innerHTML = '';
        for (let i = 0; i < invitati.length; i++) {
            if(parseInt(i) == invitati.length - 1)
            formElenco.innerHTML += ' ' + invitati[i];
            else formElenco.innerHTML += ' ' + invitati[i] + ', ';
        }
    }
}