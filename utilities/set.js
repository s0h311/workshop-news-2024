const arr1 = ["a", "n", "g", "u", "l", "a", "r"];
const arr2 = ["r", "e", "a", "c", "t"];

const set1 = new Set(arr1);
const set2 = new Set(arr2);

console.log(set1.difference(set2));
console.log(set1.intersection(set2));
console.log(set1.isDisjointFrom(set2));
console.log(set1.isSubsetOf(set2));
console.log(set1.isSupersetOf(set2));

console.log("========\n========");

console.log(new Set(["a", "b", "c"]).isDisjointFrom(new Set(["d", "e", "f"])));
console.log(new Set(["a", "b", "c"]).isSubsetOf(new Set(["a", "b", "c", "d"])));
console.log(new Set(["a", "b", "c"]).isSupersetOf(new Set(["a", "b"])));
