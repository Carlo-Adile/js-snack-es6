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


zucchiniWeight(zucchine.filter(zucchina => zucchina.lunghezza <= 15), zucchine.filter(zucchina => zucchina.lunghezza > 15));

function zucchiniWeight(shortZucchini, longZucchini) {
  let totalShortWeight = 0;
  let totalLongWeight = 0;

  for (let zucchina of zucchine) {
    if (zucchina.lunghezza <= 15) {
      totalShortWeight += zucchina.peso;
    } else {
      totalLongWeight += zucchina.peso;
    }
  }
  console.log("Il peso totale delle zucchine corte è:", totalShortWeight);
  console.log("Il peso totale delle zucchine lunghe è:", totalLongWeight);
}

