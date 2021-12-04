/*
initialize a new Map
initialize a new Set
for each element e of a do:
  add e to the Map

for each element e of b do:
  lookup e in the Map
  if e is in the Map then
    add e to the Set
convert the Set to an array and return
*/

function intersection(a, b) {
  let aMap = new Map();
  let aSet = new Set();
  for (let e = 0; e < a.length; e++) {
    aMap.set(a[e]);
  }
  for (let e = 0; e < b.length; e++) {
    if (aMap.has(b[e])) {
      aSet.add(b[e]);
    }
  }
  let aArray = [...aSet];
  return aArray;
}

/*
BOOK SOLUTION
function intersection(a, b) {
  const map = new Map();
  const results = new Set();
  for (let e of a) {
    map.set(e, e);
  }

  for (let e of b) {
    if (map.has(e)) {
      results.add(e);
    }
  }

  return Array.from(results);
}
*/

module.exports = intersection;
