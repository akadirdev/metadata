import { model } from "./decorators/model.decorator";
import { property } from "./decorators/property.decorator";

@model("person")
class Person {
  @property({
    id: true,
  })
  id?: number;

  @property({
    name: "p_name",
    type: "string",
    required: true,
  })
  name: string;

  constructor() {}
}

@model("school")
class School {
  @property({
    id: true,
  })
  id?: number;

  @property({
    name: "s_name",
    type: "string",
    required: true,
  })
  sname: string;

  constructor() {}
}

console.log(Reflect.getMetadata("meta:model", Person));
console.log(Reflect.getMetadata("meta:property", Person));
console.log(Reflect.getMetadataKeys(Person));

console.log(Reflect.getMetadata("meta:model", School));
console.log(Reflect.getMetadata("meta:property", School));
console.log(Reflect.getMetadataKeys(School));
