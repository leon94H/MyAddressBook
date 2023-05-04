
// WRAPPER

let cardWrapper = document.querySelector('#cardWrapper');

// BUTTON SHOW CONTACT 

let showContacts = document.querySelector('#showContactsBtn');


// BUTTON ADD CONTACT

let addContactBtn = document.querySelector('#addContactBtn');


// BUTTON REMOVE CONTACT 

let removeContactBtn = document.querySelector('#removeContactBtn');

// CATTURA INPUT

let nameInput = document.querySelector('#nameInput');

let numberInput = document.querySelector('#numberInput');









// VARIABILE D'APPOGGIO

let confirm = false;



const RUBRICA = {

  // Gli oggetti

  contacts:[

   { name : 'Giulia', number: '303997611'},

   { name : 'Walter', number: '3900487611'},

   { name : 'Ratul', number: '3450097653'},

   { name : 'Jennifer', number: '3720082273'},

   { name : 'Veronica', number: '3320011833'},


  ],

  // metodo crea i contatti

  showContacts : function(){


    cardWrapper.innerHTML = '';


    this.contacts.forEach((contact)=>{


        let div = document.createElement('div');

        div.classList.add('col-12', 'col-lg-8', 'my-3');

        div.innerHTML=` <div class="card-custom">

        <h4>${contact.name}</h4>
        <h4>${contact.number}</h4>
        <i class="fa-regular fa-trash-can fa-2x pointer icon"></i>

        </div>`;

        cardWrapper.appendChild(div);



    })


    // RIMUOVI TRAMITE ICONE

    let icons = document.querySelectorAll('.icon');

    icons.forEach( (icona, i)=>{


      icona.addEventListener('click', ()=>{

          let nome = this.contacts[i].name;
          this.removeContact(nome);
              })
      })




  },

      // metodo aggiungi contatto

        addContact:function(newName , newNumber){

        

            this.contacts.push({name:newName , number:newNumber});

            RUBRICA.showContacts();

            nameInput.value = '';

            numberInput.value = '';




          




        },


      // metodo rimuovi contatto


       removeContact : function(removedName){

        let names = this.contacts.map((contact)=>contact.name.toLowerCase());

        let index = names.indexOf(removedName.toLowerCase());

        if(index > -1){

          this.contacts.splice(index, 1);

          this.showContacts();

        } else {

             alert('Contatto non presente in rubrica');

             showContacts.innerHTML = "Mostra Rubrica";
        }

       }






}








// evento bottone mostra contatto


showContactsBtn.addEventListener('click', ()=>{



    if(confirm == false){
     
   
    RUBRICA.showContacts();

    confirm = true;

    showContactsBtn.innerHTML = 'Nascondi rubrica';


    } 

    else{

        cardWrapper.innerHTML = '';

        confirm = false;

        showContactsBtn.innerHTML = 'Mostra rubrica';
    }


    

})

// evento bottone aggiungi contatto

addContactBtn.addEventListener('click', ()=>{



  if(nameInput.value != '' && numberInput.value != ''){


    confirm = true;

    RUBRICA.addContact(nameInput.value , numberInput.value);
  
    RUBRICA.showContacts();
  
    showContactsBtn.innerHTML = 'Nascondi rubrica';

    

  } else {

    alert('Attenzione! Devi inserire un nome e un numero!');

    showContactsBtn.innerHTML = "Mostra Rubrica";

    confirm = false;

  }

 
})


// evento bottone rimuovi contatto

removeContactBtn.addEventListener('click', ()=>{



  if(nameInput.value !=''){

  confirm = true;

  RUBRICA.removeContact(nameInput.value);

  showContactsBtn.innerHTML = 'Nascondi rubrica';

  nameInput.value = '';}

  else {

    alert('Contatto non presente in rubrica');

    ShowCOntactsBtn.innerHTML = 'Mostra rubrica';

    confirm = false;
  }


})

