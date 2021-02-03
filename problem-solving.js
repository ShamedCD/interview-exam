function getFlips(arr, num) {
  let coinCounter = 0;

  arr.forEach((i) => {
    if (i !== num) {
      coinCounter += 1;
      num === 0 ? 1 : 0;
    }
  });

  return coinCounter;
}

function solution(A) {
  console.log(Math.min(getFlips(A, 1), getFlips(A, 0)));
}