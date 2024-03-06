const zucchine = [
  { varieta: 'Verde scuro', peso: 100, lunghezza: 15 },
  { varieta: 'Verde chiaro', peso: 95, lunghezza: 14 },
  { varieta: 'Giallo a strisce', peso: 110, lunghezza: 16 },
  { varieta: 'Italiana', peso: 120, lunghezza: 18 },
  { varieta: 'Bianca', peso: 105, lunghezza: 17 },
  { varieta: 'Verde a strisce', peso: 115, lunghezza: 19 },
  { varieta: 'Gialla', peso: 125, lunghezza: 20 },
  { varieta: 'Mini', peso: 85, lunghezza: 12 },
  { varieta: 'Grassa', peso: 130, lunghezza: 21 },
  { varieta: 'Bianca a strisce', peso: 112, lunghezza: 16 }
];

console.log(zucchine);

function zucchiniWeight(zucchine) {
  let totalWeight = 0;
  for (let zucchina of zucchine) {
    totalWeight += zucchina.peso;
  }
  console.log("Il peso totale delle zucchine è di ", totalWeight + " kg");
}

zucchiniWeight(zucchine);