const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

let freq = {}, maxItem = null, maxCount = 0;

arr1.forEach(item => {
  freq[item] = (freq[item] || 0) + 1;
  if (freq[item] > maxCount) {
    maxCount = freq[item];
    maxItem = item;
  }
});

console.log(`${maxItem} ( ${maxCount} times )`);
