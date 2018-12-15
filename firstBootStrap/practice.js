let array = ["number", "item", "price"];
let arrayy = [1, "milk", 2];

const testFunction = (x, y) => {
  let shoppingList = {};
  array.forEach((e, i) => {
    shoppingList[e] = arrayy[i];
  });
  return shoppingList;
};

console.log(testFunction(array, arrayy));
