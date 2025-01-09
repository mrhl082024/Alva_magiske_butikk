const products = [
    { name: "Smartphone", price: 800, category: "electronics" },
    { name: "Headphones", price: 150, category: "electronics" },
    { name: "Coffee Maker", price: 100, category: "home appliances" },
    { name: "Blender", price: 250, category: "home appliances" },
    { name: "Laptop", price: 1200, category: "electronics" },
    { name: "T-shirt", price: 50, category: "clothing" },
    { name: "Sneakers", price: 300, category: "clothing" }
];


//CASE 1

//bruker .filter for å spesifisere at eg vil kun se produkter som har verdi 200 eller mindre.
const billig = products.filter((e) => e.price < 200);
console.table(billig)

//logger ut navnene på alle produkter
const produktListe = products.map((e) => e.name);
console.log(produktListe);

/*først filtrerer eg ut produktene som har kategorien elektronikk,
  så sier eg at eg vil ha ut navnene til varene*/
const populæreElektronikkVarer = products
    .filter((e) => e.category === "electronics")
    .map((e) => e.name);
console.log(populæreElektronikkVarer);

/*gir tilbake melding om det er ting som har verdi over 1000 eller ikke som en boolean */
const luksusProdukter = products.some((e) => e.price > 1000);
console.log(luksusProdukter);

/*legger til verdian fra alle produkter for å skrive ut en totalverdi */
const totalVerdi = products.reduce((sum,e) => sum + e.price, 0)
console.log(totalVerdi);


//CASE 2


