import "reflect-metadata";

// const plane = {
//   color: "red"
// };

// Reflect.defineMetadata("note", "hi there", plane);
// Reflect.defineMetadata("note", "ahoy", plane, "color");

// console.log(plane);

// const note = Reflect.getMetadata("note", plane);
// const note2 = Reflect.getMetadata("note", plane, "color");
// console.log(note);
// console.log(note2);

@printMetadata
class Plane {
  color: string = "red";

  @markFunction("HI THERE")
  fly(): void {
    console.log("vrrrrrrr");
  }
}

function markFunction(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata("secret", secretInfo, target, key);
  };
}

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata("secret", target.prototype, key);
    console.log(secret);
  }
}
