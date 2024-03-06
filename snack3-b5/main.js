function reverseThis(userPrompt){
  let normalWord = userPrompt.split("");
  let inverseWord = normalWord.reverse();
  let finalWord = inverseWord.join("");
  console.log(finalWord)
}

reverseThis(prompt("enter a word to reverse"))