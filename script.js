//Recuperiamo gli elementi dal DOM
const emailList = document.getElementById('lista-email');
const button =document.getElementById('btn');


// Funzione per generare una lista di email
const mailArray = [];
let items = 10;
const endpoint = `https://flynn.boolean.careers/exercises/api/random/mail?items=${items}`;

//funzione per generare nuove mail tramite bottone
button.addEventListener('click', function() {
    // Svuotiamo la lista esistente
    emailList.innerHTML = '';
    // Effettuiamo una chiamata API per ottenere le email
    for (let i = 0; i < items; i++) {
        axios.get(endpoint).then((response) => {
            const mailArray = response.data.response;
            console.log(mailArray);
            // Creiamo un elemento <li> per ogni email e lo aggiungiamo alla lista
            const lista = document.createElement('li');
            lista.innerHTML = mailArray;
            emailList.append(lista);
        })
    }
})













