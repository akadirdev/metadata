import { Person } from "./models/person.model";

console.log(Reflect.getMetadata("meta:model", Person));
console.log(Reflect.getMetadata("meta:property", Person));
console.log(Reflect.getMetadataKeys(Person));

const p = new Person({ name: "cafer" });

function getObjectDef(target: Object) {
  const modelName = Reflect.getMetadata("meta:model", target);
  const propDef = Reflect.getMetadata("meta:property", target);
  return {
    [modelName]: propDef,
  };
}

console.log(getObjectDef(Person));

export namespace Dorm {
  export interface IDatasource {
    readonly _client: any;

    get client();
  }
}

export interface WhereFilter<T> {}

export interface RepositoryOptions {}

export class BaseDatasource implements Dorm.IDatasource {
  readonly _client: any;

  get client(): any {
    return this._client;
  }
}

export class BaseRepository<T> {
  private ds: BaseDatasource;

  constructor(ds: Dorm.IDatasource) {
    this.ds = ds;
  }

  public async find(
    where: WhereFilter<T>,
    options?: RepositoryOptions
  ): Promise<T[]> {
    return [
      {
        id: 1,
        name: "hasan ali",
      },
      {
        id: 2,
        name: "cafer mehmet",
      },
      {
        id: 3,
        name: "ali cafer",
      },
    ] as unknown as T[];
  }
}

// @repository()
export class PersonRepository extends BaseRepository<Person> {
  constructor(ds: BaseDatasource) {
    super(ds);
  }

  async findAndList(id: number, options?: any): Promise<Person[]> {
    const persons = await this.find({});
    return persons.filter((f) => f.name.includes("cafer"));
  }
}
