function solution(s, letter) {
  let arrLetter = s.split("");
  let counter=0;
  arrLetter.forEach(element => element === letter ? counter++ : "");
  return counter;
}

console.log(solution('this is a test', 's'))
console.log(solution('this is a test', 'z'))
