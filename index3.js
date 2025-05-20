let arr3 = [1, 2, 3, 4, 5];
let news = [];
for (let i = 0; i < arr3.length; i++) {
  arr3[i] = arr3[i] * 10;
}
console.log(arr3);

// map이라는 내장함수는 전달한 콜백함수를 호출한 결과를 모아서 새로운 배열로 반환해주는 내장 함수
// 즉, 원본 배열의 각 요소를 변환해서, 새 배열을 만드는 함수
// 그래서 반환값(return)이 꼭 있어야 새 배열을 만들 수 있음.

let arr4 = [1, 2, 3, 4, 5];
let newArr1 = arr4.map((elm) => {
  return elm * 10;
});
console.log(newArr1);

let colors = ["green", "blue", "purple"];

console.log(colors[colors.length - 2]);

// let arrnum = {
//   name: "은비",
//   age: 31,
//   height: 167,
// };
// for (let key in arrnum) {
//   console.log(`<li>key : ${key}, value : ${arrnum[key]}</li>`);
// }

// let myinfo2 = {
//   list1: {
//     name: "은비",
//     age: 31,
//   },
//   list2: function () {
//     for (let key in this.list1) {
//       console.log(key, this.list1[key]);
//     }
//   },
// };
// myinfo2.list2();

// let key2 = "list1";
// myinfo2[key2];

let person3 = {
  name: "은비",
  age: 31,
  height: 167,
};
let newarr6 = Object.entries(person3);
for (let i = 0; i < newarr6.length; i++) {
  let key = newarr6[i];
  console.log(`key : ${key}, value : ${newarr6[key]}`);
}

console.log(Object.entries(person3));

const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {});

// [3, 6, 1, 9, 12] 배열의 모든 요소를 더해서
// 총합을 출력해보세요

let arrNumm = [3, 6, 1, 9, 12];
let total = 0;
for (let i = 0; i < arrNumm.length; i++) {
  total += arrNumm[i];
}
console.log(total);

// ["apple", "banana", "kiwi", "orange"] 배열을 돌면서
// 각 단어와 그 길이를 다음 형식으로 출력해보세요
// 예시: apple - 5글자

// 코드 들어갈 곳
let word = ["apple", "banana", "kiwi", "orange"];
for (i = 0; i < word.length; i++) {
  console.log(`${i + 1}번째의 ${word[i]} - ${word[i].length}글자`);
}

// let arrTest = [3, 6, 1, 9, 12];
// let total = 0;
// for (let i = 0; i < arrTest.length; i++) {
//   console.log(
//     `total(${total}) + arrTest[${i}](${arrTest[i]}) = ${total + arrTest[i]}`
//   );
// }
// console.log(total);

// total(0) + arrTest[0](3) = 3
// total(0) + arrTest[1](6) = 6
// total(0) + arrTest[2](1) = 1
// total(0) + arrTest[3](9) = 9
// total(0) + arrTest[4](12) = 12

// for (let i = 0; i < arr.length; i++) {
//   console.log(`i는 지금 ${i}이고, arr[i]는 ${arr[i]}입니다`);
// }
// i는 지금 0이고, arr[i]는 100입니다
// i는 지금 1이고, arr[i]는 200입니다
// i는 지금 2이고, arr[i]는 300입니다
