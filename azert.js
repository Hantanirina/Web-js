const button = document.querySelector("#validation");
let containt = ["Azerty", "Querty", "Ninah"];
let sum = 0;
let score = 0;
button.addEventListener("click", () => {
  const containt = document.querySelector("#containt").value;
  const mots = document.querySelector("#mots").value;
  for (let i = 1; (i = containt.length); i++) {
    if (containt[index] === mots) {
      sum += i;
      score = sum;
      return score, i;
    }
  }
});
