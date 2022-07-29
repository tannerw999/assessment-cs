// 1) Sum Zero
function addToZero(arr) {
    for (let z = 0; z < arr.length; z++){
        for (let i = 0; i < arr.length; i++){
            if (z !==i){
                if (arr[z] + arr[i] === 0){
                    return true
                }  
            }
        }
    }
    return false
}
const res = addToZero([-5,-4,-3,-1,0,1,2,3,4,8]);
console.log(res);

// Space Complexity: O(n)

// 2) Unique Characters
const mySet = new Set()
function checkForSet (word){
  let string = word.split('')
  for (let i = 0; i< string.length; i++){
  mySet.add(string[i])
  }
  if (mySet.size === string.length){
    return true
  } else {
    return false
  }
}
console.log(checkForSet('monday'))

// Space Complexity: O(n)

// 3) Pangram Sentence
const str = 'The quick brown fox jumps over the lazy dog!';
const isPangram = (str = '') => {
   str = str.toLowerCase();
   const { length } = str;
   const alphabets = 'abcdefghijklmnopqrstuvwxyz';
   const alphaArr = alphabets.split('');
   for(let i = 0; i < length; i++){
      const el = str[i];
      const index = alphaArr.indexOf(el);
      if(index !== -1){
         alphaArr.splice(index, 1);
      };
   };
   return !alphaArr.length;
};
console.log(isPangram(str));

// Space Complexity: O(n)

// 4) Longest Word
function longestStringForLoop(arr) {
    let str
    let word = "";
    for (let i = 0; i < arr.length; i++) {
        if (word.length < arr[i].length) {
            word = arr[i];
        }
    }
    return word;
}
console.log(longestStringForLoop(['hi', 'hello']));

// Space Complexity: O(n)