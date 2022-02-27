const asanas= [
    {name: "Tadasana", category: "de pie", difficulty: "low", duration: 5},
    {name: "Trikonasana", category: "de pie", difficulty: "medium", duration: 3},
    {name: "Sukasana", category: "de sentado", difficulty: "low", duration: 8},
    {name: "Halasana", category: "inverted", difficulty: "hight", duration: 4},
    {name: "Sirsana", category: "inverted", difficulty: "medium", duration: 5},
    {name: "Savasana", category: "restaurativa", difficulty: "low", duration: 10},
    {name: "Adho Mukha", category: "inverted", difficulty: "medium", duration: 5},
];

let longestAsanaField = document.querySelector('.longestAsanaField');
let invertedAsanaField = document.querySelector('.invertedAsanaField');

const longestAsana = asanas.sort(function (d1, d2) {
    if(d1.duration > d2.duration) {
        return -1
    } else {
        return 1
    };
});

longestAsanaField.innerHTML = longestAsana[0].name;

/* const invertidaAsana = [];
for(let i = 0; i > asanas.lenght; i++) {
    if (asana.category === 'invertida'){
        invertidaAsana.push(asana[i]);
    }
} NO ME SALE */


const invertedAsana = asanas.filter(function(asana) {
    if (asana.category === 'inverted'){
        return true
    }; 
});


/* como mostrar la lista completa? */
invertedAsanaField.innerHTML = invertedAsana[0].name;