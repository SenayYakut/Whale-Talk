let input = 'a whale of a deal!';
const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for(let i = 0; i < input.length; i++){
  for(let j = 0; j < vowels.length; j++){
    if(input[i] === vowels[j]){
      resultArray.push(vowels[j]);
      if (input[i] === 'e' || input[i] === 'u') {
        resultArray.push(input[i]);
      }
  }
 }
}
  
  console.log(resultArray.join("").toUpperCase());
  //‘turpentine and turtles’ UUEEIEEAUUEE
  //'Hi, Human' IUUA
  //'a whale of a deal!' AAEEOAEEA


  

