const age: number = 19;
const isVampire: boolean = false;

const obj: object = {
  name: "Jessica",
};

let test;

const test2 = null;

function showData(data: unknown) {
  if (typeof data === "string") {
    return console.log("Isso é uma string" + data);
  }
}

type newType = string;

type bothTypes = string | number;

type taskStatus = "TODO" | "DOING" | "DONE";

class Human {
  name: newType;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    console.log("Olá, " + this.name);
  }
}

const pessoa = new Human("Isabelle", 19);
