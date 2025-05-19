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
