const animalList = [
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' }
]

const mammalsList = animalList.filter(mammals => mammals.classe === "mammiferi");

console.log("la lista con i mammiferi è: ")
console.log(mammalsList)

const personList = [
  {
    nome: 'Carlo', cognome: 'Adile', età: 24
  },
  {
    nome: 'Tizio', cognome: 'Caio', età: 22
  },
  {
    nome: 'Pinco', cognome: 'Pallo', età: 17
  }
]

const personCanDrink = personList.filter((checkPerson) => checkPerson.età >= 18)
/* console.log(personCanDrink) */

personCanDrink.forEach((person) => {
  console.log(person.nome + ' ' + person.cognome + ' can drink')
});