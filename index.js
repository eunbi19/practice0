let person = {
  name: "은비",
  age: 31,
  height: 167,
};

//Object.keys란 매개변수로 받은 객체의 key들을 모두 찾아 배열의 형태로 반환하는 객체 메서드.
let newArray = Object.keys(person);

//newArray의 배열 요소를 순회할 수 있도록 length 프로퍼티 사용
for (let i = 0; i < newArray.length; i++) {
  //newArray의 배열 요소, 즉 person 객체의 key값을 저장
  let nowkey = newArray[i]; //key
  console.log(`key : ${nowkey}, value : ${person[nowkey]}`);
}
