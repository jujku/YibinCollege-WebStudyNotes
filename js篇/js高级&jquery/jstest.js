function Student() {}

let a = new Student();

Object.myInstanceof = function (obj, Fun) {
  if (obj === null) return false;

  if (Object.getPrototypeOf(obj) === Fun.prototype) {
    return true;
  } else {
    return Object.myInstanceof(Object.getPrototypeOf(obj), Fun);
  }
};
console.log(Object.myInstanceof(a, Student));
