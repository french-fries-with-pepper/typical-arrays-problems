
exports.min = function min (array) {
  if(!array||array.length===0) return 0;
  const n = array.length;
  let min = array[0];
  for (let i = 1; i < n; i++) {
    if(min>array[i]) min=array[i];
  }
  return min;
}

exports.max = function max (array) {
  if(!array||array.length===0) return 0;
  const n = array.length;
  let max = array[0];
  for(let i=1; i<n; i++) {
    if(max<array[i])max=array[i];
  }
  return max;
}

exports.avg = function avg (array) {
  if(!array||array.length===0) return 0;
  const n = array.length;
  let avg = 0;
  let sum = 0;
  for(let i=0; i<n; i++){
    sum +=array[i];
  }
  avg = sum / n;
  return avg;
}
