// let matrixArr = [
//   ["b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
//   ["b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
//   ["b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
//   ["b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
//   ["b", "b", "b", "b", "w", "w", "w", "w", "w", "b", "b", "b"],
//   ["b", "b", "b", "b", "w", "w", "w", "w", "w", "b", "b", "b"],
//   ["b", "b", "b", "b", "w", "w", "w", "w", "w", "b", "b", "b"],
//   ["b", "b", "b", "b", "w", "w", "w", "w", "w", "b", "b", "b"],
//   ["b", "b", "b", "b", "w", "w", "w", "w", "w", "b", "b", "b"],
//   ["b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
//   ["b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
//   ["b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
// ];

// function findRectangle(matrixArr) {
//   let top = 0;
//   let left = 0;
//   let height = 0;
//   let width = 0;

//   for (let i = 0; i < matrixArr.length; i++) {
//     for (let j = 0; j < matrixArr[i].length; j++) {
//       if (matrixArr[i][j] === "w" && top === 0 && left === 0) {
//         //    console.log(i,j)
//         top = i;
//         left = j;
//         break;
//       }

//       if (matrixArr[i][j] === "w") {
//         // console.log(i, j);
//         height = i - top + 1;
//         width = j - left + 1;
//       }
//     }
//   }

//   return {
//     top: top,
//     left: left,
//     height: height,
//     width: width,
//   };
// }
// // console.log(findRectangle(matrixArr));
// findRectangle(matrixArr);

// let arr = [9, 33, 0, 7, 2, 82, 77];

// let dividedArr = [];

// for (let i = 0; i < arr.length; i++) {
//   let lastNumber = arr.length - 1;
//   if (arr[i] == 0 || arr[i + 1] === 0) {
//     continue;
//   }
//   if (i === lastNumber) {
//     // console.log(i, lastNumber)
//     let x = arr[i] / arr[0];

//     dividedArr.push(x);
//   }
//   if (i !== lastNumber) {
//     let x = arr[i] / arr[i + 1];
//     dividedArr.push(x);
//   }
// }
// dividedArr(dividedArr)
// // console.log(dividedArr);

// let str = "My marks are 9 and my GAP = 12 and my age is 22 and this is example";

// let arr = str.split(" ");
// let sum = 0;
// let lastNumber = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 3 === 0) {
//     sum += Number(arr[i]);
//   }
//   if (Number(arr[i])) {
//     lastNumber = Number(arr[i]);
//   }
// }

// console.log(sum, lastNumber);

function killNext(n, k) {
    if (n === 1) {
        return 1;
    } else {
        return (killNext(n - 1, k) + k - 1) % n + 1;
    }
}
const persons = 100; 
const k = 2;  // skip person 
const theGunMan = killNext(persons, k);
console.log("The person left with the gun is: " + theGunMan);

