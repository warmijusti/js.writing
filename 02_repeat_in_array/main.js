const displayArray = document.querySelector(".arrayField");
const asanas = [
  { name: "Tadasana", category: "de pie", difficulty: "low", duration: 5 },
  {
    name: "Trikonasana",
    category: "de pie",
    difficulty: "medium",
    duration: 3,
  },
  { name: "Sukasana", category: "de sentado", difficulty: "low", duration: 8 },
  { name: "Halasana", category: "inverted", difficulty: "hight", duration: 4 },
  { name: "Sirsana", category: "inverted", difficulty: "medium", duration: 5 },
  {
    name: "Savasana",
    category: "restaurativa",
    difficulty: "low",
    duration: 10,
  },
  {
    name: "Adho Mukha",
    category: "inverted",
    difficulty: "medium",
    duration: 5,
  },
];

const ourString =
  "Iyengar yoga is named after and developed by B.K.S. Iyengar who was a direct disciple of T. Krishnamacharya. Together with Pattabhi Jois (who developed Ashtanga yoga) he was partly responsible for bringing the practice of modern yoga, as we know it now, to the West.";

const ourStringTwo = ourString.toLowerCase();
let ourArray = ourStringTwo.split(" ");

displayArray.textContent = ourArray;

console.log(ourArray);

const terms = ourArray.map(function (term) {});
// NO TENGO IDEA QUÉ HACER
