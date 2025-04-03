//Recuperiamo gli elementi dal DOM
const emailList = document.getElementById('lista-email');


// Funzione per generare una lista di email
let items = 10;
const endpoint = `https://flynn.boolean.careers/exercises/api/random/mail?items=${items}`;

axios.get(endpoint).then((response) => {
    const emails = response.data.response;
    console.log(emails);
    // Iteriamo sull'array di email e creiamo gli elementi <li>
    for (let i = 0; i < emails.length; i++) {
        const email = emails[i];
        const li = document.createElement('li');
        li.innerHTML = email;
        emailList.append(li);
    }
})



