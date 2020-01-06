let city = ['A', 'B', 'C'];

function perm(l) {
  if (l.length > 1) {
    let r = [];
    for (let i = 0; i < l.length; i++) {
      let arr = l.slice();
      arr.splice(i, 1);
      let p = perm(arr);
      for (let j of p) {
        r.push([...l[i], ...j])
      }
    }
    return r;
  } else {
    return [l];
  }
}

console.log(perm(city));
