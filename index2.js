//for ... in 반복문 기본 문법
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let myinfo = {
  name: "은비",
  age: 31,
  height: 167,
  hobby: "health",
};
for (let my in myinfo) {
  console.log(`${my} : ${myinfo[my]}`);
}

//for ...in 반복문을 배열요소를 하나씩 꺼내기

let arr2 = ["apple", "grape", "banana"];
for (let i in arr2) {
  console.log(`${i}번째 과일 : ${arr2[i]}`);
}
