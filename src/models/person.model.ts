import { model } from "../decorators/model.decorator";
import { property } from "../decorators/property.decorator";

@model("person")
export class Person {
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

  constructor(data?: Partial<Person>) {
    Object.assign(this, data ?? {});
  }
}
