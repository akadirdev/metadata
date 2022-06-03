import { Person } from "./models/person.model";

console.log(Reflect.getMetadata("meta:model", Person));
console.log(Reflect.getMetadata("meta:property", Person));
console.log(Reflect.getMetadataKeys(Person));

const p = new Person({ name: "akadirdev" });

function getObjectDef(target: Object) {
  const modelName = Reflect.getMetadata("meta:model", target);
  const propDef = Reflect.getMetadata("meta:property", target);
  return {
    [modelName]: propDef,
  };
}

console.log(getObjectDef(Person));
