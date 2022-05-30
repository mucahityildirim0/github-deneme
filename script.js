// // function declaration

// function square(number) {
//   return number * number;
// }

// console.log(square(4));

// // function expression

// const square2 = function (number) {
//   return number * number;
// };

// console.log(square2(5));

// // arrow function expression ( daima function expression olarak yazılır.)

// const square3 = (x) => {
//   return x * x;
// };

// console.log(square3(7));

// // arrow function ın , normal fonksiyondan temel farkı this kavramıyla olan ilişkisinden kaynaklanmaktadır.

// window.name = "selam";

// function tellName() {
//   console.log(this);
//   console.log(this.name);
// }

// tellName();

// const person = {
//   name: "elis",
//   tellName: function () {
//     console.log(this);
//     console.log(this.name);
//   },
// };

// person.tellName();

window.name = "arin";

const tellName = () => {
  console.log(this);
  console.log(this.name);
};

tellName();

const person = {
  name: "elis",
  tellName: function () {
    console.log(this);
    console.log(this.name);
  },
};

person.tellName();
