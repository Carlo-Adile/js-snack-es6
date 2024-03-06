const squadreDiCalcio = [
  { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Roma", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Napoli", puntiFatti: 0, falliSubiti: 0 }
];

function randomNumb(){
  let x = Math.random() * 5;
  return parseInt(x);
}

squadreDiCalcio.forEach((squadra) => {
  squadra.puntiFatti = randomNumb();
  squadra.falliSubiti = randomNumb();

  console.log(`${squadra.nome} ha segnato ${squadra.puntiFatti} goal ed ha subito ${squadra.falliSubiti} falli`);
});

