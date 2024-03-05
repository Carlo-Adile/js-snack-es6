const animalList = [
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' }
]

const mammalsList = animalList.filter(mammals => mammals.classe === "mammiferi")
console.log(mammalsList)