//Recuperiamo gli elementi dal DOM
const emailList = document.getElementById('lista-email');
const button = document.getElementById('btn');
const spinner = document.getElementById('spinner');

// Funzione per generare una lista di email
const mailArray = [];
let items = 10;
const endpoint = `https://flynn.boolean.careers/exercises/api/random/mail`;
let emailsLoaded = 0;

//funzione per generare nuove mail tramite bottone
button.addEventListener('click', function() {
    // Svuotiamo la lista esistente
    emailList.innerHTML = '';
    
    // Reset contatore
    emailsLoaded = 0;
    
    // Effettuiamo una chiamata API per ottenere le email
    for (let i = 0; i < items; i++) {
        axios.get(endpoint)
            .then((response) => {
                const email = response.data.response;
                console.log(email);
                
                // Aggiungiamo alla lista
                const lista = document.createElement('li');
                lista.className = 'list-group-item';
                lista.innerHTML = email;
                emailList.append(lista);
                
                emailsLoaded++;
            })
        console.clear();
}    }   )                 
 













