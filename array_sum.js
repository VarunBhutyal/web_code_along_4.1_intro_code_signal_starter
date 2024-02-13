function solution(a) {
  let sum=0;
  a.forEach(ele => sum += ele);
  return sum ;
}

console.log(solution([]))
console.log(solution([1, 2]))
console.log(solution([2, 4, 8]))
