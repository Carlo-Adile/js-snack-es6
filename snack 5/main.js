const biciDaCorsa = [
  { nome: "Bianchi Oltre XR4", peso: 7.2 },
  { nome: "Specialized Tarmac SL7", peso: 7.3 },
  { nome: "Cannondale SuperSix EVO", peso: 7.1 },
  { nome: "Trek Emonda SLR", peso: 6.8 },
  { nome: "Pinarello Dogma F12", peso: 7.0 }
];

let pesoMinore = Infinity;
let biciLeggera = null;

/* const {nome, peso} = biciDaCorsa; */

biciDaCorsa.forEach(bici => {
  const {nome, peso} = bici;
  
  if(peso < pesoMinore){
    pesoMinore = peso;
    biciLeggera = bici;
  };
});

console.log(`${biciLeggera.nome} è la bicicletta che pesa meno`);